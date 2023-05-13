import React, {useState, useEffect} from 'react';
import { SafeAreaView, StatusBar, ScrollView, Text } from 'react-native'
import type { StatusBarStyle } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList, RootNavigationProp } from 'navigation/navigationTYpes/navigationTypes';
import { general, colors } from 'assets';
import { Card, CustomButton, IconText, RoundButton, CustomIcon } from 'common/components';
import { Box, Center } from 'native-base';
import { formatDate } from 'common';

type ScreenNameRouteProp = RouteProp<RootStackParamList, 'shift-details'>;

type Props = {
  route: ScreenNameRouteProp;
};

type InfoItem = {
  text: string[];
  iconName: string;
  iconType: string;
  description?: string;
  type?: string;
};

type InfoSection = InfoItem[];

const STYLES = ['default', 'dark-content', 'light-content'] as const;

  export const ShiftDetailsScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<RootNavigationProp>();
  const { shift } = route.params;
  const [info, setInfo] = useState<InfoSection[]>([]);
  const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>(
    STYLES[1],
  );

  const formattedDate = (date:string) => {
    const format = formatDate(date)
    return `${format.monthAndDay}\n${format.timeFormat}`
  }
  const titleStyle = {
    ...general.titleCard,
    color: '#FFFFFF'
  }

  useEffect(() => {
    InfoShift();
  }, []);

  const InfoShift = () => {
    setInfo([
      [
        {
          text: [shift.client == '' ? 'no especifica' : shift.client],
          iconName: 'person',
          iconType: 'Octicons',
        },
      ],
      [
        {
          text: [shift.place_name == '' ? 'No especifica' : shift.place_name],
          iconName: 'home',
          iconType: 'Octicons',
        },
        {
          text: [shift.address == '' ? 'No especifica' : shift.address],
          iconName: 'location',
          iconType: 'Octicons',
        },
        {
          text: [shift.phone == '' ? 'No especifica' : shift.phone],
          iconName: 'phone',
          iconType: 'Feather',
        },
      ],
      [
        {
          text: [shift.project == '' ? 'No especifica' : shift.project],
          iconName: 'share-android',
          iconType: 'Octicons',
        },
        {
          text: [shift.project_name == '' ? 'No especifica' : shift.project_name],
          iconName: 'hash',
          iconType: 'Octicons',
        },
        {
          type: 'row',
          text: [
            shift.start_datetime == '' ? 'No especifica' : formattedDate(shift.start_datetime),
            shift.end_datetime == '' ? 'No especifica' : formattedDate(shift.end_datetime)
          ],
          iconName: 'calendar',
          iconType: 'Feather',
        },
        {
          text: [shift.allocated_hours == null ? 'No especifica' : shift.allocated_hours + ' horas'],
          iconName: 'clock',
          iconType: 'Fontisto',
        },
      ],
      [
        {
          type: 'badge',
          text: [shift.owner == '' ? 'No especifica' : shift.owner],
          description: shift.description || 'No especifica',
          iconName: 'person',
          iconType: 'Octicons',
        },
      ],
    ]);
  };

  const handleInfoPress = () => {
    navigation.navigate("check-in-out", {shift: shift})
  }

  const handleActivityPress = () => {
    navigation.navigate("activities", {shift: shift})
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'created':
        return colors.primary;
      case 'active':
        return colors.active;
      case 'closed':
        return colors.inactive;
      default:
        return colors.primary;
    }
  };

  const getStatusTitle = (status: string) => {
    switch (status) {
      case 'created':
        return 'No Iniciado';
      case 'active':
        return 'En Progreso';
      case 'closed':
        return 'Finalizado';
      default:
        return 'No Iniciado';
    }
  };

  const colorForIconText = (item: InfoItem, textIndex: number) => {
    if (item.text.length === 1) {
      return colors.text;
    }
    return textIndex === 0 ? colors.active : colors.inactive;
  };

  const styleBox = (section: InfoSection, itemIndex: number) => {
    if (section.length == itemIndex+1) {
      return general.rowSpace2;
    }
    return {...general.rowSpace2, marginBottom:8};
  };
  const renderButton = (status: string) => {
    const currentDateTime = new Date();
    const startDateTime = new Date(shift.start_datetime);

    if (status === 'created' && currentDateTime >= startDateTime) {
      return (
        <CustomButton
          borderColor={getStatusColor(status)}
          width={'90%'}
          height={50}
          text="Iniciar Turno"
          onPress={handleInfoPress}
        />
      );
    } else if (status === 'active') {
      return (
        <CustomButton
          borderColor={getStatusColor(status)}
          width={'90%'}
          height={50}
          text="Finalizar Turno"
          onPress={handleInfoPress}
        />
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar barStyle={statusBarStyle} />
      <ScrollView>
        <Center>
          <Card backgroundColor={getStatusColor(shift.status)} height={55} width={'90%'}>
            <Box style={[general.marginStart,general.rowSpace]}>
            <Text style={titleStyle}>{getStatusTitle(shift.status)}</Text>
            {shift.status == 'active' && (
              <CustomIcon
                iconType={'MaterialCommunityIcons'}
                name={'qrcode-scan'}
                size={32}
                color={'#FFFFFF'}
              />
            )}
            </Box>
          </Card>
          {info.map((section, sectionIndex) => (
            <Card key={`section-${sectionIndex}`} width={'90%'}>
              <Box style={general.marginStart}>
                {section.map((item, itemIndex) => (
                  <Box key={`item-box-${itemIndex}`}>
                    <Box
                      key={`item-${itemIndex}-${shift.id}`}
                      style={ styleBox(section,itemIndex) }
                    >
                      {item.type === 'badge' ? (
                        <>
                          <IconText
                            iconName={item.iconName}
                            iconType={item.iconType}
                            color={colors.text}
                            text={item.text[0]}
                            width={'90%'}
                          />
                          <RoundButton
                            badge
                            text={'1'}
                            color={getStatusColor(shift.status)}
                            onPress = {handleActivityPress}
                          />
                        </>
                      ) : (
                        item.text.map((text, textIndex) => (
                          <IconText
                            key={`text-${textIndex}`}
                            iconName={item.iconName}
                            iconType={item.iconType}
                            color={colorForIconText(item, textIndex)}
                            width={item.text.length == 1 ? '90%': null}
                            text={text}
                          />
                        ))
                      )}
                    </Box>
                    {item.description && 
                      <Text key={`description-${itemIndex}-b-${shift.id}`} style={general.marginTop}>{item.description}</Text>
                    }
                  </Box>
                ))}
              </Box>
            </Card>
          ))}
          {shift.round && (
            <Card width={'90%'}>
              <Text>Información adicional de la ronda:</Text>
              {/* Agrega aquí la información adicional de la ronda */}
            </Card>
          )}
          {renderButton(shift.status)}
        </Center>
      </ScrollView>
    </SafeAreaView>
  )
}