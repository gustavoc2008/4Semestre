import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyle } from "./FormTaskStyles"
import { useState } from "react"

export const FormTask = () => {
    const [taskValue, setTaskValue] = useState("")

    const saveTask = () => {
        console.log(taskValue);
        Alert.alert("Titulo da Janela", `${taskValue} cadastrado com sucesso`, [
            {
                text: "OK",
                onPress: () => { }
            }
        ])
    }

    return (
        <View style={FormTaskStyle.formTaskBox}>
            <TextInput
                style={FormTaskStyle.textInputName}
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
                placeholder="Adicione uma tarefa"
            />

            <TouchableOpacity
                style={FormTaskStyle.taskButton}
                onPress={() => {
                    saveTask()
                }}
            >
                <Text style={FormTaskStyle.taskButtonText}> Adicionar </Text>
            </TouchableOpacity>
        </View>
    )
}