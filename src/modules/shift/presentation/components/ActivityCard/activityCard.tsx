import React from 'react';
import { Box, Center, Text } from 'native-base';
import { Card, Chip, CustomIcon } from 'common/components';
import { colors, general } from 'assets';

interface Activity {
    id: number;
    title: string;
    description: string;
    status: 'to_do' | 'done';
}

interface Status {
    status: 'created' | 'active' | 'closed'
}

interface ActivityCardProps {
  activity: Activity;
  status: Status;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, status }) => {
    const color = {
        to_do: colors.primary,
        done:colors.disable
    };
    return(
        <Center>
            <Card>
                <Box style = {{height: 120, justifyContent:'space-between', margin:8}}>
                    <Chip text={activity.title} color={color[activity.status]} />
                    <Text style={general.normalText}>{activity.description}</Text>
                    {status.status == 'active' && activity.status == 'to_do' ? 
                        <CustomIcon 
                            iconType={'Feather'} 
                            name={'edit'} 
                            size={18} 
                            color={colors.primary} 
                            style={{alignItems: 'flex-end'}}
                            pressable
                        /> : <Box/>}
                </Box>
            </Card>
        </Center>
    )
};