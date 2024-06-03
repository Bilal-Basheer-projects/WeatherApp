import { StyleSheet } from "react-native";
import { config } from "../../utils/config";
import { FontSize, Width } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       borderColor: config.White,
    },
    goBackScreen:{
        padding: Width(2)
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
         flex:1
    },
    title: {
        fontSize: FontSize(16),
        color: config.White,
        fontWeight: 'bold'
    },
    currentLocation: {
        padding: Width(2)
    }
})

export default styles