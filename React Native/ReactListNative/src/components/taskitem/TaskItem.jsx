import { Text, View, Image } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"

export const TaskItem = () => {
    return (
        <View style={TaskItemStyle.cardBox}>
            <Text style={TaskItemStyle.textCard}> Tarefas </Text>

            <View style={TaskItemStyle.icons}>
                <Image
                    source={require("../../../assets/Group 1.png")}
                    style={TaskItemStyle.icon}
                />

                <Image
                    source={require("../../../assets/Group 2.png")}
                    style={TaskItemStyle.icon}
                />
            </View>
        </View>
    )
}