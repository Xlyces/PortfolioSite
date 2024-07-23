import React from 'react'
import SmallSkillCard from '../../Components/Content/SkillContainers/SmallSkillCard.jsx'
import * as Content from '../Content.jsx'

export function CommunicationTree() {
  return (
    <div style={{display:'flex'}}>
         <SmallSkillCard contentTitle={Content.fSkill1a} contentText={Content.fSkill1aD} collageImageFile={Content.fSkill1aI}></SmallSkillCard>
         <SmallSkillCard contentTitle={Content.fSkill1b} contentText={Content.fSkill1bD} collageImageFile={Content.fSkill1bI}></SmallSkillCard>
         <SmallSkillCard contentTitle={Content.fSkill1c} contentText={Content.fSkill1cD} collageImageFile={Content.fSkill1cI}></SmallSkillCard>
    </div>
  )
}

export function LogicTree() {
  return (
    <div style={{display:'flex'}}>
         <SmallSkillCard contentTitle={Content.fSkill2a} contentText={Content.fSkill2aD} collageImageFile={Content.fSkill2aI}></SmallSkillCard>
         <SmallSkillCard contentTitle={Content.fSkill2b} contentText={Content.fSkill2bD} collageImageFile={Content.fSkill2bI}></SmallSkillCard>
         <SmallSkillCard contentTitle={Content.fSkill2c} contentText={Content.fSkill2cD} collageImageFile={Content.fSkill2cI}></SmallSkillCard>
    </div>
  )
}

export function AdaptabilityTree() {
  return (
    <div style={{display:'flex'}}>
         <SmallSkillCard contentTitle={Content.fSkill3a} contentText={Content.fSkill3aD} collageImageFile={Content.fSkill3aI}></SmallSkillCard>
         <SmallSkillCard contentTitle={Content.fSkill3b} contentText={Content.fSkill3bD} collageImageFile={Content.fSkill3bI}></SmallSkillCard>
    </div>
  )
}