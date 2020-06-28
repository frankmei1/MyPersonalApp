import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DisplayWeb() {

    return(
        <View style = {
            {
                backgroundColor: 'green',
                flex: 1
            }
        }>
            <WebView 
                    style = {
                        {
                           flex: 1,
                            backgroundColor: 'blue'
                        }
                    }
                    source={{ uri: 'https://reactnative.dev/' }} 
                    onError={syntheticEvent => {
                        const { nativeEvent } = syntheticEvent;
                        console.warn('WebView error: ', nativeEvent);
                    }}
            />
        </View>
    )
          

 }