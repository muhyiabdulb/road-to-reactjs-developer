import React, { useEffect, useState } from 'react'
import RecipeTitle from './RecipeTitle'
import './index.css'
import IngredientList from './IngredientList'
import StepsList from './Challenge';

function App(){
    // TODO: Add initialRecipe object
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

    // TODO: Create recipe state
    const [ recipe, setRecipe ] = useState(initialRecipe);

    // TODO: Add new state property
    const [ prepared, setPrepared ] = useState(false);

    // TODO: Create ingredientClick event listener
    function ingredientClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }

    // TODO: Add the effect hook
    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
    }, [recipe]);

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

            {/* TODO: Add the prep work display */}
            { prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}

            <h3>Steps : </h3>
            <StepsList 
             // props (property)
            steps={ recipe.steps }/>
        </article>
    )
}

export default App