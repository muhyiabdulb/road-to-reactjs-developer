import React, { useState } from 'react'
import RecipeTitle from './RecipeTitle'
import './index.css'
import IngredientList from './IngredientList'
import StepsList from './Challenge';

function App(){
    // TODO: Add recipe object
    const initialRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20,
        },
        ingredients: [
            {name: '3 potatoes, cut into 1/2" pieces', prepared: false},
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: false },
            { name: 'Pepper', prepared: false },
        ],
        steps : [
            {no: '1. Add cut potatoes to a pot of heavily salted water.'},
            {no: '2. Bring pot to a boil.'},
            {no: '3. Boil the potatoes until fork tender, about 15-20 minutes.'},
            {no: '4. Strain the potatoes.'},
            {no: '5. Return potatoes to pot.'},
            {no: '6. Add butter, cream, salt, and pepper to taste.'},
            {no: '7. Mash potatoes.'},
            {no: '8. Reseason and add butter and cream as desired.'}
        ]
    }

    const [recipe, setRecipe] = useState(initialRecipe)
    
    function ingredientClick(index) {
        const updateRecipe = {... recipe}
        updateRecipe.ingredients[index].prepared = !updateRecipe.ingredients[index].prepared
        setRecipe(updateRecipe)    
    }

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle 
            // props (property)
            title={recipe.title} 
            feedback={recipe.feedback} />

            {/* TODO: Add IngredientList component */}
            <IngredientList 
            // props (property)
            ingredients={recipe.ingredients} 
            click={ingredientClick} />
            
            <h3>Steps : </h3>
            <StepsList 
             // props (property)
            steps={ recipe.steps }/>
        </article>
    )
}

export default App