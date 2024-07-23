import React from 'react'
import styles from '../AdditionalContainers/PersonalityTraitContainersStyles.css'

function PersonalityTraitContainers({personality1,elaboration1,personality2,elaboration2,personality3,elaboration3,personality4,elaboration4,}) {
  return (
    <div class='big-container'>
        <div class='title-container'>
            <h3>I am...</h3>
        </div>
        <div class='box-container'>
            <div class='box'>
                <div class='personality'>{personality1}</div>
                <div class='elaboration'>{elaboration1}</div>
            </div>
            <div class='box two'>
                <div class='personality'>{personality2}</div>
                <div class='elaboration 2'>{elaboration2}</div>
            </div>
            <div class='box three'>
                <div class='personality'>{personality3}</div>
                <div class='elaboration 3'>{elaboration3}</div>
            </div>
            <div class='box four'>
                <div class='personality'>{personality4}</div>
                <div class='elaboration 4'>{elaboration4}</div>
            </div>
        </div>
    </div>
  )
}

export default PersonalityTraitContainers