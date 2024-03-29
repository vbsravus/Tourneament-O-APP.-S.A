import React, { useState } from 'react';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity, Modal } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import styles from '../styles/cadastro'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import loadingImage from '../assets/56ec8ac920.gif'

import user from '../assets/images/user.png'
import password from '../assets/images/password.png'

import Copyright from '../component/Copyright'


export const loggedUser = []

export const games = []
export const teams = []
export const votos = []

function Login({ navigation }){

     const [users, setUsers] = useState([])

     const [userEmailOrUsername, setUserEmailOrUsername] = useState('')
     const [userPassword, setUserPassword] = useState('')

     const getVotos = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/voto')
              const data = response.json()
              data.then(
                  (val) => votos.push(val)
              )
          }catch(error){
              console.log(error)
          }
     }

     const getUsers = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/usuario')
              const data = response.json()
              data.then(
                  (val) => setUsers(val)
              )
          }catch(error){
              console.log(error)
          }
     }

     const getGames = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/partida')
              const data = response.json()
              data.then(
                  (val) => games.push(val)
              )
          }catch(error){
              console.log(error)
          }
      }
  
     const getTeams = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/equipe')
              const data = response.json()
              data.then(
                  (val) => teams.push(val)
              )
          }catch(error){
              console.log(error)
          }
     }

     getUsers()

     const [loading, setLoading] = useState(false)
     const [textLoading, setTextLoading] = useState('Carregando, aguarde um momento.')
     const [loadingColor, setLoadingColor] = useState('#fff')
     const [loadingBackground, setLoadingBackground] = useState('none')

     const verifyUser = () => {
          getGames()
          getTeams()
          getVotos()
          users.push({
               id_usuario: 999,
               moeda: 200,
               nome: "bonecoTeste",
               senha: "testeSA",
               email: "bonecoTeste@inexorabilis.com"
          })
          // if(teams.length < 1){
          //      teams.push([   
          //           {
          //                id_equipe: 1,
          //                nome: "Orange Kingdom Umayyad",
          //                tag: "OKU",
          //                vitoria: 2,
          //                derrota: 1,
          //                posicao: 1
          //           },
          //           {
          //                id_equipe: 2,
          //                nome: "Inexorabilis e-sports",
          //                tag: "IXS",
          //                vitoria: 2,
          //                derrota: 1,
          //                posicao: 2
          //           },
          //           {
          //                id_equipe: 3,
          //                nome: "Lotus Gaming",
          //                tag: "LG",
          //                vitoria: 1,
          //                derrota: 2,
          //                posicao: 3
          //           }
          //      ])
          //      games.push([
          //           {
          //                id_partida: 10,
          //                data_jogo: "2022-07-15T03:00:00.000Z",
          //                hora_jogo: "19:00:00",
          //                id_equipe_1: 1,
          //                id_equipe_2: 3
          //            },
          //            {
          //                id_partida: 11,
          //                data_jogo: "2022-08-17T03:00:00.000Z",
          //                hora_jogo: "19:00:00",
          //                id_equipe_1: 2,
          //                id_equipe_2: 3
          //            },
          //            {
          //                id_partida: 12,
          //                data_jogo: "2022-08-17T03:00:00.000Z",
          //                hora_jogo: "19:00:00",
          //                id_equipe_1: 2,
          //                id_equipe_2: 1
          //            }
          //           ])
          //      votos.push([
          //           {
          //               id_voto: 1,
          //               id_partida: 11,
          //               quantia_total_votos_azul: 300,
          //               quantia_total_votos_vermelho: 200
          //           },
          //           {
          //               id_voto: 2,
          //               id_partida: 10,
          //               quantia_total_votos_azul: 600,
          //               quantia_total_votos_vermelho: 200
          //           },
          //           {
          //               id_voto: 3,
          //               id_partida: 12,
          //               quantia_total_votos_azul: 500,
          //               quantia_total_votos_vermelho: 300
          //           }
          //       ])
          // }

          

          setTimeout(() => {
               console.log(users, users.find((account) => {return account.email === userEmailOrUsername || userEmailOrUsername === account.nome}))
               if(users.find((account) => {return userEmailOrUsername === account.email || account.nome === userEmailOrUsername }) != undefined){
                    console.log('acertou!', users.filter(account => {return userEmailOrUsername === account.email || userEmailOrUsername === account.nome}))
                    if(users.find((account) => {return userPassword === account.senha}) != undefined){
                         setTimeout(() => {
                              loggedUser.push(users.find((account) => {return account.email === userEmailOrUsername || userEmailOrUsername === account.nome && userPassword === account.senha}))
                              console.log(loggedUser)
                              setTimeout(() => {
                                   setLoading(false)
                                   navigation.navigate('Home')
                              },400)
                              
                         }, 600)
                    }else{
                         console.log('errou2')
                         setTimeout(() => {
                              setTextLoading('Esse usuário não existe ou a sua senha está incorreta!')
                              setLoadingBackground('#f01707')
                              setTimeout(() => {
                                   setLoading(false)
                                   setTextLoading('Carregando, aguarde um momento.')
                                   setLoadingBackground('none')
                              },3000)
                         },400)
                    }
               }else{
                    console.log('errou1')
                    setTimeout(() => {
                         setTextLoading('Esse usuário não existe ou a sua senha está incorreta!')
                         setLoadingBackground('#f01707')
                         setTimeout(() => {
                              setLoading(false)
                              setTextLoading('Carregando, aguarde um momento.')
                              setLoadingBackground('none')
                         },3000)
                    },400)
                    
               }
          }, 1000)   
     }

     

 


     return (
          <View style={[styles.container, {overflow: 'hidden'}]}>
               <Modal
                    animationType="fade"
                    transparent={true}
                    visible={loading}
                    onRequestClose={() => {
                         setLoading(!loading);
                    }}
               >
                    <View style={{ backgroundColor:'rgba(0, 0, 0, 0.6)', flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                         <Image source={loadingImage} style={{width: 179, height:206}}/>
                         <Text style={{color:loadingColor}}>{textLoading}</Text>
                    </View>
               </Modal>
               <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
               <Image style={[styles.gcuplogo]} source={gaialogo}/>
               <Text style={styles.bigupwelcome}>Bem-vindo à Gaia Cup</Text>
               <Text style={styles.signup}>Faça o seu Login</Text>
               <View style={{marginLeft: 40}}>
                    <Image source={user} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput onChangeText={text => setUserEmailOrUsername(text)} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário ou E-mail"/>
               </View>
               <View style={{marginLeft: 40}}>
                    <Image source={password} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput onChangeText={text => setUserPassword(text)} secureTextEntry={true} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Senha"></TextInput>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.alreadyAccount}>Eu não possuo uma conta, desejo 
                    <Text style={[styles.yellowText]}> fazer o cadastro.</Text>
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {verifyUser(); setLoading(!loading)}} style={{alignItems: 'center',marginLeft: 300, marginTop: 20}}>
                    <Icons name="arrow-right-bold-circle" color="#ffd200" size={78}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Conectar</Text>
               </TouchableOpacity>
               <Copyright/>
          </View>
     )
}

export default Login