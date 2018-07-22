import React from "react";
import { Text } from "react-native";

const Greeting = (props) => {
    return (
        <Text>Hallo {props.name}!</Text>
    );
}

export default Greeting;
