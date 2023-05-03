import './App.css';
import Header from './components/Header/Header';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Contacts from './components/Contacts/Contacts';
import AboutMe from './components/AboutMe/AboutMe';


function App() {
  return (
      <div>        
      <Header/>
      <AboutMe/> 
      <SkillContainer/>
      <ProjectContainer/>
      <Contacts/>
      </div>
  );
}

export default App;
