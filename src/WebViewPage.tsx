import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewPage = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'http://localhost:8080/web/scrollTest.html' }} 
        style={styles.webview}
        javaScriptEnabled={true}  // Enable JavaScript
        injectedJavaScript={`const style = document.createElement('style');
                               style.innerHTML = 'body { overflow-x: hidden; }';
                               document.head.appendChild(style);`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewPage;
