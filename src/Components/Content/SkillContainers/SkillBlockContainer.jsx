import React, {useState,useeffe} from 'react'
import SkillBlockMarker from './SkillBlockMarker'

function SkillBlockContainer({items}) {
    return (
    <>
    <div class='itemsContainer' dir='ltr' style={{
        display: 'flex',
        width: '100%',
        height: '70vh',
        overflowX:'scroll',
        overflowY:'hidden',
        whiteSpace: 'nowrap',
        scrollSnapType: 'x proximity;',
        paddingRight: '2rem',
        paddingLeft: '1rem',
        marginBottom: '15rem'
    }}>
        {items}
    </div>
        
    </>
  )
}

export default SkillBlockContainer