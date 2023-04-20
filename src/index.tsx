/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button} from './components';

const App = (): JSX.Element => {
  const onSubmitPayment = () => {};

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text>Test</Text>
        <View style={styles.buttonContainer}>
          <Button
            testID="paymentButton"
            title="Submit Payment"
            onPress={onSubmitPayment}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 20,
  },
});

export default App;
