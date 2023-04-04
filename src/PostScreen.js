import React from "react";
import { View,Text,Button,StyleSheet,Dimensions } from "react-native";
import OpenCamera from "./OpenCamera";
import Opengallery from "./OpenGallery";
import HorizentalLine from "./components/HorizentalLine";
import * as ImagePicker from 'expo-image-picker';
const { height } = Dimensions.get('window');
const PostScreen = ({navigation}) => {
    return (
    <View>
        <Text style={styles.textStyle}> Select an Image </Text>
        <HorizentalLine />
        <View style={{ height : height/2.4, backgroundColor: 'white', width : 500 }}>
            <Text>Camera Section</Text>
        
        </View>
        <HorizentalLine />
        <View style={{ height : height/2.4, backgroundColor: 'white', width : 500 }}>
        <Text>Gallery Section</Text>

        </View>
        
        
        <Button onPress={() => {navigation.navigate("Details")}} title="Add Image" />
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle : {
        textAlign:"center",
        justifyContent : "space-around",
        paddingVertical : 10,
    },
    
});
export default PostScreen;