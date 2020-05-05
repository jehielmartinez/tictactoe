import React, { useState } from 'react'
import swal from 'sweetalert'
import Element from '../components/Element'
import brain from '../functions/brain'
import '../styles/App.css'
import checkWinner from '../functions/checkWinner'

function App () {
  const [arr, setArr] = useState(['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'])
  const [machinePlaying, setMachinePlaying] = useState(false)

  const newGame = () => {
    setArr(['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'])
    setMachinePlaying(false)
  }

  const humanPlay = (index) => {
    if (machinePlaying) {
      swal({
        text: 'Tenga Paciencia',
        icon: 'warning'
      })
    } else if (arr[index] === 'a') {
      arr[index] = 'x'
      setArr([...arr])

      if (checkWinner(arr)) {
        swal({
          text: 'Humano Ganaste!',
          icon: 'success'
        }).then(() => newGame())
      } else {
        machinePlay()
      }
    } else {
      swal({
        text: 'No puedes marcar alli',
        icon: 'error'
      })
    }
  }

  const machinePlay = async () => {
    setMachinePlaying(true)
    if (!arr.includes('a')) {
      swal('Empate!').then(() =>
        newGame()
      )
    } else {
      const newArr = await brain(arr)
      setTimeout(() => {
        setArr([...newArr])
        if (checkWinner(arr)) {
          swal({
            text: 'Computadora Ganaste!',
            icon: 'success'
          }).then(() => newGame())
        } else {
          setMachinePlaying(false)
        }
      }, 1000)
    }
  }

  return (
    <div className='main-container'>
      <div className='board'>
        {arr.map((value, index) => (
          <Element
            key={index}
            handleClick={() => humanPlay(index)}
            value={value}
          />
        ))}
      </div>
    </div>
  )
}

export default App
