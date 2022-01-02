import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
    return (
        <div className="App">
          <Header />
          <Container>
                <Routes>
                    <Route exact path="/" element={<WelcomePage />}/>
                    <Route exact path="/login" element={<LogInPage />}/>
                    <Route exact path="/registration" element={<RegistrationPage />}/>
                    <Route exact path="/profile" element={<ProfilePage />}/>
                </Routes>
          </Container>
        </div>
    );
}

export default App;