import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard , ScrollView, SafeAreaView, Alert } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    if (!task.trim()) {
      alert('Please Enter a Task');
      return;
    }
    else{
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }

  const deleteTask = (index) => {
    let itemsDele = [...taskItems];
    itemsDele.splice(index, 1);
    setTaskItems(itemsDele);
  }

  return (
    <SafeAreaView  style={styles.container}>
      <StatusBar style="auto" />


      {/* --------------Today's tasks-------------- */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
        
          <View style={styles.items}>

            {/* --------------This is where the tasks will go!-------------- */}

            {
              taskItems.map((item, index) => 
              {
                return (
                  <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }

          </View>

        </View>

      </ScrollView>

      {/* --------------Wtite a task-------------- */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  scroll: {
    marginBottom: 90
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#250041',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {
    marginTop:20
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#250041',
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: '#250041',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#250041',
  },
  addText: {
    fontSize: 20,
    color: '#FFF'
  },
});
