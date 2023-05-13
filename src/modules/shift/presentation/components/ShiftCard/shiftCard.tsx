import React from 'react';
import { Box, Center, Text } from 'native-base';
import { Card, CustomButton, SmallCard, IconText, Chip } from 'common/components';
import { colors, general } from 'assets';
import { useNavigation } from '@react-navigation/native';

import { RootNavigationProp } from 'navigation/navigationTYpes/navigationTypes';
import { formatDate } from 'common';

interface Shift {
  id: number;
  start_datetime: string;
  end_datetime: string;
  round: boolean;
  status: 'created' | 'closed' | 'active';
  extra: any;
} 

interface ShiftCardProps {
  shift: Shift;
}

export const ShiftCard: React.FC<ShiftCardProps> = ({ shift }) => {
  const navigation = useNavigation<RootNavigationProp>();
  const pruebaHour = '07:00AM';
  const formattedDateStart = formatDate(shift.start_datetime);
  const formattedDateEnd = formatDate(shift.end_datetime);
  const place = shift.extra.place_name ? shift.extra.place_name : 'No especifica';
  const address = shift.extra.address ? shift.extra.address : 'No especifica';
  const status = {
    created: 'Pendiente',
    active: 'Iniciado',
    closed: 'Finalizado',
  };

  const color = {
    created: colors.primary,
    active:colors.active,
    closed: colors.inactive,
  };

  const option = {
    created: 'Iniciar',
    active:'Finalizar',
    closed: 'Eliminar',
  };

  const handleInfoPress = () => {
    navigation.navigate('shift-details', { shift: shift });
  };

  const isDisabled =  formattedDateStart.timeFormat != pruebaHour && shift.status == 'created';

  return (
    <Center>
      <Card>
        <Box style={general.rowMargin}>
          <SmallCard>
            <Text style={general.title}>{formattedDateStart.dayNumber}</Text>
            <Text>{formattedDateStart.monthAbbr}</Text>
          </SmallCard>
          <Box>
            <Box style={general.row}>
              <Text style={{ ...general.subtitle, flex: 5 }}>{place}</Text>
              <Box flex={2}>
                <Chip text={status[shift.status]} color={color[shift.status]} />
              </Box>
            </Box>
            <Text style={general.normalText}>{address}</Text>
            <Box style={general.rowSpace}>
              <IconText iconType='Fontisto' iconName={'clock'} text={formattedDateStart.timeFormat} color={'#1DD75B'} />
              <IconText iconType='Fontisto' iconName={'clock'} text={formattedDateEnd.timeFormat} color={'#E05858'} />
            </Box>
          </Box>
        </Box>
        <Box style={general.rowSpace}>
          <CustomButton
            text={option[shift.status]}
            color={isDisabled ? undefined : color[shift.status]}
            radius={10}
            width={'48%'}
            onPress={() => {}}
            disabled={isDisabled}
          />
          <CustomButton text={'Información'} radius={10} width={'48%'} onPress={handleInfoPress}/>
        </Box>
      </Card>
    </Center>
  );
};

