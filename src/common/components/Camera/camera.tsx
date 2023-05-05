import React, { useRef, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { StatusBar, View } from 'react-native';
import { camera } from 'assets';
import { CustomIcon } from '../Icon/icon';

interface CameraProps {
  photoUri: string | null;
  setPhotoUri: (uri: string | null) => void;
  showCamera: boolean;
  setShowCamera: (show: boolean) => void;
}

export const Camera: React.FC<CameraProps> = ({ photoUri, setPhotoUri, showCamera, setShowCamera }) => {
  const cameraRef = useRef<RNCamera>(null);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);

  const flipCamera = () => {
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      setPhotoUri(data.uri);
      setShowCamera(false); 
    }
  };

  return(
    <View style={camera.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <RNCamera
        ref={cameraRef}
        style={camera.preview}
        type={cameraType}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
      />
      <View style={camera.buttonContainer}>
        <CustomIcon name="flip-camera-ios" iconType="MaterialIcons" color='#fff' size={35} onPress={flipCamera} pressable/>
        <CustomIcon name="circle" iconType="Octicons" color='#fff' size={55} onPress={takePicture} pressable/>
        <CustomIcon name="ios-close" iconType="Ionicons" color='#fff' size={35} onPress={() => setShowCamera(false)} pressable/>
      </View>
    </View>
  )
};
