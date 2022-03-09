import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import ApiService from "../../Services/ApiService";
import StyledList from "../styledList/StyledList";
import ListApi from "./ListApi";


function ListEmotions() {

  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    async function getStorage() {
        ApiService.get("daily_entries?username=francislene")
            .then(response => {
            const data = response.data
            setEmotions(data)
            })
            .catch(error => console.log(error))
        }
        getStorage()
}, [])

    
   
    return (
        
        <View>
            <FlatList
                data={emotions}
                keyExtractor={ item => item.id}
                renderItem={({item}) => <ListApi {...item} />}
        />
        
      </View>  


      

    );
}
export default ListEmotions;
