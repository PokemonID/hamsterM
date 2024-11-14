import React, { useState } from 'react';
import { hamsterCoin, money, shop, friendsFooter, dailyReward } from '../../images';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('airdrop');
  const handleButtonClick = (route, buttonName) => {
    setActiveButton(buttonName);
    navigate(route);
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-[#272a2f] flex justify-around items-center z-50 text-xs">
        <button
          className={`text-center w-1/5 m-1 p-2 rounded-2xl ${activeButton === 'withdraw' ? 'bg-[#1c1f24]' : 'text-[#85827d]'}`}
          onClick={() => handleButtonClick('/withdraw', 'withdraw')}
        >
          <img src={money} alt="Withdraw" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Вывод</p>
        </button>
        <button
          className={`text-center w-1/5 p-2 rounded-2xl ${activeButton === 'shop' ? 'bg-[#1c1f24]' : 'text-[#85827d]'}`}
          onClick={() => handleButtonClick('/shop', 'shop')}
        >
          <img src={shop} alt="Withdraw" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Магазин</p>
        </button>
        <button
          className={`text-center w-1/5 p-2 rounded-2xl ${activeButton === 'airdrop' ? 'bg-[#1c1f24]' : 'text-[#85827d]'}`}
          onClick={() => handleButtonClick('/', 'airdrop')}
        >
          <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Airdrop</p>
        </button>
        <button
          className={`text-center w-1/5 p-2 rounded-2xl ${activeButton === 'friends' ? 'bg-[#1c1f24]' : 'text-[#85827d]'}`}
          onClick={() => handleButtonClick('/friends', 'friends')}
        >
          <img src={friendsFooter} alt="Withdraw" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Друзья</p>
        </button>
        <button
          className={`text-center w-1/5 p-2 rounded-2xl ${activeButton === 'earn' ? 'bg-[#1c1f24]' : 'text-[#85827d]'}`}
          onClick={() => handleButtonClick('/earn', 'earn')}
        >
          <img src={dailyReward} alt="Withdraw" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Задания</p>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
