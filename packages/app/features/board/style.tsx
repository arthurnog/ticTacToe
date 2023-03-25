import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    fontFamily: 'sans-serif',
    margin: 20,
    padding: 0,
  },

  square: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#000',
    borderStyle:'solid',
    lineHeight: 34,
    height: 34,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  messenge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },

  boardRow: {
    clear: 'both',
    content: '',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
}

});


/*
* {
    box-sizing: border-box;
  }
  
*/


export default styles;