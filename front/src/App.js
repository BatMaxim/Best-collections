import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {click_btn} from "./actions/testActions";
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";

function App() {
    const dispatch = useDispatch();
    const btn = useSelector((state)=>state.test.btn);
    const clickBtn = () => {
        dispatch(click_btn(!btn));
        console.log(btn)
    }
    return (
        <div className="App">
          <Header />
          <Container>
              <button onClick={clickBtn}>Click</button>
          </Container>
        </div>
    );
}

export default App;