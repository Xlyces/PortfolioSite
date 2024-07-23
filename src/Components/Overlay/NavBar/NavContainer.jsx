import React from 'react'
import NavMarkers from './NavMarkers'

function NavContainer() {
  return (
    <div style={{position:'sticky'}}>
        <div id='NavContainer' style={{
            height:'4rem', 
            width:'100%', 
            backgroundColor: '#0C1016',
            position:'fixed',
            top:'0rem',
            left:'0',
            right:'0',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            paddingTop:'1.4rem',
            zIndex:'2'

            }}>
            <NavMarkers></NavMarkers>
        </div>
        <br></br>
        <div id='FadeItem' style={{
            height:'3.5rem', 
            width:'100%', 
            //#191D26
            background: 'linear-gradient(to bottom, #0C1016 0%, #0C1016 30%, #0C1016 60%, transparent 100%)',
            position:'fixed',
            top:'4rem',
            left:'0',
            right:'0'
            }}>

        </div>
    </div>
  )
}

export default NavContainer