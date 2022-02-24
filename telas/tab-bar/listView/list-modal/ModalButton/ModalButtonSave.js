import { useNavigation } from "@react-navigation/native";
import React from "react";
import StyledModalButton from "./StyledModalButton";
import { Button, View} from 'react-native';

const navigation = useNavigation;
function SaveRegister({ navigation }) {

  return (
        <View style={StyledModalButton.buttonSalvar}>
            <Button
            title="SALVAR"
            onPress={() => {
            navigation.navigate('RegisterDaily')
            }}/>
        </View>
   );
}
   
export default SaveRegister;