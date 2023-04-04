import React from "react";
import {View,Text,StyleSheet,Button} from 'react-native';

const EditScreen = ({navigation}) => {
    return(
        <View>
            <Text style={styles.textStyle}> Editing Screen</Text>
            <Button title="Save Changes" onPress={() => {navigation.navigate('Details')}} />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle : {
        textAlign : 'center',
        paddingVertical: 30,
    }
})

export default EditScreen;