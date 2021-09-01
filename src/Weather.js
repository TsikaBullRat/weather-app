import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator } from "react-native"
import { styles, Today, Days } from './'

const call1 = "https://api.openweathermap.org/data/2.5/weather?q=kimberley&units=metric&appid=9d61fecd65a28154c9af45f88a62dbc7"
const call2 = "https://api.openweathermap.org/data/2.5/onecall?lat=-28.7323&lon=24.7623&units=metric&appid=9d61fecd65a28154c9af45f88a62dbc7"

const getDay = (ref, truth) => {
    let known = ref + truth < 7? ref + truth : ref + truth - 7
    let string;
    switch (known) {
        case 1:
            string = "Monday"
            break
        case 2:
            string = "Tuesday"
            break
        case 3:
            string = "Wednesday"
            break
        case 4:
            string = "Thursday"
            break
        case 5:
            string = "Friday"
            break
        case 6:
            string = "Saturday"
            break
        case 0:
            string = "Sunday"
            break
    }

    return string
}

const getWeather = des =>{
    let weather = ["clear sky", "broken clouds", "moderate rain", "light rain", "overcast clouds"]
    switch (des){
        case weather[0]:
            return require("./res/clear_sky.jpg")
            break
        case weather[1]:
            return require("./res/cloudy_sky.jpg")
            break
        case weather[2]:
            return require("./res/rain.jpg")
            break
        case weather[3]:
            return require("./res/rain.jpg")
            break
        case weather[4]:
            return require("./res/stormy_clouds.jpg")
            break
    }
}

const Title = (des, city) =>{
    let weather = ["clear sky", "broken clouds", "moderate rain", "light rain", "overcast clouds"]
    switch (des){
        case weather[0]:
            return `Its a beautiful day in ${city}`
            break
        case weather[1]:
            return `${city} can you see the clouds.`
            break
        case weather[2]:
            return `${city} don't forget your rain coat.`
            break
        case weather[3]:
            return `A serene drizzle in ${city}`
            break
        case weather[4]:
            return `It loks stormy ${city}`
            break
    }
}

export const Weather = () => {

    const [day, setDay] = useState(null)
    const [_7day, setDays] = useState(null)

    const getData = async () => {

        const collect1 = await fetch(call1)
        const data1 = await collect1.json()

        const collect2 = await fetch(call2)
        const data2 = await collect2.json()

        const today = new Date()
        
        setDay({
            name: data1.name,
            temp: data1.main.temp,
            min: data1.main.temp_min,
            max: data1.main.temp_max,
            des: getWeather(data1.weather[0].description),
            title: Title(data1.weather[0].description, data1.name)
        })

        setDays([
            {
                id: 1,
                day: getDay(today.getDay(),1),
                min: data2.daily[0].temp.max,
                max: data2.daily[0].temp.max,
                des: getWeather(data2.daily[0].weather[0].description),
                wea: data2.daily[0].weather[0].description
            },
            {
                id: 2,
                day: getDay(today.getDay(), 2),
                min: data2.daily[1].temp.max,
                max: data2.daily[1].temp.max,
                des: getWeather(data2.daily[1].weather[0].description),
                wea: data2.daily[1].weather[0].description
            },
            {
                id: 3,
                day: getDay(today.getDay(), 3),
                min: data2.daily[2].temp.max,
                max: data2.daily[2].temp.max,
                des: getWeather(data2.daily[2].weather[0].description),
                wea: data2.daily[2].weather[0].description
            },
            {
                id: 4,
                day: getDay(today.getDay(), 4),
                min: data2.daily[3].temp.max,
                max: data2.daily[3].temp.max,
                des: getWeather(data2.daily[3].weather[0].description),
                wea: data2.daily[3].weather[0].description
            },
            {
                id: 5,
                day: getDay(today.getDay(), 5),
                min: data2.daily[4].temp.max,
                max: data2.daily[4].temp.max,
                des: getWeather(data2.daily[4].weather[0].description),
                wea: data2.daily[4].weather[0].description
            },
            {
                id: 6,
                day: getDay(today.getDay(), 6),
                min: data2.daily[5].temp.max,
                max: data2.daily[5].temp.max,
                des: getWeather(data2.daily[5].weather[0].description),
                wea: data2.daily[5].weather[0].description
            },
            {
                id: 7,
                day: getDay(today.getDay(), 7),
                min: data2.daily[6].temp.max,
                max: data2.daily[6].temp.max,
                des: getWeather(data2.daily[6].weather[0].description),
                wea: data2.daily[6].weather[0].description
            }
        ])
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <View style={styles.container}>
            {day ? (
                <>
                    <Text style={styles.h1}>{day.title}</Text>
                    <Today data={day} />
                    {_7day?<Days data={_7day}/>:<ActivityIndicator size='large' color="green" />}
                </>
            ) : (
                <ActivityIndicator size='large' color="green" />
            )}
        </View>

    )
}