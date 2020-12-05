---
to: src/services/facebook.js
---
import { sentry } from '@services';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const signIn = async () => {
	try {
		const facebookResponse = await LoginManager.logInWithPermissions(['public_profile', 'email']);
		if (facebookResponse.isCancelled) return;
		const accessTokenMap = await AccessToken.getCurrentAccessToken();
		const accessToken = accessTokenMap.accessToken;
		if (!accessToken) throw new Error('Credentials not returned');

		return accessToken;
	} catch (error) {
		sentry.captureException(error);
		return Promise.reject(error);
	}
};

export default { signIn };
