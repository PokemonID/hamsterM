import './App.css';
import {Route, Routes} from 'react-router-dom'
import HamsterMain from "./components/HamsterMain/HamsterMain";
import Shop from "./components/Shop/Shop";
import WithdrawMoney from "./components/WithdrawMoney/WithdrawMoney";
import Friends from "./components/Friends/Friends";

function App() {

    return (
        <div className="App">
            <Routes>
            <Route path={'/shop'} element={<Shop/>}/>
            <Route path={'/withdraw'} element={<WithdrawMoney/>}/>
            <Route path={'/friends'} element={<Friends/>}/>
                <Route index element={<HamsterMain />}/>
            </Routes>
        </div>
    );
}

export default App;