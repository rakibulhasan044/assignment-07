
import { useState } from 'react'
import './App.css'
import Caart from './components/Caart/Caart'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

const [cook, setCook] =useState([]);
  const wantToCook = (item) => {
    const isExist = cook.find(p => p.id === item.id);
    if(!isExist) {
      setCook([...cook, item]);
    } else {
      alert("already exist")
    }
  }
  console.log(cook);
  return (
    <>
    <Header></Header>
    <div className='container mx-auto px-3 flex gap-4'>
    <div className='w-3/5'>
      <Recipes wantToCook={wantToCook}></Recipes>
    </div>
    <div className='w-2/5'>
        <Caart cook={cook}></Caart>
    </div>
    </div>
    
    </>
  )
}

export default App
