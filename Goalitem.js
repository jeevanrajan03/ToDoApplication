import { StyleSheet ,View,Text,Pressable} from "react-native";



function Goalitem(props) {
    return (
       
    <View style={styles.goalItem} >
            <Pressable
            onPress={props.onDelete}
            //android_ripple={{ color: '#210466' }}
            style={({pressed})=> pressed && styles.pressedItem}
            >
            <Text style={styles.goalText} >{props.text}</Text>
            </Pressable >
        
    </View>
    
    )
}

const styles = StyleSheet.create({
    goalItem: {
        marginTop:15,
        borderRadius: 6,
        backgroundColor: '#5e0acc',

    },

    goalText: {
        margin: 8,
        padding: 3,
        color: 'white',
    },
    pressedItem:{
        opacity:0.5

    }
})

module.exports = Goalitem;