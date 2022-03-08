import React from "react";
import { TextInput, Text, View } from "react-native";
import StyledRegister from "./StyledRegister";
import SaveRegister from "../ModalButton/ModalButtonSave";

function ModalRegister() {
    return (
        <View style={StyledRegister.activityInput}>
            <TextInput
                placeholderTextColor={"black"}
                placeholder="Conte como foi seu dia hoje." />
        </View>
    );
}

export default ModalRegister;