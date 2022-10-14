import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Search from './Search.js'
import Card from './Card.js'
import Button from './Button.js'

export default function App() {

   const [ search, setSearch ] = useState('1')
   const [ data, setData ] = useState([])

   const URL = num => `https://pokeapi.co/api/v2/pokemon/${num}`
   const src = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
   const capitalize = str => str?.replace(str[0], str[0].toUpperCase())

   const inc = num => num + 1 > 905? setSearch(1): setSearch(num + 1);
   const dec = num => num - 1 < 1? setSearch(905):  setSearch(num - 1);

   useEffect(() => {
      fetch(URL(search.toString().toLowerCase()))
         .then(req => req.json())
         .then(resp => {
            setData(resp)
         }).catch(() => {
            setData({
               name: 'Pokemon not found!',
            })
         })
   }, [search])

   const listTypes = data.types?.map(type => capitalize(type.type.name))
   const listAbilities = data.abilities?.map(ability => capitalize(ability.ability.name))
   const listStatus = data.stats?.map((stat, key) => (
      <Text key={key} style={{color: '#353535', fontSize: 24,}}>
         {`${capitalize(stat.stat.name)}: ${stat.base_stat}`}
      </Text>
   ))
  
  return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>

         <StatusBar style='auto'/>

         <Search onSubmit={setSearch}/>

         <Card 
            name={capitalize(data.name)}
            id={data.id}
            types={listTypes}
            height={data.height / 10}
            weight={data.weight / 10}
            abilities={listAbilities}
            stats={listStatus}
            src={src(data.id)}/>

         <View style={{
            paddingHorizontal: 10, 
            paddingVertical: 10,
            backgroundColor: '#7986CB',
            flexDirection: 'row', 
         }}>
            <Button 
               name='arrowleft'
               id={data.id}
               fn={dec}/>
            <Button 
               name='arrowright'
               id={data.id}
               fn={inc}/>
         </View>

      </View>
  )
}