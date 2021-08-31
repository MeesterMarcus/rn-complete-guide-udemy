import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

export default function App() {
    return (
        <SafeAreaView>
            <View style={{padding: 30}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextInput placeholder="Course Goal"
                               style={{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}/>
                    <Button title="ADD"/>
                </View>
                <View>

                </View>
            </View>

            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
