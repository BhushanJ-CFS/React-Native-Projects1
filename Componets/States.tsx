// import React, { useState, useEffect, useRef } from 'react';
// import { View, TextInput, Button, Alert, Text } from 'react-native';

// export default function InputApp() {
//   const [text, setText] = useState('');
//   const [input, setInput] = useState('');        // Store input text
//   const inputRef = useRef<TextInput>(null);      // Reference to TextInput
//   const prevInput = useRef('');

//   useEffect(() => {
//     // Focus the input box once when the component loads
//     inputRef.current?.focus();
//     prevInput.current = text;
//   }, [text]);

//   const handleSubmit = () => {
//     Alert.alert('Submitted Text', text)};

//    const handlechange=(value:string)=>{
//     setText(value);
//     setInput(value);
//    }
//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         ref={inputRef}
//         onChangeText={handlechange}
//         placeholder="Type here..."
//         style={{
//           borderWidth: 1,
//           borderColor: '#aaa',
//           padding: 10,
//           marginBottom: 10,
//           borderRadius: 5,
//         }}
//       />
//       <Text>Character Count: {input.length}</Text>
//       <Text>Current: {input}</Text>
//        <Text>Previous: {prevInput.current}</Text>
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// }

// import React, { useState } from 'react';
// import { View, Text, Modal, Button, StyleSheet } from 'react-native';

// const MyModalExample = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Button title="Show Modal" onPress={() => setVisible(true)} />
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={visible}
//         onRequestClose={() => setVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text>This is inside the modal!</Text>
//             <Button title="Close" onPress={() => setVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default MyModalExample;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
// });

// import React from 'react';
// import {Pressable, Text, StyleSheet, Alert} from 'react-native';

// const MyComponent = () => {
//   return (
//     <Pressable
//       onPress={() => Alert.alert('Button Pressed')}
//       style={({pressed}) => [
//         styles.button,
//         {backgroundColor: pressed ? 'blue' : 'green'},
//       ]}>
//       <Text style={styles.text}>Press Me</Text>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     borderRadius: 5,
//   },
//   text: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default MyComponent;
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function States() {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(0);
  useEffect(() => {
    Alert.alert(`Count is ${count}`);
  }, [count]);

  useEffect(() => {
    Alert.alert(`Data is ${data}`);
  }, [data]);
  return (
    <View
      style={{height: 50, width: 100, backgroundColor: 'orange', margin: 200}}>
      <Text>Bhushan {count}</Text>
      <Button title="update" onPress={() => setcount(count + 1)}></Button>
      <Button title="update data" onPress={() => setdata(data + 1)}></Button>
      <Userdata data={data} />
    </View>
  );
}
const Userdata = ({data}: {data: number}) => {
  return (
    <View>
      <Text>Tap {data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
