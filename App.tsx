import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebViewPage from './src/WebViewPage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebViewPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
