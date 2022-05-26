import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.signInText}>
      <Text style={{marginBottom: 20}}> SignIn </Text>
      <Button
        title="go to the signup"
        onPress={() => {
          navigation.navigate('SignUp', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  signInText: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default SignIn;
