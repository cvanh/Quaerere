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

export default function ModalView(friend, closeModal){
 return(
  <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalUser}>{friend.friend.name}</Text>
          <Pressable onPress={()=> closeModal}><Text>close?</Text></Pressable>
        </View>
      </View>
    </Modal>
  </View>
 )
}
