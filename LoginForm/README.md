# React native test playground

This is an initial environment with a simple component, located in ```/src/components/``` called ```MyComponents```.
Inside that directory we'll find the ```__tests__``` directory which holds the test file ```MyComponents-test.js```

The test file should be enough to understand what each test does. We are using [jest](https://jestjs.io/)
and [enzyme](https://enzymejs.github.io/enzyme/) to do three kinds of tests: 
snapshot testing, component interaction testing and instance testing.

Just clone and install all the dependencies:

```
yarn install
```

To install base64
```
yarn add react-native-base64
```

To run, either ios or android versions:
```
npx react-native run-android
```
```
npx react-native run-ios
```

To run all the tests, on root do:
```
yarn test
```

If you update the components or the screen, we must run the test and udpate the snapshots
```
yarn test -u
```

To run the android emulator on windows
```
<AndroidSDK path>\emulator\emulator.exe -avd <Virtual Device Name>
Eg.: D:\AndroidSDK\emulator\emulator.exe -avd Pixel_3_API_29
```


Please update repo and tests with your findings so that everyome can benefit from this small project. 

Thanks!
