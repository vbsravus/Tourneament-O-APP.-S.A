import React from 'react'
import styles from '../styles/home'
import {Image, Text, ScrollView ,View, TouchableOpacity } from 'react-native'

import time1 from '../assets/images/EDW.png'
import time2 from '../assets/images/png-akiha.png'
import noticiaImage from '../assets/images/aviso.png'

import Header from '../component/UserHeader'
import Copyright from '../component/Copyright'

import VotingHome from '../component/votingHome'

import globalPage from '../styles/globalPage'
import { games, teams, votos } from '../pages/Login'


function Home ({navigation}){
    console.log(games, games[0])
    let tabelaFase = 'Octogonal'
    let gaiacupEdicao = 'Quarta Edição'
    if( games == undefined){
        return(
            <View style={[globalPage.pageColor, globalPage.pageContainer]}>
                <ScrollView>
                    <Header border={true}/>
                    <View style={{flex: 1, alignItems: 'center',alignContent: 'center', justifyContent: 'center', marginTop: '50%', marginBottom: '45%'}}>
                        <Text style={{fontSize: 24, color: "white"}}>Não há jogos marcados, </Text>
                        <Text style={{fontSize: 24, color: "white", width:'80%'}}>visite <Text style={{color:'#ffd200', fontSize: 24}}>as notícias</Text> para ver o que vêm por ai.</Text>
                    </View>
                    <Copyright/>
                </ScrollView>
            </View>
        )
    }else{
        return (
            <ScrollView>
            <View style={[globalPage.pageColor, globalPage.pageContainer]}>
                <View style={[styles.header]}>
                    <Text style={styles.headerTitle}>Próximo Jogo</Text>
                    <View style={styles.headerGames}>
                        <View>
                            <Image style={styles.teamHeaderImage} source={time1}/>
                            <Text style={styles.headerTeamFrag}>2/0</Text>
                        </View>
                        <View style={styles.headerSubView}>
                            <Text style={[styles.headerGamesInfo, styles.headerGamesVS]}>VS</Text>
                            <Text style={styles.headerGamesInfo}>19:00 (MD1)</Text>
                        </View>
                        <View>
                            <Image style={styles.teamHeaderImage} source={time2}/>
                            <Text style={styles.headerTeamFrag}>0/2</Text>
                        </View>
                    </View>
                </View>
                <Header border={false}/>
                <VotingHome/>
                <View style={styles.tabelaView}>
                    <View style={styles.tabelaTitleView}>
                        <Text style={styles.tabelaTitleText}>A tabela da {gaiacupEdicao}</Text>
                        <Text style={styles.tabelaSubTitleText}>Fase {tabelaFase} -
                        <TouchableOpacity onPress={() => navigation.navigate('Tabela')}>
                            <Text style={[styles.tabelaSubTitleText,globalPage.yellowColor]}> Veja mais!</Text>
                        </TouchableOpacity></Text>
                    </View>
                    <View style={styles.tabelaTimeSpacing}>
                        <View style={styles.tabelaTimeView}>
                            <Text style={styles.teamNameTabela}>1º</Text>
                            <Image style={styles.teamLogoImage} source={time2}/>
                            <View>
                                <Text style={styles.teamNameTabela}>NEO Akihabara</Text>
                                <Text style={styles.teamSiglaTabela}>#GOAKH</Text>
                            </View>
                        </View>
                        <View style={styles.tabelaTimeView}>
                            <Text style={styles.teamNameTabela}>2º</Text>
                            <Image style={styles.teamLogoImage} source={time1}/>
                            <View>
                                <Text style={styles.teamNameTabela}>Eight Divine Ways</Text>
                                <Text style={styles.teamSiglaTabela}>#GOEDW</Text>
                            </View>
                        </View>
                        <View style={styles.tabelaTimeView}>
                            <Text style={styles.teamNameTabela}>3º</Text>
                            <Image style={styles.teamLogoImage} source={time1}/>
                            <View>
                                <Text style={styles.teamNameTabela}>Eight Divine Ways Black</Text>
                                <Text style={styles.teamSiglaTabela}>#GOEDWB</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.noticiasMainView}>
                    <Text style={styles.noticiasTitleText}>Notícias</Text>
                    <View style={styles.noticiasSubView}>
                        <TouchableOpacity>
                            <View styles={styles.noticiaView}>
                                <Image style={styles.imageNoticia} source={noticiaImage}/>
                                <Text style={styles.textNoticia}>Personagem desabilitado</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 10}}>
                            <View styles={styles.noticiaView}>
                                <Image style={styles.imageNoticia} source={noticiaImage}/>
                                <Text style={styles.textNoticia}>Jogador Banido</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Copyright/>
            </View>
        </ScrollView>
        )
    }
}

export default Home