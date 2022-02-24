import React from "react";
import { TextInput, Text, View } from "react-native";
import StyledRegister from "./StyledRegister";

function ModalRegister() {
    return (
        <View style={StyledRegister.dividerRegister}>
            <TextInput
                style={StyledRegister.activityInput}
                placeholder="Conte como foi seu dia hoje" />
        </View>
    );
}

export default ModalRegister;