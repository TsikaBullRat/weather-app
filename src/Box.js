import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from './'

const Today = ({ data }) => {

    return (
        <ImageBackground source={data.des} style={styles.today}>
            <Text style={styles.h2}>{Math.floor(data.temp)}&#176;C</Text>
            <Text style={styles.max_min}>{Math.floor(data.min)}&#176;C / {Math.floor(data.max)}&#176;C</Text>
        </ImageBackground>
    )
}

const Days = ({ data }) => {

    console.log(data)
    return (
        <View style={styles._3days}>
            {data.map(item => (
                <View key={item.id}>
                <ImageBackground source={item.des} style={styles.tablet}>
                    <Text style={styles.h4}>{item.day}</Text>
                    <Text style={styles.h4}>{Math.floor(item.max)}&#176;C/{Math.floor(item.min)}&#176;C</Text>
                    <Text style={styles.weather}>{item.wea}</Text>
                </ImageBackground>
                </View>
            ))}
        </View>
    )
}

export { Today, Days }