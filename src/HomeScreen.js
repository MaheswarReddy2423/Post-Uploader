import React from "react";
import { View,StyleSheet,Button,Text,Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
const { height } = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
    return (
        <View >
            <Feather style={styles.ViewStyle} name="plus-circle" size={75} color="black" onPress={()=>{navigation.navigate('Post')}} />
        </View>
    )
};

const styles = StyleSheet.create({
        ViewStyle : {
            textAlign : 'center',
            marginVertical : height/2.4
        }
});

export default HomeScreen;