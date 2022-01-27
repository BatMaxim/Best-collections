import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UsersPage from "./pages/UsersPage/UsersPage";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {autoLogIn, getAdminStatus, userLogOut} from "./actions/userActions";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import {SocketContext} from "./socket";
import AdminPrivateRoute from "./components/AdminPrivatRoute/AdminPrivatRoute";

function App() {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);
    const user = useSelector((state)=>state.user);
    socket.on("LOG_OUT", ()=>{
        dispatch(userLogOut());
    })
    socket.on("CHECK_ADMIN_STATUS", ()=>{
        console.log("test");
        dispatch(autoLogIn());
    })
    useEffect(()=>{
        dispatch(autoLogIn());
    },[]);
    useEffect(()=>{
            socket.emit("SET_UID", {user:user.uid})
    },[user]);
    return (
        <div className="App">
          <Header />
          <Container>
                <Routes>
                    <Route exact path="/" element={<WelcomePage />}/>
                    <Route exact path="/login" element={<LogInPage />}/>
                    <Route path="/collection/:collectionId" element={<CollectionPage />}/>
                    <Route path="/item/:itemId" element={<ItemPage />}/>
                    <Route exact path="/registration" element={<RegistrationPage />}/>
                    <Route exact path="/profile"
                           element={<PrivateRoute component={<ProfilePage />}/>} />
                    <Route exact path="/users"
                           element={<AdminPrivateRoute component={<UsersPage />}/>} />
                    <Route path="*" element={<WelcomePage />}/>
                </Routes>
          </Container>
        </div>
    );
}

export default App;