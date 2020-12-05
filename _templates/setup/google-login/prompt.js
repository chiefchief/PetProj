module.exports = [
	{
		type: 'confirm',
		name: 'android_google-services',
		message: 'Do you insert Android config file to /android/app/google-services.json',
		result: confirmed => {
			if (!confirmed) throw new Error('Android google-services.json must be specified!');
		},
	},
	{
		type: 'confirm',
		name: 'ios_google-services',
		message:
			"Do you insert IOS config file to /ios/<APP_NAME>/GoogleService-Info.plist (WARNING! Don't forget add file to Copy bundle resources section via XCode)",
		result: confirmed => {
			if (!confirmed) throw new Error('IOS GoogleService-Info.json must be specified!');
		},
	},
	{
		type: 'input',
		name: 'ios_project_name',
		message: 'Enter your IOS project_name?',
	},
	{
		type: 'input',
		name: 'ios_reserved_client_id',
		message: 'Enter your REVERSED_CLIENT_ID for IOS (found inside GoogleService-Info.plist)?',
	},
];
