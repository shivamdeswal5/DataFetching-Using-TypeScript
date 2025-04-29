import './app.css'
import Recipe from './components/recipes'
import Spinner from './components/spinner'
import useRecipe from './hooks/useRecipes/useRecipe'

function App() {
  
  const {loading} = useRecipe();
  return (
    <>
      {
        loading ? (<Spinner/>) : (<Recipe/>)
      }
    </>
  )
}

export default App
