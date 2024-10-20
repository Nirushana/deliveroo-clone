// app/_layout.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store'; // Adjust the path to your store file
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
};

export default Layout;
