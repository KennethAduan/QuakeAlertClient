import { Asset } from 'expo-asset';
import { ImageSourcePropType } from 'react-native';

export const images: { [key: string]: ImageSourcePropType } = {
  // Change this images
  // GoogleIcon: require('../../assets/imgs/GoogleIcon.png'),
  // AppLogoLight: require('../../assets/imgs/AppLogoLight.png'),
  // AppLogoDark: require('../../assets/imgs/AppLogoDark.png'),
};

type VirtualAssetModuleType = number | string;

// preload images
const imageAssets = Object.keys(images).map((key) => {
  return Asset.fromModule(images[key] as VirtualAssetModuleType).downloadAsync();
});

export const loadImages = () => Promise.all(imageAssets);
