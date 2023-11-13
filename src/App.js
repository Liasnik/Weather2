import './App.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import Body from './components/Body'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from './store/thunks/fetchCurrentWeather'
import { fetchForecast } from './store/thunks/fetchForecast'
import BgVideo from './components/background/BgVideo'

function storageCity(name) {
  const item = localStorage.getItem(name)
  if (item) {
    return JSON.parse(item)
  }
}

// function storageCity(name) {
//   return JSON.parse(localStorage.getItem(name))
// }

function App() {
  const [theme, setTheme] = useState(false)
  //const data = useSelector((state) => state.currentWeather.weather)
  const dispatch = useDispatch()

  // const [localStorageCity, setLocalStorageCity] = useState(
  //   storageCity('city') || data. 
  // )
  // const [localStorageCity, setLocalStorageCity] = useState(storageCity('city'))
  // const [inputCity, setInputCity] = useState('Kyiv')
  // const [weather, setWeather] = useState({})
  // const [selectCity, setSelectCity] = useState('')
  const [city, setSelectCity] = useState(storageCity('city'))
  const [update, setUpdate] = useState(storageCity(false))

  // console.log(city)

  useEffect(() => {
    // const city = selectCity || storageCity('city')
    // console.log(storageCity('city'))
    // console.log(city)
    if (city) {
      dispatch(fetchCurrentWeather(city))
      dispatch(fetchForecast(city))
    }
    // .unwrap()
    // .then((data) => {
    //   console.log(data)
    //   setWeather(data)
    // })
    // .catch((error) => {
    //   console.error('%cПомилка: ', 'color: yellow', error)
    // })
  }, [city, update, dispatch])

  // useEffect(() => {
  //   const fetchWeather = async (city) => {
  //     try {
  //       const response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  //       )
  //       const result = await response.json()
  //       console.log(result)
  //       setWeather(result)
  //     } catch (error) {
  //       console.error('%cError: ', 'color: yellow', error)
  //     }
  //   }

  //   fetchWeather(inputCity)
  // }, [])

  return (  
    <div className="bgContainer">
      <div className="overlay"></div>

      <BgVideo theme={theme}/>   
      <div className="container">
        <div className="App">
          <Menu setSelectCity={setSelectCity} setUpdate={setUpdate} theme={theme} setTheme={setTheme}/>
          <Header />
          <Body />
        </div>
      </div>  
    </div>
  )
}

export default App
