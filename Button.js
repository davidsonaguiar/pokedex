import { TouchableHighlight, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

function Button({ name, fn, id }) {
    return(
        <TouchableHighlight 
            style={styles.button}
            onPress={() => fn(id)}>
            <Text>
                <Icon 
                    name={name} 
                    size={24} 
                    color="#7986CB"></Icon>
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 45,
        marginHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button;
