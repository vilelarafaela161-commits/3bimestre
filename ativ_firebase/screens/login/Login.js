import React,{useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase';
import s from '../../styles/theme';
export default function Login({navigation}){
 const [email,setEmail]=useState(''); const [senha,setSenha]=useState('');
 async function entrar(){if(!email||!senha){Alert.alert('Atenção','Digite o e-mail e a senha.');return;}try{await signInWithEmailAndPassword(auth,email.trim(),senha);navigation.replace('Home');}catch(e){Alert.alert('Erro','E-mail ou senha incorretos.');}}
 return <View style={s.page}><View style={s.card}><Text style={s.logo}>🎀🐱</Text><Text style={s.title}>Hello Friends</Text><Text style={s.subtitle}>Entre no cantinho colorido da Hello Kitty e sua turma ✨</Text><Text style={s.label}>E-mail</Text><TextInput style={s.input} value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" placeholder="seu@email.com"/><Text style={s.label}>Senha</Text><TextInput style={s.input} value={senha} onChangeText={setSenha} secureTextEntry placeholder="Sua senha"/><TouchableOpacity style={s.button} onPress={entrar}><Text style={s.buttonText}>Entrar ♡</Text></TouchableOpacity><TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}><Text style={s.link}>Ainda não tenho conta — cadastrar</Text></TouchableOpacity></View></View>;
}
