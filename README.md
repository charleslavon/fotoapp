#A quick exploration of react-native
Building a small app targeting Android 6.0.1 in an effort to learn a bit about what it's like to develop with react-native.


#My process
1. Followed a couple react-native start tutorials. They each use the npm package 'react-native' to generate a project with iOS and Android boilerplate code that renders a simple view.
2. Used Atom IDE with Facebook's Nuclide Skin (includes features specific to react-native).
3. Originally I had more functionality planned for this app (see app ideas below), but had to limit the scope to a simple reproduction of the Facebook CameraRoll gallery app because of time constraints and overall I found the react-native libraries limiting, especially when it comes to support for android. To accomplish the full feature set would've required using native android libraries and expose their functionality with custom react-native components (this is beyond the scope of what I wanted to learn here).

#Running this app
Prerequisite: follow the installation steps here - http://facebook.github.io/react-native/releases/0.27/docs/getting-started.html

1. Connect your android device (or use an emulator from Android Studio & install the required SDK & SDK tools)

2. then from the terminal at the root of the project: react-native run-android
	-if there's an error, check the troubleshooting advice in the message
	-adb reverse tcp:8081 tcp:8081



#Additional Resources:
1. Official (albeit lacking) Facebook Documentation: http://facebook.github.io/react-native/releases/0.27/docs/getting-started.html
2. A collection of resources for react-native: https://github.com/jondot/awesome-react-native
3. A similar collection but for reactjs: https://github.com/enaqx/awesome-react



Foto app -
1. Initial UI showing the most recent 18 fotos
2. Shake to start - main logic processes here
3. These 18 fotos are processed (using algorithms to be described in another post) and the UI is updated to show the 'best' fotos
4. Prompt with message asking user if they want to save these fotos and delete the others ("Save only the best & delete the rest?")
