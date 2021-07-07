import React from 'react';
import { ViewBase, Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const Food = (props) =>{

    return (
        // <View style={styles.container}>
        //     <TouchableOpacity style={styles.card}> 
        //         <Image style={styles.cardImage} source={{uri: 'https://ucarecdn.com/3103a696-ee98-4e78-afc7-8add889a75eb/-/format/auto/-/preview/3000x3000/-/quality/lighter/'}}>
        //         <Text style={styles.itemText}>{props.text}</Text>
        //         </Image>
        //     </TouchableOpacity>
        // </View>
        
                <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://ucarecdn.com/3103a696-ee98-4e78-afc7-8add889a75eb/-/format/auto/-/preview/3000x3000/-/quality/lighter/'}} />


            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
        </View>

      )
        

}

const styles = StyleSheet.create({
    // container: {
    //     marginTop:40
    // },
    // itemText: {
    //   fontSize:16,
    //   padding: 10
    // },
    // card: {
    //     backgroundColor: '#FFF',
    //     marginBottom:10,
    //     marginLeft: '2%',
    //     width: '96%',
    //     shadowColor: '#000',
    //     shadowOpacity:1,
    //     shadowOffset: {
    //         width: 3,
    //         height: 3
    //     }
    // },
    // cardImage: {
    //     width: '100%',
    //     height: 200,
    //     resizeMode: 'cover'
    // },

    container : {
        width : '100%',
        height : 200,
        marginBottom : 25,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        overflow : 'hidden'
    },

    image : {
        width : '100%',
        height : '70%'
    },

    textContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    text : {
        fontWeight : 'bold',
        fontSize : 20
    }
  });
export default Food;