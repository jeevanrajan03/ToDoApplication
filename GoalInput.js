import {View,TextInput,Button,StyleSheet,Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [goalText, setGoalText] = useState("")
    function goalImportHandler(text) {
        setGoalText(text)
    }
    function addGoalHandler() {
        props.onAddGoal(goalText)
        props.onClose();
    }
    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        {/* <Image  style ={styles.image}source={require('./assets/images/jeevan.jpg')}/> */}
            <TextInput 
            onChangeText={goalImportHandler} 
            style={styles.textInput}
            placeholder='Type your Goal' 
            />
                <View style={styles.height} ></View>
            <View style={styles.button}>
               <Button color="#f31282" title="Cancel" onPress={props.onClose} />
            </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' />
                    </View>
            </View>
        </View>
        </Modal>
    )


}


const styles =StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 24,
        borderBottomColor: '#cccccc',
        flex: 1,
        padding:16,
        color:'white',
        backgroundColor:"white",
        
        
    },

    height:{
        height: 20,
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        padding: 8,
        borderRadius:6,
        color: "black"
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '100',
        marginHorizontal: 8
    },
    image:{
        width:100,
        height:100,
        margin:20
    }

})

module.exports = GoalInput;