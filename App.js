import React, { useState, useEffect } from 'react';
import AppRouter from './router';
import * as Font from 'expo-font';
import './config';

export default function App() {
  const [isFontReady, setFontReady] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'panton-bold': require('./assets/fonts/Panton-Bold.otf'),
        'panton-bold-regular': require('./assets/fonts/Panton-Bold-Regular.ttf'),
        'panton-regular': require('./assets/fonts/Panton-Regular.ttf'),
        'panton-light': require('./assets/fonts/Panton-Light.ttf'),
        'panton-thin': require('./assets/fonts/Panton-Thin.ttf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
        'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
        'noto-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
        'noto-sans-regular': require('./assets/fonts/NotoSans-Regular.ttf'),
      });
      setFontReady(true);
    };

    loadFont();
  }, [isFontReady]);

  return isFontReady ? <AppRouter /> : null;
}
