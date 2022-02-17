import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import List from "./List";
import ListView from "./listView";
import myRegister from "./Registers";


function RegisterDaily() {
  
  /* função renderItem criada fora do flatlist
  para não precisar recriar toda vez que a lista for renderizada. */

  function renderItem({ item }) {
   
    return (
      <TouchableOpacity onPress={ListView}><List {...item} /></TouchableOpacity>
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

