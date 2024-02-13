import { Asset } from 'expo-asset';
import { ImageSourcePropType } from 'react-native';

export const images: { [key: string]: ImageSourcePropType } = {
  // Change this images
  SignInBanner: require('../../assets/images/SignInBanner.png'),
  SignUpBanner: require('../../assets/images/SignUpBanner.png'),
  forgotPasswordBanner: require('../../assets/images/forgotPasswordBanner.png'),

  // AppLogoLight: require('../../assets/imgs/AppLogoLight.png'),
  // AppLogoDark: require('../../assets/imgs/AppLogoDark.png'),
};

type VirtualAssetModuleType = number | string;

// preload images
const imageAssets = Object.keys(images).map((key) => {
  return Asset.fromModule(images[key] as VirtualAssetModuleType).downloadAsync();
});

export const loadImages = () => Promise.all(imageAssets);
