import React from "react";
import { TextInput, Text, View } from "react-native";
import StyledListModal from "./StyledListModal";

function ModalRegister() {
    return (
        <View style={StyledListModal.dividerRegister}>
            <TextInput
                style={StyledListModal.activityInput}
                placeholder="Conte como foi seu dia hoje" />
        </View>
    );
}

export default ModalRegister;