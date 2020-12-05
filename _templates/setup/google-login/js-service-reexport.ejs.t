---
to: src/services/google.js
---
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import { sentry } from '@services'
import { config } from '@constants'

GoogleSignin.configure({ webClientId: config.GOOGLE_WEB_CLIENT_ID }) // Add WEB_CLIENT_ID from Google cloud/API&Services/Credentials/OAuth 2.0 Client IDs - Web client (auto created by Google Service)

const auth = async () => {
	try {
		await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
		await GoogleSignin.signIn()
		return true
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			return null
		}
		sentry.captureException(error)
		return null
	}
}

const signIn = async () => {
	try {
		const isSignedIn = await GoogleSignin.isSignedIn()
		if (isSignedIn) await GoogleSignin.signOut()
		const isAuth = await auth()
		if (isAuth) {
			const tokens = await GoogleSignin.getTokens()
			return tokens
		}
		return null
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			return null
		}
		sentry.captureException(error)
		return null
	}
}

const getEmail = async () => {
	try {
		const isSignedIn = await GoogleSignin.isSignedIn()
		if (isSignedIn) await GoogleSignin.signOut()
		const isAuth = await auth()
		if (isAuth) {
			const userInfo = await GoogleSignin.getCurrentUser()
			const email = userInfo?.user.?email
			return email
		}
		return null
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			return null
		}
		sentry.captureException(error)
		return null
	}
}

export default { signIn, getEmail }
