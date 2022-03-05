import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import ApiService from "../../Services/ApiService";
import ModalEmotions from "./list-modal/ModalEmotions/ModalEmotions";


function ListEmotions() {

  const [emotions, setEmotions] = useState([]);

    useEffect(() => {
        async function getStorage() {
            ApiService.get("daily_entries/")
                .then(response => {
                const data = response.data
                setEmotions(data)
                })
                .catch(error => console.log(error))
            }
            getStorage()
    }, [])
  console.warn(emotions);

    const columns = 3;
    return (
        
        <View style={StyledActivitys.divider} >
            <FlatList
                numColumns={columns} 
                data={emotions}
                keyExtractor={ item => item.id.toString()}
                renderItem={({item}) => <ModalEmotions {...item} />}
            />
      </View>  

    );
}
export default ListEmotions;
