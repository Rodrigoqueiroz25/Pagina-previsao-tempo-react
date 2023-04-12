import { useState } from 'react'
import './App.css'
import { TemperatureNow } from './components/TemperatureNow/TemperatureNow'
import { AirQuality } from './components/AirQuality/AirQuality'
import { Suntime } from './components/Suntime/Suntime'
import { WeekWeather } from './components/WeekWeather/WeekWeather'


export default function App() {

  return (
    <main className="container">
      <TemperatureNow/>
      <AirQuality/>
      <Suntime/>
      <WeekWeather/>
    </main>
  )
}
