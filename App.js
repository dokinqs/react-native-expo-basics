import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight } from "react-native";
import { ScrollView, FlatList } from "./node_modules/react-native-gesture-handler";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true
    };

    setInterval(() => {
      this.setState(prevState => {
        return {
          isShowingText: !prevState.isShowingText
        };
      });
    }, 500);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : " ";
    return (
      <Text>{display}</Text>
    )
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hallo {this.props.name}!</Text>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null
    }
  }

  _onPressButton() {
    Alert.alert("Pressed Button!");
  }

  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(resp => resp.json())
      .then((respJson) => {
        this.setState({
          dataSource: respJson.movies
        }) 
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // async componentDidMount() {
  //   try {
  //     let response = await fetch(
  //       "https://facebook.github.io/react-native/movies.json"
  //     );
  //     let respJson = await resp.json();
  //     return respJson.movies;
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }

  render() {
    let pic = {
      uri: "https://78.media.tumblr.com/67832e843b07efb57018c35a1565c3a3/tumblr_p2m2hqjSkS1vjcb7vo1_1280.jpg"
    };

    return (
      <View style={{flex: 1}}>

        <View style={{flex: 0.5, backgroundColor: "#d5ebef"}} />

        <View style={styles.container}>
          <Text 
            style={styles.title}>
              React Native & Expo
          </Text>
          <TouchableHighlight 
            onPress={()=> {
              Alert.alert("Touchable Highlight!");
            }}
            underlayColor="#d5ebef">
            <Text 
              style={styles.touch}>
                Touch Me
            </Text>
          </TouchableHighlight>
          <Image 
            source={pic} 
            style={styles.image}
          />
          <Greeting name="Karen" />
          <Greeting name="Anonymous" />
          <Blink text="@dokinqs" />
        </View>

        <View style={{flex: 0.5, paddingTop: 5}}>
          <ScrollView>
            <Text 
              style={{fontFamily: "Avenir", fontSize: 34, paddingBottom: 5, textAlign: "center"}}>
                ↓~ SCROLLVIEW ~↓
            </Text>
            <Text 
              style={{fontSize: 20, textAlign: "center"}}>
                ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡
            </Text>
          </ScrollView>
        </View>

        <View style={{flex: 1, backgroundColor: "#d5ebef"}} />

        <Button
          onPress={this._onPressButton}
          title="Press Me"
          color="#33818e"
        />

        <View style={{flex: 1}}>
          <Text 
            style={styles.flatlist}>
              FLATLIST - Fetch API - Movies
          </Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => 
              <Text 
                style={{fontFamily: "Avenir", textAlign: "center"}}>
                  {item.title}, {item.releaseYear}
              </Text>} 
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={{flex: 0.5, backgroundColor: "#83c6d1"}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#83c6d1",
    alignItems: "center",
    justifyContent: "center",
    padding: 40
  },
  title: {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 30,
  },
  touch: {
    fontFamily: "Avenir", 
    fontSize: 20, 
    fontWeight: "900", 
    padding: 5, 
    color: "#33818e"
  },
  image: {
    width: 250, 
    height: 250, 
    margin: 10
  },
  flatlist: {
    fontFamily: "Avenir", 
    fontSize: 20, 
    fontWeight: "600", 
    textAlign: "center", 
    marginTop: 10
  }
});