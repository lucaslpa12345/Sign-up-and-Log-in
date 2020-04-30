import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40, 
  },
  input: {
    
    marginBottom: 30, 
    width: 250,
    backgroundColor: '#E0EEE0',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  opa: {
    margin: 40,
  },
  button: {
    fontSize: 20,
    color: '#FF0000'
    
  },
  title: { 
     fontSize: 40, 
     color: "#E8E8E8"
  }
});

export default styles;
