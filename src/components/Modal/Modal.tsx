import { Text, Modal as RNModal, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { FC } from 'react';

export interface ModalProps {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ setModalVisible, modalVisible, children }) => (
  <RNModal
    animationType="slide"
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
    <SafeAreaView>
      <View style={{ alignItems: 'flex-start', margin: 15 }}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ padding: 10 }}>
          <Text style={[{ fontWeight: 'bold', textAlign: 'center', color: 'black' }]}>Mbyll</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>{children}</ScrollView>
    </SafeAreaView>
  </RNModal>
);

export default Modal;
