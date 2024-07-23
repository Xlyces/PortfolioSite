import logo from './logo.svg';
import './App.css';
import ProgressBar from './Components/Overlay/NavBar/ProgressBar';
import NavContainer from './Components/Overlay/NavBar/NavContainer';
import DescriptionBox from './Components/Content/TextContainers/DescriptionBox';
import { big,small,quote,image } from './Components/Content/TextContainers/TestFile';
import Quote from './Components/Content/TextContainers/Quote';
import './font.css';
import SmallSkillCard from './Components/Content/SkillContainers/SmallSkillCard';
import SkillBlockContainer from './Components/Content/SkillContainers/SkillBlockContainer';
import SkillTreeTrial from './Components/Content/SkillContainers/SkillTreeTrial';
import AnimatedArrow from './Assets/AnimatedArrow/AnimatedArrow';
import SkillBlockMarker from './Components/Content/SkillContainers/SkillBlockMarker';
import BigSkillTitle from './Components/Content/SkillContainers/BigSkillTitle';
import BigSkillSubBox from './Components/Content/SkillContainers/BigSkillSubBox';
import FirstPhoto from './Assets/FirstPhoto';
import FirstPhotoOverlay from './Assets/FirstPhotoOverlay';
import * as Content from './Content Files/Content.jsx';
import * as Skillz from './Content Files/Skill Trees/SkillTrees.jsx'
import PersonalityTraitContainers from './Components/Content/AdditionalContainers/PersonalityTraitContainers.jsx';
import InterestsContainer from './Components/Content/AdditionalContainers/InterestsContainer.jsx';
import InterestsContainer2 from './Components/Content/AdditionalContainers/InterestsContainer2.jsx';


//0C1016

function App() {
  return (
    <>
      
      <div style={{backgroundColor:'#0C1016'}}>
        <div class= 'container' style={{backgroundColor:'#0C1016'}}>
          <div style={{height:'100vh'}}>
            <FirstPhoto></FirstPhoto>
            <FirstPhotoOverlay></FirstPhotoOverlay>
          </div>
          <DescriptionBox heading={Content.aboutMe} content={Content.aboutMeContent}></DescriptionBox>
          <DescriptionBox heading={Content.skillSectionStart} content={Content.skillSectionStartD}></DescriptionBox>
          <Quote quote={Content.fTitle}></Quote>
          <SkillBlockMarker skill={Content.fSkill1}></SkillBlockMarker>
          <SkillBlockContainer items={Content.fSkill1Tree}></SkillBlockContainer>
          <SkillBlockMarker skill={Content.fSkill2}></SkillBlockMarker>
          <SkillBlockContainer items={(Content.fSkill2Tree)}></SkillBlockContainer>
          <SkillBlockMarker skill={Content.fSkill3}></SkillBlockMarker>
          <SkillBlockContainer items={(Content.fSkill3Tree)}></SkillBlockContainer>
          <Quote quote={Content.uTitle}></Quote>
          <BigSkillTitle skill={Content.uSkillTitleA} imageLink={Content.uSkillTitleAI}></BigSkillTitle>
          <BigSkillSubBox image={Content.uSkillA1I} skill={Content.uSkillA1} skillDescription={Content.uSkillDescriptionA1}></BigSkillSubBox>
          <BigSkillSubBox image={Content.uSkillA2I} skill={Content.uSkillA2} skillDescription={Content.uSkillDescriptionA2}></BigSkillSubBox>
          <BigSkillTitle skill={Content.uSkillTitleB} imageLink={Content.uSkillTitleBI}></BigSkillTitle>
          <BigSkillSubBox image={Content.uSkillB1I} skill={Content.uSkillB1} skillDescription={Content.uSkillDescriptionB1}></BigSkillSubBox>
          <BigSkillSubBox image={Content.uSkillB2I} skill={Content.uSkillB2} skillDescription={Content.uSkillDescriptionB2}></BigSkillSubBox>
          <Quote quote={Content.pTitle}></Quote>
          <PersonalityTraitContainers personality1={Content.per1} elaboration1={Content.per1E} personality2={Content.per2} elaboration2={Content.per2E} personality3={Content.per3} elaboration3={Content.per3E} personality4={Content.per4} elaboration4={Content.per4E}></PersonalityTraitContainers>
          <Quote quote={Content.iTitle}></Quote>
          <InterestsContainer background={image} interest={Content.int1} interestE={Content.int1E}></InterestsContainer>
          <InterestsContainer2 background={image} interest={Content.int2} interestE={Content.int2E}></InterestsContainer2>
          <InterestsContainer background={image} interest={Content.int3} interestE={Content.int3E}></InterestsContainer>
          <InterestsContainer2 background={image} interest={Content.int4} interestE={Content.int4E}></InterestsContainer2>
          
        </div>
      </div>
      <div style={{
          position:'fixed',
          bottom:'2rem',
          right:'5%'
        }}>
        <AnimatedArrow></AnimatedArrow>
      </div>
      <div style={{backgroundColor:'#0C1016', zIndex:'100'}}>
        <NavContainer style={{zIndex:'100'}}></NavContainer>
        <ProgressBar style={{zIndex:'100'}}></ProgressBar>
      </div>
    </>
  );
}

export default App;
