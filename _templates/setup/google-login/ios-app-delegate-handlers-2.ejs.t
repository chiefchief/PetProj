---
inject: true
to: ios/<%= ios_project_name %>/AppDelegate.m
after: options:\(NSDictionary\<UIApplicationOpenURLOptionsKey,id\> \*\)options\n.*{
skip_if: \[RNGoogleSignin application:app
---
  if ([RNGoogleSignin application:app openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]]) {
    return YES;
  }
