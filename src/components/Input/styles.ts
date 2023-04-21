import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '100%',
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 3,
    fontSize: 14,
    borderColor: '#399342',
    borderWidth: 1,
    padding: 8,
  },
  label: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 8,
  },
  labelFocused: {
    fontSize: 14,
    color: '#399342',
    marginBottom: 8,
  },
  message: {
    flex: 1,
  },
  helperText: {
    fontSize: 12,
    color: 'red',
  },
});
