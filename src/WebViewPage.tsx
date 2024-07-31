import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewPage = () => {
  const webViewRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <WebView 
              ref={webViewRef}
        source={{ uri: 'http://192.168.0.248:8080/web/scrollTest3.html' }} 
        style={styles.webview}
        javaScriptEnabled={true} 
        cacheEnabled={false}
        injectedJavaScript={`const style = document.createElement('style');
                               style.innerHTML = 'body { overflow-x: hidden; }';
                               document.head.appendChild(style);`}
                                       onLoadEnd={() => {
          // Clear the cache after loading the page
          if (webViewRef.current) {
            webViewRef.current.clearCache(true);
          }
        }}
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
