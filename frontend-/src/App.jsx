import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard.jsx'
import SocialIcons from './components/SocialIcons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Rights from './components/Rights';
import Event from './EventPage';
import Announcements from './Announcements';
import Mainpage from './Mainpage';
import Collaborators from './CollaboratorsPage';
import PrivacyPolicy from './PrivacyPolicyPage';
import TermsOfUse from './TermsOfUsePage';
import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <>
      <Router>
        <div className='total' >
          <Navbar item1="Events" item2="Inventory" item3="Announcements" about="About us" />
          <Routes>
            <Route exact path="/events">
              <Route index element={<Event/>} />
            </Route>
            <Route exact path="/dashboard">
              <Route index element={<Dashboard/>}/>
            </Route>
            <Route exact path="/team">
              <Route index element={<></>} />
              <Route path="events" element={<></>} />
            </Route>
            <Route exact path="/announcements">
              <Route index element={<Announcements/>} />
              <Route path="events" element={<></>} />
            </Route>
            <Route exact path="/collaborators">
              <Route index element={<Collaborators/>} />
              <Route path="events" element={<></>} />
            </Route>
            <Route exact path="/services">
              <Route index element={<Announcements/>} />
              <Route path="events" element={<></>} />
            </Route>
            <Route exact path="/privacy-policy">
              <Route index element={<PrivacyPolicy/>} />
              <Route path="events" element={<></>} />
            </Route>
            <Route exact path="/terms-of-use">
              <Route index element={<TermsOfUse/>} />
              <Route path="events" element={<></>} />
            </Route>
            <Route exact path="/">
              <Route index element={<Mainpage/>} />
            </Route>
          </Routes>
          <hr style={{ color: 'white', width: '90%', margin: '20px auto', border: '1px solid gray' }} />
          <div className='social'>
            <SocialIcons />
          </div>
          <div>
            <Contact />
          </div>
          <hr style={{ color: 'white', width: '70%', margin: '20px auto', border: '1px solid gray' }} />
          <div>
            <Rights />
          </div>
          <hr />
        </div>
      <Chatbot />
      </Router>
    </>
  );
}

export default App;