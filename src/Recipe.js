import React from 'react'
import style from './recipe.module.css'

const Recipe=({title,calories,image,ingredients})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2><strong>Calories : <span>{Math.round(calories)}</span></strong></h2>
            <br/>
            <img className={style.image} src={image} alt=''></img>
            <br/>
            <strong>Ingredients : </strong>
            <ol>
            {
                ingredients.map(ingredient=><li>{ingredient.text}</li>)
            }
            </ol>
        </div>
    )
}

export default Recipe