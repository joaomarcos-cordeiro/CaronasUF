import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/input'
import Button from '../components/Button'




const Login = () => {
    const router = useRouter();
    const emailRef= useRef("");
    const passwordRef= useRef("");
    const [loading, setLoading] = useState(false);
   
    const onSubmit = async ()=>{
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Entrar',"Por favor verifique os campos!");
            return;
        }

        //permitido

    }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
    
   {/* Welcome */}
   <View>
    <Text style={styles.welcomeText}>Olá,</Text>
    <Text style={styles.welcomeText}>Bem-Vindo</Text>
   </View>
   {/* form */}
   <View style={styles.form}>
    <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
        Por favor faça o login 
    </Text>
    <Input 
    icon={<Icon name="mail" size={26} strokeWidh={1.6}/>}
    placeholder='Email ou CPF'
    onChangeText={value=> emailRef.current = value}
    />
    <Input 
    icon={<Icon name="lock" size={26} strokeWidh={1.6}/>}
    placeholder='Senha'
    secureTextEntry
    onChangeText={value=> passwordRef.current = value}
    />

<Text style={styles.forgotPassword}>
    Esqueceu a senha?
</Text>

{/*Botton */}
<Button title={'Entrar'} loading={loading} onPress={onSubmit} />
</View>
{/* footer */}

<View style={styles.footer}>
        <Text style={styles.footerText}>
            Não possui conta?
        </Text>
        <Pressable onPress={()=> router.push('signUp')}>
    <Text style={[styles.footerText,{color: theme.colors.primaryDark, fontWeight:theme.semibold}]}>Cadastre-se</Text>
</Pressable>


</View>
   </View>

    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText:{
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,

    },
    form:{
        gap: 25,
    },
    forgotPassword:{
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
    },
    footer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText:{
        textAlign:'center',
        color: theme.colors.text,
        fontSize: hp(1.6)
    }
})

