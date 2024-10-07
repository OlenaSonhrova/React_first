# DeadRussCounter - React App

This app provides up-to-date information about Russian military losses during the Russo-Ukrainian war. Users can view the total number of enemy personnel killed as well as destroyed military equipment, including tanks, armored vehicles, artillery, and other types of weaponry.

<p align="center">
<img src="https://github.com/OlenaSonhrova/image/blob/main/DeadRussCounteGif.gif?raw=true" width="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<img src="https://github.com/OlenaSonhrova/image/blob/main/DeadRussCounter1.jpg?raw=true" width="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/OlenaSonhrova/image/blob/main/DeadRussCounter2.jpg?raw=true" width="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/OlenaSonhrova/image/blob/main/DeadRussCounter3.jpg?raw=true" width="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<img src="https://github.com/OlenaSonhrova/image/blob/main/DeadRussCounter4.jpg?raw=true" width="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp

A key feature of the app is the ability to check Russian losses on specific dates. Each day is displayed with precise numbers of losses, allowing users to analyze the intensity of combat operations over different periods. This is convenient for those who want to track the progress of Ukrainian forces and receive accurate information about the course of the war.

The app has a simple and intuitive interface that makes it easy to find the necessary data. The information is updated regularly, ensuring that users have the latest statistical data on enemy losses.

The app is designed to support the Ukrainian people, provide truthful information, and raise morale during these challenging times.

# Technologies Used

- react
- react-dom
- react-query
- react-router
- react-router-dom
- axios
- json-server
- react-scripts
- web-vitals

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/OlenaSonhrova/react_first.git
2. Navigate to the project directory:
   ```bash
   cd react_first
3. Install dependencies:
   You need to install all necessary dependencies before running the project:
   ```bash
   npm install
4. Install Android SDK:
   Ensure you have Android Studio installed and the Android SDK set up. If you don’t have it installed:
   - Download and install Android Studio.
   - During the installation, make sure you add necessary SDK components such as Android SDK and Android Virtual Device (AVD).
5. Set environment variables:
   You need to add the Android SDK paths to your environment variables. For macOS or Linux, add the following to your ~/.bash_profile or ~/.zshrc (or the appropriate shell configuration file):
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
For Windows, add these paths through "Environment Variables" in the system settings.
6. Start an emulator or connect a device:
   - To use an Android emulator, open Android Studio and launch your emulator via the AVD Manager.
   - Alternatively, connect your real Android device via USB and enable Developer Mode and USB Debugging.
7. Run the app:
   You can now run your app on Android using the following command:
   ```bash
   npx react-native run-android
This will start the Metro Bundler and install the app on the connected device or emulator.
8. Troubleshooting:
   If you encounter errors, check whether all dependencies and tools are installed correctly and make sure your device or emulator is properly connected.
   Once done, your app should run on Android.
