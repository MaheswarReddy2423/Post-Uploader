import React from "react";
import { Text,View,StyleSheet,Button,TextInput,Dimensions,Image,TouchableOpacity } from "react-native";
import { EvilIcons, Octicons,FontAwesome5,Entypo,Ionicons,AntDesign } from '@expo/vector-icons';
import HorizentalLine from "./components/HorizentalLine";
const { height } = Dimensions.get('window');
const DetailsScreen = ({navigation}) => {
    return(
        <View >
            <View style={{ height : height / 2, backgroundColor: 'white', width : 500 }}>
            <TouchableOpacity onPress ={() => {navigation.navigate('Edit')}} >
            <Image  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjgSect-O-GzQd48O6XiBrbsKJIwu7-_dNg&usqp=CAU' }} style ={{height : 400 , width : 390}}/>
            </TouchableOpacity>
            
            </View>
            <HorizentalLine />
            <TextInput style={{padding : 10}} placeholder="Add a caption." />
            <HorizentalLine />
            <View style={styles.iconStyle}>
            <EvilIcons name="location" size={50} color="black" />
            <Octicons name="mention" size={50} color="black" />
            </View>
            <HorizentalLine />
            <View style={styles.iconStyle}>
            <FontAwesome5 name="facebook" size={50} color="black" />
            <Entypo name="twitter-with-circle" size={50} color="black" />
            <Entypo name="instagram-with-circle" size={50} color="black" />
            </View>
            <HorizentalLine />
            <View style={styles.iconStyle}>
            <Ionicons name="settings" size={50} color="black" />
            </View>
            <HorizentalLine />
            <View style = {{flexDirection : 'row',padding : 10}}>
            <Text >Advanced settings</Text>
            <AntDesign style={{alignItems:'stretch'}} name="right" size={24} color="black" />
            </View>
            <HorizentalLine />
            <Button title="Post" onPress={() => {navigation.navigate('Home')}} />

        </View>
    );
};

const styles = StyleSheet.create({

    iconStyle : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        paddingVertical : 10
    },
    ViewStyle : {
        alignItems : 'center',
        justifyContent : 'space-around',
    }
});

export default DetailsScreen;