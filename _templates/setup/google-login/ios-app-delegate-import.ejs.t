---
inject: true
to: ios/<%= ios_project_name %>/AppDelegate.m
after: \#import <React/RCTRootView.h>
skip_if: \#import <RNGoogleSignin/RNGoogleSignin.h>
---
#import <RNGoogleSignin/RNGoogleSignin.h>