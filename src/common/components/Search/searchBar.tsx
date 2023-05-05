import React from 'react';
import { VStack, Input, Icon, NativeBaseProvider } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomButton } from '../Button/button';

interface SearchBarComponentProps {
  title: string;
}

const SearchBarComponent: React.FC<SearchBarComponentProps> = ({ title }) => {
  return <VStack my='0' w='100%' maxW='80%'>
      <VStack w='100%' alignSelf='center' marginLeft={5} flexDirection='row'>
        <Input 
          placeholder={title} 
          variant='filled'
          width='100%'
          height={10}
          borderRadius='0'
          InputLeftElement={
            <Icon
              ml='2'
              size='4'
              color='gray.400'
              as={<Ionicons name='ios-search' />} 
            />
          } 
        />
        <CustomButton
          text={'Filtro'}
          colorBackground={'#4CD1E2'}
          colorText={'#FFFFFF'}
          icon
        />
      </VStack>
    </VStack>;
}

interface SearchBarProps {
  title: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ title }) => {
  return (
    <NativeBaseProvider>
      <SearchBarComponent title={title} />
    </NativeBaseProvider>
  );
};