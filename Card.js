import {  Text, View, ScrollView, Image, StyleSheet } from 'react-native';


function Card({ src, id, name, types, height, weight, abilities, stats }) {

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.containerTitle}>
                    <Text>
                        <Text style={styles.title}>{name}</Text> 
                        <Text style={styles.textNormal}> #{id?.toString().padStart(3, '0')}</Text>
                    </Text>
                </View>
                <View style={styles.containerImage}>
                    <Image 
                        style={{width: 260, height: 260}}
                        source={{uri: src}}></Image>
                    <Text
                        style={styles.types}
                        >{types?.join(' - ')}</Text>
                </View>
                <ScrollView style={styles.containerDatas}>
                    <Text style={styles.Subtitle}>Info</Text>
                    <Text style={styles.textNormal}>Height: {height}m</Text>
                    <Text style={styles.textNormal}>Weight: {weight}kg</Text>
                    <Text style={styles.Subtitle}>Abilities</Text>
                    {abilities?.map(ability => <Text style={styles.textNormal}>{ability}</Text>)}
                    <Text style={styles.Subtitle}>Stats</Text>
                    {stats}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    card: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 5,
    },
    containerTitle: {
        marginBottom: 10,
        justifyContent: 'center',
    },
    title: {
        color: '#7986CB',
        fontSize: 42,
    },
    containerImage: {
        marginBottom: 10,
        backgroundColor: '#7986CB70',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    types: {
        position: 'absolute', 
        bottom: 10, 
        left: 10, 
        color: '#fff', 
        fontSize: 20
    },
    Subtitle: {
        color: '#7986CB',
        fontSize: 32,
        marginVertical: 5,
    },
    textNormal: {
        color: '#353535',
        fontSize: 24,
    }
})

export default Card