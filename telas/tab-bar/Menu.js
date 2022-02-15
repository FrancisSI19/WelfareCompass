import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Menu() {
    return (
        <View style={styles.sectionContainer}>
            <Text>Menu</Text>
      </View>  
    );  
}
const styles = StyleSheet.create({
    sectionContainer: {
    backgroundColor: `#4169e1`,
    width: "100%",
    height: "100%",   
  },

});

export default Menu;