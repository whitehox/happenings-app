import Reactotron from 'reactotron-react-native';

import { HAPPENINGS_BASE_URI } from "react-native-dotenv";

export default { HAPPENINGS_BASE_URI };

if (__DEV__) {
  //connect to tron debugger
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  //clean tron memory for possible memory leeks
  tron.clear();

  //attach tron debugger to global
  console.tron = tron;
}
