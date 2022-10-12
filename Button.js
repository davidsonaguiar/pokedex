import { TouchableHighlight, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

function Button({ name, fn, id }) {
    return(
        <TouchableHighlight 
            style={styles.button}>
            <Text>
                <Icon 
                    name={name} 
                    size={24} 
                    color="#fff"></Icon>
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 45,
        backgroundColor: '#7986CB',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button;