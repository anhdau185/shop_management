/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.container}>
          <Text style={styles.text}>Shop Management </Text>
          <Text style={styles.ourTeam}>Our team:</Text>
          <Text style={styles.name}>Tang Hoang An - ID: 16520020</Text>
          <Text style={styles.name}>Dau Duc Viet Anh - ID: 16520029</Text>
        </View>
        <View style={styles.contactView}>
          <Text style={styles.contact}>Contact us: antanghoang@gmail.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerStyle: {
    backgroundColor: 'rgb(47, 54, 61)',
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    flex: 1,
    marginRight: 80,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fefefe',
    fontFamily: 'MuseoSansRounded-300',
    fontWeight: '300',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  text: {
    fontSize: 22,
    color: '#000',
    paddingTop: 4,
    marginBottom: 10,
  },
  subject: {
    fontSize: 16,
    color: '#CC0000',
  },
  ourTeam: {
    fontSize: 16,
    color: '#000',
    marginTop: 25,
  },
  name: {
    fontSize: 16,
    color: '#000',
    marginTop: 3,
  },
  framework: {
    marginTop: 3,
  },
  contactView: {
    flex: 0,
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contact: {
    marginBottom: 10,
  },
});
