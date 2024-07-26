import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewPage = () => {
  return (
    <View style={styles.container}>
      <Text>WebViewPage is being rendered</Text>
      <WebView source={{ uri: 'http://127.0.0.1:8081/web/stlViewer.html' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewPage;
