import { Ionicons } from '@expo/vector-icons';
import { Input, InputSlot, InputField } from '@gluestack-ui/themed';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface InputFieldProps {
  icon?: any;
  value: string;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void; // Function to handle text changes
  secureTextEntry?: boolean; // Indicates if the input should be obscured (e.g., for password)
  readonly?: boolean; // Indicates if the input
  keyboard?: string;
}

const GlueStackInputField = ({
  icon,
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  readonly,
  keyboard,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input variant="outline" borderColor="gray" size="lg" borderRadius={10}>
      {icon && (
        <InputSlot px={wp(2)}>
          <Ionicons name={icon} size={20} color="gray" />
        </InputSlot>
      )}

      <InputField
        value={value}
        onChangeText={onChangeText}
        fontSize={hp(1.8)}
        color="black"
        readOnly={readonly}
        placeholder={placeholder}
        keyboardType={keyboard === 'number-pad' ? 'number-pad' : 'default'}
        secureTextEntry={secureTextEntry && !showPassword} // Toggle secure text entry
      />

      {secureTextEntry && ( // Only show eye icon for password inputs
        <InputSlot pr={wp(5)} onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="gray"
          />
        </InputSlot>
      )}
    </Input>
  );
};

export default GlueStackInputField;
