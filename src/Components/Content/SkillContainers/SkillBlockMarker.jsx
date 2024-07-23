import React,{useState,useEffect} from 'react'

function SkillBlockMarker({skill}) {
    return (
        <div class='markerContainer' style={{
            display:'flex',
            flexDirection:'column',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            paddingBottom:'0.5rem',
            borderBottom:'#b69d74 1px solid',
            marginBottom:'1rem',
            fontSize:'1.3rem',
            height:'4rem'}}>
        <h2 style={{color:'#b69d74'}}>{skill}</h2>
        <p style={{fontSize:'0.6rem', opacity:'0.5'}}>Please scroll to the right</p>
        </div>
)
}

export default SkillBlockMarker