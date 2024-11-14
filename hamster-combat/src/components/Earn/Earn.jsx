import React, { useContext } from 'react';
import './Earn.css';
import { CustomContext } from '../../utils/Context';
import { diamond, youtube, telegram, twitter, friends, right, rutube } from '../../images';

const Earn = () => {
  const { points, setPoints } = useContext(CustomContext);

  const handleClick = (link, pointsToAdd) => {
    setPoints(prevPoints => prevPoints + pointsToAdd);
    window.location.href = link;
  };

return (
<div className="bg-black flex justify-center">
  <div className="w-full bg-black text-white h-full font-bold flex flex-col max-w-xl">
    <div className="px-8 py-4 flex flex-col items-center space-y-4">
      <div className="px-4 flex justify-center">
        <div className="w-60 h-60 p-4 rounded-full circle-outer">
          <div className="w-full h-full rounded-full circle-inner shadow-glow shadow-outer">
            <img src={diamond} alt="Main Character" className="w-full h-full mt-3" />
            </div>
          </div>
      </div>
  <div className="w-full">
    <p className="text-2xl text-white">Hamster Youtube</p>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-1"
    onClick={() => handleClick('https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg', 10000)}>
      <div className="flex items-center space-x-4">
      <img src={youtube} alt="YouTube" className="w-10 h-10" />
      <div className="flex flex-col">
      <p className="text-1xl text-white">Топ-6 провалов звезд в NFT</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between space-x-4 p-2 bg-gray-800 rounded-3xl mt-2"
    onClick={() => handleClick('https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg', 10000)}>
    <div className="flex items-center space-x-4">
      <img src={youtube} alt="YouTube" className="w-10 h-10" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white">Безумие выборов в США</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
      </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
  </div>
  <div className="w-full">
    <p className="text-2xl text-white">Hamster RUTUBE</p>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-1"
    onClick={() => handleClick('https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg', 10000)}>
      <div className="flex items-center space-x-4">
      <img src={rutube} alt="YouTube" className="w-9 h-9 ml-1" />
      <div className="flex flex-col">
      <p className="text-1xl text-white ml-1">Главные финансовые кризисы р истории</p>
      <p className="text-1xl text-blue-400 text-left ml-1">💎 +1</p>
      </div>
    </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
  </div>
  <div className="w-full">
    <p className="text-2xl text-white">Список заданий</p>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-1"
    onClick={() => handleClick('https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg', 10000)}>
    <div className="flex items-center space-x-4">
    <img src={rutube} alt="Telegram" className="w-9 h-9 ml-1" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white text-left ml-1">Подписывайся на наш RUTUBE канал</p>
      <p className="text-1xl text-blue-400 text-left ml-1">💎 +1</p>
      </div>
    </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-1"
    onClick={() => handleClick('https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg', 10000)}>
    <div className="flex items-center space-x-4">
    <img src={telegram} alt="Telegram" className="w-11 h-11" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white text-left">Присоединяйся к нашему Telegram каналу</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-2"
    onClick={() => handleClick('https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg', 10000)}>
    <div className="flex items-center space-x-3">
    <img src={twitter} alt="X" className="w-12 h-12" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white text-left">Следи за нашим аккаунтом в X</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
    <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-2">
    <div className="flex items-center space-x-4">
      <img src={friends} alt="Telegram" className="w-11 h-11" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white">Пригласить 3 друзей</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-2">
    <div className="flex items-center space-x-3">
      <img src={friends} alt="X" className="w-12 h-12" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white">Пригласить 7 друзей</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
      <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-2">
    <div className="flex items-center space-x-4">
      <img src={friends} alt="Telegram" className="w-11 h-11" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white">Пригласить 10 друзей</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
    <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
    <button className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-3xl mt-2 mb-16">
    <div className="flex items-center space-x-3">
      <img src={friends} alt="X" className="w-12 h-12" />
      <div className='flex flex-col'>
      <p className="text-1xl text-white">Пригласить 25 друзей</p>
      <p className="text-1xl text-blue-400 text-left">💎 +1</p>
      </div>
    </div>
    <img src={right} alt="Right Icon" className="w-6 h-6" />
    </button>
  </div>
</div>
</div>
</div>
  );
};

export default Earn;