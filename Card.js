import {  Text, View, Image, StyleSheet } from 'react-native';


function Card({ src, id, name, types, height, weight, abilities, stats }, children) {

    const capitalize = str => str?.replace(str[0], str[0].toUpperCase())

    const listAbilities = abilities?.map((ability, key) => 
        <Text key={key} style={styles.textNormal}>{ability}</Text>)

    const listStats = stats?.map((stat, key) => 
        <Text key={key} style={styles.textNormal}>{capitalize(stat.stat.name)}: {stat.base_stat}</Text>)
    
    

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.textTitle}>
                        {name}
                    </Text>
                    <Text style={styles.textNormal}>
                        #{String(id).padStart(3, '0')}
                    </Text>
                </View>
                <View style={styles.img}>
                    <Text style={styles.type}>{types?.join(' - ')}</Text>
                    <Image 
                        style={{width: 200, height: 200,}}
                        source={{uri: src}}/>
                </View>
                <View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View>
                            <Text style={styles.textSubtitulo}>Info</Text>
                            <Text style={styles.textNormal}>Height: {height}m</Text>
                            <Text style={styles.textNormal}>Height: {weight}kg</Text>
                        </View>
                        <View>
                            <Text style={styles.textSubtitulo}>Abilities</Text>
                            {listAbilities}
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.textSubtitulo}>Stats</Text>
                        {listStats}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20,
    },
    card: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#7986CB25',
    },
    type: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#FFF',
        fontSize: 16,
    },
    textTitle: {
        flex: 1,
        paddingRight: 15,
        color: '#7986CB',
        fontSize: 32,
    },
    img: {
        position: 'relative',
        marginVertical: 10,
        backgroundColor: '#7986CB70',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNormal: {
        color: '#666',
        fontSize: 16,
    },
    textSubtitulo: {    
        color: '#7986CB',
        fontSize: 22,
    }
})

export default Card