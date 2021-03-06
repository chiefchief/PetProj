// it.each`
//   selectedByUserAudioMode      | isOnHold | isOnHoldOnRemote | expectation
//   ${SelectedAudioMode.VOIP}    | ${false} | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.VOIP}    | ${true}  | ${true}          | ${'nothing'}
//   ${SelectedAudioMode.VOIP}    | ${true}  | ${false}         | ${HoldStatus.ON_HOLD}
//   ${SelectedAudioMode.PSTN}    | ${false} | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.PSTN}    | ${true}  | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.PSTN}    | ${true}  | ${true}          | ${HoldStatus.NOT_ON_HOLD}
//   ${SelectedAudioMode.CALL_ME} | ${false} | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.CALL_ME} | ${true}  | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.CALL_ME} | ${true}  | ${true}          | ${HoldStatus.NOT_ON_HOLD}
//   ${SelectedAudioMode.NONE}    | ${false} | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.NONE}    | ${true}  | ${false}         | ${'nothing'}
//   ${SelectedAudioMode.NONE}    | ${true}  | ${true}          | ${HoldStatus.NOT_ON_HOLD}
// `(
//   'should expect $expectation when the selected $selectedByUserAudioMode, isOnHold is ${isOnHold} and isOnHoldOnRemote is $isOnHoldOnRemote',
//   ({
//     selectedByUserAudioMode,
//     isOnHold,
//     isOnHoldOnRemote,
//     expectation,
//   }: {
//     selectedByUserAudioMode: SelectedAudioMode;
//     isOnHold: boolean;
//     isOnHoldOnRemote: boolean;
//     expectation: 'nothing' | HoldStatus;
//   }) => {
//     mock(getSelectedByUserAudioMode).mockReturnValue(selectedByUserAudioMode);
//     mock(HoldCapabilitySelectors.isOnHold).mockReturnValue(isOnHold);
//     mock(HoldCapabilitySelectors.isOnHoldOnRemote).mockReturnValue(isOnHoldOnRemote);

//     updateRemoteStatus(
//       mockListenerArgs(MeetingAudioControlCapabilityActions.setAudioModeSuccess(SelectedAudioMode.PSTN)),
//     );

//     if (expectation === 'nothing') {
//       expect(dispatchMock).not.toHaveBeenCalled();
//     } else {
//       expect(dispatchMock).toHaveBeenCalledWith(MeetingHoldCapabilityActions.setRemoteStatusRequest(expectation));
//     }
//   },
// );
