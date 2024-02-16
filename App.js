import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import Goalitem from './Goalitem';
import GoalInput from './GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  
  const [goals, setGoals] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false);


  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText]);

  }

function deleteItem(index) {
  
  const newGoals =goals.filter((el,i) => i!=index )
  setGoals(newGoals);


}

function startAddGoalHandler() {
  setIsModalVisible(true);

}

function closeGoalHandler() {
    setIsModalVisible(false);

  }



  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.TextStyle}>Add Your Goals:</Text>
        </View>
        <Button title='Add New Goal' color="#A07" onPress={startAddGoalHandler} />
        <GoalInput onClose={closeGoalHandler} visible={isModalVisible} onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return <Goalitem text={itemData.item} onDelete={() => deleteItem(itemData.index)} />
            }
            } />



        </View>

      </View>

    </>
  
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#1A0037',
    justifyContent: 'space-evenly',

  },

  

  goalsContainer: {
    flex: 4,
  },

  TextStyle:{
    color: "white",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: 'bold',
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',

  },

  goalText: {
    color: 'black',
  }
});
