import React, { useEffect, useState } from 'react'


function NavMarkers() {
    const [marker,setMarker] = useState('Greetings')

        //READS POSITION TO RETURN DIFFERENT MARKERS
        const handleMarker = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const progress = (scrollY/(documentHeight-windowHeight))*100 
            if (progress >= 30 && progress < 60) {
                setMarker('About me');
            } else if (progress >= 60) {
                setMarker('Hungry');
            } else if (progress < 30){
                setMarker('Greetings');
            }

        }

    useEffect(()=>{
        window.addEventListener('scroll',handleMarker)
        return()=>{ 
            window.removeEventListener('scroll',handleMarker)
    }
    },[])


  return (
    <div>
        <h2 style={{zIndex:'10', color:'white'}}>{marker}</h2>
    </div>
  )
}

export default NavMarkers