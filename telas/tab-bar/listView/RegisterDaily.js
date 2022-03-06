import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ModalActivitys from "./list-modal/ModalActivitys/ModalActivitys";

import ApiService from "../../Services/ApiService";
import StyledActivitys from "./list-modal/ModalActivitys/StyledActivitys";

function RegisterDaily() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function getStorage() {
            ApiService.get("activities/")
                .then(response => {
                const data = response.data
                setActivities(data)
                })
                .catch(error => console.log(error))
            }
            getStorage()
    }, [])

    const columns = 3;
    return (
        
        <View style={StyledActivitys.divider} >
            <FlatList
                numColumns={columns} 
                data={activities}
                keyExtractor={ item => item.id.toString()}
                renderItem={({item}) => <ModalActivitys {...item} />}
            />
      </View>  

    );
}
export default RegisterDaily;

