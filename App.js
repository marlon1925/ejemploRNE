import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from '@rneui/base';
import { useState } from 'react';


export default function App() {

  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
      value= {name}
      onChangeText={setName}
      placeholder='Ingrese su nombre'
      label = 'Nombre'
      />
      <Button
        title='OK'
        icon={{
          name: 'plancast',
          type: 'zocial',
          size: 20,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert("INFO","Su nombre es " + name)
        }}
      />

      <Button
        title='CANCEL'
        icon={
          <Icon
            name='reddit'
            type='zocial'
            color='white'
          />
        }
      />
      <Icon
        name='ios-cloudy'
        type='ionicon'
        color='black' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
