import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {click_btn} from "./actions/testActions";

function App() {
    const dispatch = useDispatch();
    const btn = useSelector((state)=>state.test.btn);
    const clickBtn = () => {
        dispatch(click_btn(!btn));
        console.log(btn)
    }
    return (
        <div className="App">
          Hello world!
            <button onClick={clickBtn}>Click</button>
        </div>
    );
}

export default App;
