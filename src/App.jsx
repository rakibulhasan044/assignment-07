
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
    <Header></Header>
    <div className='container mx-auto px-3 flex gap-6'>
    <div className='w-3/5'>
      <Recipes></Recipes>
    </div>
    <div>
      <h2>40%</h2>
    </div>
    </div>
    
    </>
  )
}

export default App
