import './App.css';
import {Route, Routes} from 'react-router-dom'
import HamsterMain from "./components/HamsterMain/HamsterMain";
import Shop from "./components/Shop/Shop";
import WithdrawMoney from "./components/WithdrawMoney/WithdrawMoney";
import Friends from "./components/Friends/Friends";
import Earn from "./components/Earn/Earn";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="App">
            <Routes>
            <Route path={'/shop'} element={<Shop/>}/>
            <Route path={'/withdraw'} element={<WithdrawMoney/>}/>
            <Route path={'/friends'} element={<Friends/>}/>
            <Route path={'/earn'} element={<Earn/>}/>
            <Route index element={<HamsterMain />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;