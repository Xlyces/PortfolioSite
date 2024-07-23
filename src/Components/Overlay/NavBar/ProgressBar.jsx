import React, { useEffect, useState } from 'react'

function ProgressBar() {
    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        const handleScroll = ()=> {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const progress = (scrollY/(documentHeight-windowHeight))*100

            setProgress(progress)
            console.log(progress)
        }

        window.addEventListener('scroll',handleScroll);

        return()=>{ 
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    return (
        <div>
            <div id='progress-container' style={{
                height: "0.4rem", 
                width:'100%', 
                backgroundColor:'#191D26', 
                position:'fixed', 
                top:'1rem', 
                left:'0', 
                right:'0'}}>
                    <div id='progress-filler' style={{
                        height: "100%", 
                        width:`${progress}%`, 
                        backgroundColor:'#b69d74',
                        zIndex:'100',
                        }}></div>
            </div>
        </div>
    )
}

export default ProgressBar