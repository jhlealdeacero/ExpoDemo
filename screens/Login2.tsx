import React from 'react'
import { View, TextInput, Text, StyleSheet, ScrollView, Button, Image, TouchableOpacity } from 'react-native'

export default function Login() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          // style={styles.tinyLogo}
          source={require('../assets/images/deacero-share_edited.webp')}
        />
        <View style={styles.inputGroup}>
          <Text>Usuario</Text>
          <TextInput style={styles.input} placeholder='Usuario' />
        </View>
        <View style={styles.inputGroup}>
          <Text>Usuario</Text>
          <TextInput style={styles.input} placeholder='Usuario' />
        </View>
        <View style={styles.inputGroup}>
          <TouchableOpacity style={[styles.btn, styles.btnOrange]}>
            <Text style={{
              color: 'white',
              fontSize: 16
            }}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#c1c1c1',
    marginBottom: 30,
    padding: 10
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20
  },
  inputGroup: {
    marginBottom: 50,
    width: '80%'
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "#f6f6f6",
    flex: 1,
    minHeight: 42
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 50
  },
  btn: {
    height: 42,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnOrange: {
    backgroundColor: '#f46c0c',
    color: 'white'
  },
})
