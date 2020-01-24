import React, { useState, useEffect } from 'react';
import AppRouter from './router';
import * as Font from 'expo-font';
import './config';

export default function App() {
  const [isFontReady, setFontReady] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
        'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
      });
      setFontReady(true);
    };

    loadFont();
  }, [isFontReady]);

  return isFontReady ? <AppRouter /> : null;
}
