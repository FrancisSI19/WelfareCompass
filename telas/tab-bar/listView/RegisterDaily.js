import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import List from "./List";
import myRegister from "./Registers";


const navigation = useNavigation;
function RegisterDaily({navigation}) {
  
  /* função renderItem criada fora do flatlist
  para não precisar recriar toda vez que a lista for renderizada. */

  function renderItem({ item }) {
    let itemSelect = {};
    
    return (
      <TouchableOpacity onPress={() => {
          itemSelect = item
          navigation.navigate('ListView', {itemSelect} )
      }}><List {...item}/></TouchableOpacity>
    );
  }
  
    return (
        <View>
        <FlatList
          data={myRegister}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
      </View>  
    );  
}
const styles = StyleSheet.create({
    sectionContainer: {
    backgroundColor: "#f0f8ff",
 
 },

});


export default RegisterDaily;
