import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import general from 'assets/css/general';

type HeaderProps = {
    title: string;
    navigation: any;
    home?: boolean;
    profile?: boolean;
};

export function Header({ title, navigation, home, profile }: HeaderProps){
    const mode = home ? 'home' : profile ? 'profile' : 'none';

    const goBack = () => {
        navigation.goBack();
    };

    return(
        <View style = { general.header  }>
            <IconButton
                icon = { <Icon name = 'arrowleft'/> }
            />
            <Text style={general.title}> { title } </Text>
        </View>
    )
}
