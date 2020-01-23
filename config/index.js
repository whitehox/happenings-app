import Reactotron from 'reactotron-react-native';

import { HAPPENINGS_BASE_URI, REACT_ENV } from 'react-native-dotenv';

export default { HAPPENINGS_BASE_URI, REACT_ENV };

if (REACT_ENV === 'development') {
  //connect to tron debugger
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  //clean tron memory for possible memory leeks
  tron.clear();

  //attach tron debugger to global
  console.tron = tron;
}
