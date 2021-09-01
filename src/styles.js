import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1:{
        fontSize: 35,
    },
    h2:{
        fontSize: 30,
        color: '#fff'
    },
    h3:{
        fontSize: 25,
        color: '#fff'
    },
    h4:{
        fontSize: 20,
        color: '#fff'
    },
    today:{
            height: 140,
            width: '99%',
            borderRadius: 30,
            marginTop: 20,
            padding: 20,
            overflow: 'hidden'
    },
    max_min:{
        position: 'relative',
        left: '65%',
        fontSize: 20,
        color: '#fff'
    },
    _3days:{
        borderRadius: 25,
        width: '95%',
        flex: 1,
        marginTop: 10,
        overflow: 'hidden',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    icon:{
        position: 'relative',
        top: -60,
        left: '90%',
        fontSize: 20
    },
    tablet:{
        width: '100%',
        height: 80,
        padding: 10,
        backgroundColor: '#000'
    },
    line:{
        width: '100%',
        height: 2,
        backgroundColor: '#fff'
    },
    weather:{
        fontSize: 20,
        color: '#fff',
        position: 'relative',
        top: -40,
        left: '50%'
    }
})