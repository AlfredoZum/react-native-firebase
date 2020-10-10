import { BackgroundColor } from 'chalk';
import { StyleSheet } from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    scrollView: {
      //backgroundColor: Colors.lighter,
      paddingVertical: 10,
    },
    header: {
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
    },
    formGroup: {
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: '#114466'
    },
    textInput: {
       width: '90%',
        borderBottomWidth: 1,
        marginLeft: 20,
        fontSize: 16,
        height: 30,
    },
    iconInput: {
        marginTop: 5,
        color: '#5167AC'
    },
    button: {
        backgroundColor: '#5167AC',
        marginHorizontal: 20,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 16,
    }
});

export default styles;