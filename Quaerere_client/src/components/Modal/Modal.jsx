import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert
} from "react-native";
import styles from './styles';

export default function ModalView(friend, modal, setModal){
  console.log(friend)
  console.log(modal)
 return(
  <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalUser}>{friend.friend.name}</Text>
          <Pressable onPress={()=> setModal(false)}><Text>close?</Text></Pressable>
        </View>
      </View>
    </Modal>
  </View>
 )
}
