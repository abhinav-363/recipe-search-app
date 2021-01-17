import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Recipe from './Recipe';

const App=()=>{
  const APP_ID='3d639734'
  const APP_KEY='0138ca2f8ee2a5d9a5342fa6674703b1'
  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('')

  const getSearch=e=>{
    e.preventDefault()
    setQuery(search)
  }

  useEffect(()=>{
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res=>{
      console.log(res)
      setRecipes(res.data.hits)
    })
    .catch(err=>{
      console.log(err)
    })
  },[query])

  return (
    <div className="App">
        <div className='appp'>
          <form onSubmit={getSearch} className='search-form'>
            <label className='title'>Search recipe by name </label>
            <input className='search-bar' placeholder='ex. chicken' type='text' value={search} onChange={e=>setSearch(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
          </form>
          <div className='recipes'>
          {
            recipes.length ?  recipes.map(recipe=><Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>) : <h2 className='message'>No dish found corresponding to recipe name !</h2>
          }
          </div>
        </div>
    </div>
  );
}
export default App