import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';

import CustomContainer from './src/components/customContainer';
import CustomTypography from './src/components/customTypography';
import CustomInput from './src/components/customInput';
import CustomButton from './src/components/customButtom';
import CustomError from './src/components/customError';
import CustomSelect from './src/components/customSelect';
import CustomTextarea from './src/components/customTextarea';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor='#000' />
      <ScrollView>
        <CustomContainer justifyContent="center" gap={15}>
          <CustomTypography text="Components" tag="h1" />
          <CustomInput label="E-mail" placeholder={"E-mail"} />
          <CustomInput label="Password" placeholder={"Password"}  secureTextEntry={true} />
          <CustomSelect options={[
            { key: "1", value: "Banana", disabled: false },
            { key: "2", value: "Apple", disabled: false },
            { key: "3", value: "Orange", disabled: false },
            { key: "4", value: "Strongberry", disabled: false }
          ]} onSelect={function (value: string): void {
            throw new Error('Function not implemented.');
          } } />
          <CustomTextarea label="Password" placeholder={"Password"} numberOfLines={5} maxLength={1000} />
          <CustomError error={{ isValid: false, message: "Error field" }} /> 
          <CustomButton text="Acessar"></CustomButton>
        </CustomContainer>
      </ScrollView>
    </SafeAreaView>
  );
}
