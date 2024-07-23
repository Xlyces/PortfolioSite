import React from 'react'
import SmallSkillCard from './SmallSkillCard'
import { big,small,image } from '../TextContainers/TestFile'

function SkillTreeTrial() {
  return (
    <div style={{
        display:'flex',
        scrollSnapAlign: 'center'
    }}>
        <SmallSkillCard skill={'Jtlkejrlks'} contentTitle={big} contentText={small} collageImageFile={image}></SmallSkillCard>
        <SmallSkillCard skill={'kaljslkfj'} contentTitle={big} contentText={small} collageImageFile={image}></SmallSkillCard>
        <SmallSkillCard skill={'KAJfklds'} contentTitle={big} contentText={small} collageImageFile={image}></SmallSkillCard>
        <SmallSkillCard skill={'aklsjdf'} contentTitle={big} contentText={small} collageImageFile={image}></SmallSkillCard>
    </div>
  )
}

export default SkillTreeTrial