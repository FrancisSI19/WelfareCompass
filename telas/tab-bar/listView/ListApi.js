import React,{useState, useEffect} from "react";

import { Text, Image, View } from "react-native";
import StyledList from "../styledList/StyledList";
import DateTime from "./list-modal/ModalDateTime/ModalDateTime";
import ListApiActivities from "./ListApiActivities";


function ListApi({ mood, activities, short_description }) {

  const [emotion, setEmotion] = useState();
  const [emotionList, setEmotionList] = useState(mood);
  const [textEmotion, setTextEmotion] = useState();
  const [textColorEmotion, setTextColorEmotion] = useState('');
      console.warn(activities)  
      
    useEffect(() => { 
        if (mood === "nervous") {
            setEmotion(require('../../assets/humores/nervous.png'))
            setTextEmotion("PREOCUPADA")
            setTextColorEmotion('red')
        }
        if (mood === "happy") {
            setEmotion(require('../../assets/humores/happy.png'))
            setTextEmotion("BEM")
            setTextColorEmotion('blue')
        }
        if (mood === "sad") {
            setEmotion(require('../../assets/humores/sad.png'))
            setTextEmotion("TRISTE")
            setTextColorEmotion('black')
        }
        if (mood === "confused") {
            setEmotion(require('../../assets/humores/confused.png'))
            setTextEmotion("CANSADA")
            setTextColorEmotion('brown')
        }
        if (mood === "sleeping") {
            setEmotion(require('../../assets/humores/sleeping.png'))
            setTextEmotion("SONO")
            setTextColorEmotion('green')
        }
    }, [])
  
  console.warn(activities)
  return <>
    
    <View style={StyledList.information}>
     
      <View style={StyledList.divider}>
      <DateTime/>
      <Image source={emotion} style={StyledList.image} />
        <Text style={StyledList.feeling}>{textEmotion}</Text>
        {activities.map(activities => (
          <ListApiActivities{...activities} />
        ))}
        <Text style={StyledList.register}>{short_description}</Text>
      </View>
      
      </View>
    
  </>
}

export default ListApi;
