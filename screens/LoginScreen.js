import React, { Component } from 'react'
import { View, Text, StyleSheet  } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Hello there\nWelcome`}</Text>
                <View style={styles.errorMessage}>
                    <Text>Error</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapatalize="none"></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} autoCapatalize="none"></TextInput>
                    </View>

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "#fff", fontWeight: 500}}>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}>
                    <Text style= {{color: "#414959", fontSize: "500"}}>
                        New to the app? <Text style={{ fontWeight: "500", color: "#E9446A"}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting : {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 39,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})