import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        maxHeight: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '85%',
    },
    mainHeader:{
        borderColor: '#ffd200',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        width: '100%'
    },
    coinView:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    coinImage: {
        width: 30,
        height: 30,
    },
    coinText:{
        color: '#fff',
        marginLeft: 5,
    },
    userView:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    userImage: {
        width: 30,
        height: 30,
    },
    userText:{
        color: '#fff',
        marginLeft: 5,
    }
})