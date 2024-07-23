import React from 'react'
import '../SkillContainers/SmallSkillCardStyles.css'

function SmallSkillCard({collageImageFile, contentTitle, contentText}) {
  return (
    <>
        <div class='divContainer' style={{scrollSnapAlign:'center'}}>
            <div class='collageContainer'>
                <img class='centered-image' src={collageImageFile}/>
            </div>
            <div class='contentContainer'>
                <div class='titleContainer'>
                    <h3>{contentTitle}</h3>
                    <img src="https://img.pikbest.com/wp/202344/handcraft-handcrafted-swirling-black-marble-background-an-experimental-aesthetic-art-piece_9936373.jpg!sw800" alt="" />
                    
                </div>
                <div class='textContainer'>
                    <p>{contentText}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SmallSkillCard