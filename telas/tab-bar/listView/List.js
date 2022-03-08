import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import ApiService from "../../Services/ApiService";
import myRegister from "./Registers";
import StyledEmotions from "./list-modal/ModalEmotions/StyledEmotions";
import ListSelectEmotions from "./list-modal/ModalEmotions/ListSelectEmotions";


function ListEmotions() {

  const [emotions, setEmotions] = useState([]);

   useEffect(() => {
        async function getStorage() {
            ApiService.get("daily_entries/?username=francislene")
                .then(response => {
                  const data = response.data
                  const result = json.parse(item[0].raw)= result.daily_entry.mood
                  console.warn(data)
                  setEmotions(data)
                })
                .catch(error => console.log(error))
            }
            getStorage()
    }, [])
    
  


    const columns = 5;
    return (
        
        <View style={StyledEmotions.divider} >
            <FlatList
                numColumns={columns} 
                data={emotions}
                keyExtractor={ item => item.id}
                renderItem={({item}) => <ListSelectEmotions {...item} />}
        />
        
      </View>  


      

    );
}
export default ListEmotions;
