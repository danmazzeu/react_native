import { useState } from "react";
import CustomInput from "./components/customInput";
import CustomSelect from "./components/customSelect";
import CustomButton from "./components/customButtom";
import CustomError from "./components/customError";
import CustomTextarea from "./components/customTextarea";
import CustomContainer from "./components/customContainer";

const Login = () => {
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [server, setServer] = useState('');
    const [error, setError] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [selectError, setselectError] = useState('');
    const [textareaError, settextareaError] = useState('');

    const data = [
        {key:'1', value:'Servidor 1', disabled:true},
        {key:'2', value:'Servidor 2'},
        {key:'3', value:'Servidor 3', disabled:true},
        {key:'4', value:'Servidor 4'},
    ]

    function login () {
        if (email == "danmazzeu9@gmail.com" && password == "123456789" && server == "Servidor 2") {
            setError("Logado com sucesso.");
        } else {
            setError("Credenciais inválidas.");
        }
    }

    return (
        <CustomContainer>
            <CustomInput 
                onChangeText={setEmail} 
                label="E-mail" 
                details="Preencha com seu e-mail cadastrado." 
                placeholder="@" 
                error={emailError} 
            />
            <CustomInput 
                onChangeText={setPassword} 
                label="Senha" 
                details="Preencha com sua senha cadastrada." 
                placeholder="Senha" 
                error={passwordError} 
                secureTextEntry={true} 
            />
            <CustomSelect 
                onSelect={setServer} 
                label="Servidor" 
                details="Selecione o servidor de cadastro." 
                data={data} 
                error={selectError} 
            />
            <CustomTextarea 
                onChangeText={setServer} 
                label="Mensagem" 
                details="Escreva uma mensagem de até 1000 caracteres." 
                maxLength={1000} 
                placeholder="Escreva aqui..." 
                numberOfLines={5} 
                error={textareaError} 
            />
            <CustomError text={error} />
            <CustomButton 
                onPress={login} 
                text="Acessar" 
            />
        </CustomContainer>
    );
}

export default Login;