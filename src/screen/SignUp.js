import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const SignUp = ({route, navigation}) => {
  return (
    <View style={styles.signupText}>
      <Text>SignUp</Text>
      {/* <Text style={{marginTop: 20}}>{route.params.itemId}</Text> */}
      {/* <Text style={{marginBottom: 20}}>{route.params.otherParam}</Text> */}
      <Button
        title="go to the SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupText: {
    marginTop: 60,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
