import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import Food from './food';
import store from '../store';
import ListItem from './lisItems';

export default function MainComponent() {

    const [filter, setFilter] = useState("vegan")

  return (
    <View style={styles.container}>




<View style={styles.tasksWrapper}>
        <View>
        <Text style={styles.Title}>Food</Text>
        </View>
        <View style={styles.row}>
      <TouchableOpacity onPress={() => setFilter('vegan')}>
          <View style={styles.addWrapper}>
            <Text>Vegan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('fatFree')}>
          <View style={styles.addWrapper}>
            <Text>Fat Free</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={styles.items}>
          {/* {foodItems.map((item) => {
              return (
                  <Food text={item} /> 
              )
            })
          } */}
        <ListItem filtered={filter}/>

        </View>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    margin:20,
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 200,
  },
  row: {
    flexDirection: 'row'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  add:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  }
});
