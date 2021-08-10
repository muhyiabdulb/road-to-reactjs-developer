import React from 'react'
import './IngredientList.css'

function IngredientsList(props) {
    // Create the list items using map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return(
            <li key={index} 
            // Return the desired HTML for each ingredient
            className={ingredient.prepared ? 'prepared' : ''} 
            // TODO: Add onClick event
            onClick={() => props.onClick(index)}>
                {ingredient.name}
            </li>
        )
    })

    return(
        <ul>
            {ingredientListItems}
        </ul>
    )
}

export default IngredientsList