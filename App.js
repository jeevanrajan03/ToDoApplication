import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState("")
  const [goals, setGoals] = useState([])
  function goalImportHandler(text) {
    setGoalText(text)
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, goalText])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalImportHandler} placeholder='Type your Goal' style={styles.textInput} />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>

      <View style={styles.goalsContainer}>
        {goals.map((goal, i) => <Text style={styles.goalItem} key={i}>{goal}</Text>)}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: '#cccccc',
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});
