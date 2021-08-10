import React from 'react'

const StepsList = (props) => {
    const stepsListItem = props.steps.map((step, index) => {
        return(
            <ol>
                { step.no }
            </ol>
        )
    })

    return(
        <ul>
            {stepsListItem}
        </ul>
    )
}

export default StepsList