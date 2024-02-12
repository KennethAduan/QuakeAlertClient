import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { ProviderProps } from '~/src/interfaces/providerInterfaces';
const GluetStackProvider = ({ children }: ProviderProps) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};

export default GluetStackProvider;
