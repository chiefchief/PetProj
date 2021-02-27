//react-native-webrtc/react-native-webrtc

import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Alert, Pressable} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {useFocusEffect} from '@react-navigation/native';

import InCallManager from 'react-native-incall-manager';

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';
import {Text, TextInput} from '@components';

export default function CallScreen({navigation, ...props}) {
  let name;
  let connectedUser;
  const [userId, setUserId] = useState('24');
  const [socketActive, setSocketActive] = useState(false);
  const [calling, setCalling] = useState(false);
  // Video Scrs
  const [localStream, setLocalStream] = useState({toURL: () => ''});
  const [remoteStream, setRemoteStream] = useState({toURL: () => ''});
  const [conn, setConn] = useState(new WebSocket('ws://3.20.188.26:8080'));
  const [yourConn, setYourConn] = useState(
    //change the config as you need
    new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
        {
          urls: 'stun:stun1.l.google.com:19302',
        },
        {
          urls: 'stun:stun2.l.google.com:19302',
        },
      ],
    }),
  );

  const [offer, setOffer] = useState(null);

  const [callToUsername, setCallToUsername] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Your ID - ' + userId,
      headerRight: () => (
        <Pressable onPress={onLogout} style={{paddingRight: 10}}>
          <Text>Logout</Text>
        </Pressable>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  /**
   * Calling Stuff
   */

  useEffect(() => {
    if (socketActive && userId.length > 0) {
      try {
        InCallManager.start({media: 'audio'});
        InCallManager.setForceSpeakerphoneOn(true);
        InCallManager.setSpeakerphoneOn(true);
      } catch (err) {
        console.log('InApp Caller ---------------------->', err);
      }

      console.log(InCallManager);

      send({
        type: 'login',
        name: userId,
      });
    }
  }, [socketActive, userId]);

  const onLogin = () => {};

  useEffect(() => {
    /**
     *
     * Sockets Signalling
     */
    conn.onopen = () => {
      console.log('Connected to the signaling server');
      setSocketActive(true);
    };
    //when we got a message from a signaling server
    conn.onmessage = (msg) => {
      let data;
      if (msg.data === 'Hello world') {
        data = {};
      } else {
        data = JSON.parse(msg.data);
        console.log('Data --------------------->', data);
        switch (data.type) {
          case 'login':
            console.log('Login');
            break;
          //when somebody wants to call us
          case 'offer':
            handleOffer(data.offer, data.name);
            console.log('Offer');
            break;
          case 'answer':
            handleAnswer(data.answer);
            console.log('Answer');
            break;
          //when a remote peer sends an ice candidate to us
          case 'candidate':
            handleCandidate(data.candidate);
            console.log('Candidate');
            break;
          case 'leave':
            handleLeave();
            console.log('Leave');
            break;
          default:
            break;
        }
      }
    };
    conn.onerror = function (err) {
      console.log('Got error', err);
    };
    /**
     * Socjket Signalling Ends
     */

    let isFront = false;
    mediaDevices.enumerateDevices().then((sourceInfos) => {
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind == 'videoinput' && sourceInfo.facing == (isFront ? 'front' : 'environment')) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices
        .getUserMedia({
          audio: true,
          video: {
            mandatory: {
              minWidth: 500, // Provide your own width, height and frame rate here
              minHeight: 300,
              minFrameRate: 30,
            },
            facingMode: isFront ? 'user' : 'environment',
            optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
          },
        })
        .then((stream) => {
          // Got stream!
          setLocalStream(stream);

          // setup stream listening
          yourConn.addStream(stream);
        })
        .catch((error) => {
          // Log error
        });
    });

    yourConn.onaddstream = (event) => {
      console.log('On Add Stream', event);
      setRemoteStream(event.stream);
    };

    // Setup ice handling
    yourConn.onicecandidate = (event) => {
      if (event.candidate) {
        send({
          type: 'candidate',
          candidate: event.candidate,
        });
      }
    };
  }, []);

  const send = (message) => {
    //attach the other peer username to our messages
    if (connectedUser) {
      message.name = connectedUser;
      console.log('Connected iser in end----------', message);
    }

    conn.send(JSON.stringify(message));
  };

  const onCall = () => {
    setCalling(true);

    connectedUser = callToUsername;
    console.log('Caling to', callToUsername);
    // create an offer

    yourConn.createOffer().then((offer) => {
      yourConn.setLocalDescription(offer).then(() => {
        console.log('Sending Ofer');
        console.log(offer);
        send({
          type: 'offer',
          offer: offer,
        });
        // Send pc.localDescription to peer
      });
    });
  };

  //when somebody sends us an offer
  const handleOffer = async (offer, name) => {
    console.log(name + ' is calling you.');

    console.log('Accepting Call===========>', offer);
    connectedUser = name;

    try {
      await yourConn.setRemoteDescription(new RTCSessionDescription(offer));

      const answer = await yourConn.createAnswer();

      await yourConn.setLocalDescription(answer);
      send({
        type: 'answer',
        answer: answer,
      });
    } catch (err) {
      console.log('Offerr Error', err);
    }
  };

  //when we got an answer from a remote user
  const handleAnswer = (answer) => {
    yourConn.setRemoteDescription(new RTCSessionDescription(answer));
  };

  //when we got an ice candidate from a remote user
  const handleCandidate = (candidate) => {
    setCalling(false);
    console.log('Candidate ----------------->', candidate);
    yourConn.addIceCandidate(new RTCIceCandidate(candidate));
  };

  //hang up
  const hangUp = () => {
    send({
      type: 'leave',
    });

    handleLeave();
  };

  const handleLeave = () => {
    connectedUser = null;
    setRemoteStream({toURL: () => null});

    yourConn.close();
    // yourConn.onicecandidate = null;
    // yourConn.onaddstream = null;
  };

  const onLogout = () => {
    // hangUp();

    AsyncStorage.removeItem('userId').then((res) => {
      navigation.push('Login');
    });
  };

  const acceptCall = async () => {
    console.log('Accepting Call===========>', offer);
    connectedUser = offer.name;

    try {
      await yourConn.setRemoteDescription(new RTCSessionDescription(offer));

      const answer = await yourConn.createAnswer();

      await yourConn.setLocalDescription(answer);

      send({
        type: 'answer',
        answer: answer,
      });
    } catch (err) {
      console.log('Offerr Error', err);
    }
  };
  const rejectCall = async () => {
    send({
      type: 'leave',
    });
    setOffer(null);

    handleLeave();
  };

  console.log(socketActive, 'socketActive');
  console.log(calling, 'calling');
  console.log(localStream, 'localStream');
  console.log(remoteStream, 'remoteStream');
  console.log(conn, 'conn');
  console.log(yourConn, 'yourConn');
  console.log(offer, 'offer');
  console.log(callToUsername, 'callToUsername');

  return (
    <View style={styles.root}>
      <View style={styles.inputField}>
        <TextInput
          placeholder={'Friend id'}
          value={callToUsername}
          onChangeText={setCallToUsername}
          style={styles.input}
        />

        <Pressable style={styles.callButton} onPress={onCall} disabled={!(socketActive && userId.length > 0)}>
          <Text>Call</Text>
        </Pressable>
      </View>

      <View style={styles.videoContainer}>
        <View style={[styles.videos, styles.localVideos]}>
          <RTCView streamURL={localStream.toURL()} style={styles.localVideo} />
          <Text style={{position: 'absolute', top: 20, left: 20}}>Your Video</Text>
        </View>
        <View style={[styles.videos, styles.remoteVideos]}>
          <RTCView streamURL={remoteStream.toURL()} style={styles.remoteVideo} />
          <Text style={{position: 'absolute', top: 20, left: 20}}>Friends Video</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    // padding: 16,
  },
  inputField: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    height: 32,
    padding: 0,
    paddingHorizontal: 16,
  },
  callButton: {
    marginLeft: 16,
    width: 64,
    height: 32,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  videoContainer: {
    flex: 1,
    minHeight: 450,
  },
  videos: {
    width: '100%',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',

    borderRadius: 6,
  },
  localVideos: {
    height: 100,
    marginBottom: 10,
  },
  remoteVideos: {
    height: 400,
  },
  localVideo: {
    backgroundColor: '#f2f2f2',
    height: '100%',
    width: '100%',
  },
  remoteVideo: {
    backgroundColor: '#f2f2f2',
    height: '100%',
    width: '100%',
  },
});
