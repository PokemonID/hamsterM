import React, {  useContext, useState } from 'react';
import { hamsterCoin, chipY, mainCharacter } from '../../images';
import Modal from '../Modal/Modal';
import { CustomContext } from '../../utils/Context';

const WithdrawMoney = () => {
  const { points, setPoints } = useContext(CustomContext);
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);

return (
<div className="bg-black flex justify-center">
  <div className="px-4 w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
    <div className="px-4 py-2 flex items-center space-x-2 justify-center">
      <p className="text-2xl text-white flex items-center ">Вывод</p>
    </div>
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-4 text-white">
    <div className="flex justify-between items-center font-semibold text-2xl">
      <span>В моём кошельке</span>
      <img src={chipY} alt="Exchange" className="w-11 h-11" />
    </div>
      <div className="text-2xl flex py-2 items-center">{points}
      <img src={hamsterCoin} alt="Coin" className="w-6 h-6 ml-1" />
      </div>
      <div className="text-lg py-3">~{(points * 0.1).toFixed(1)}Р</div>
    </div>
    <div className='py-3 bg-blue flex justify-between space-x-2'>
      <button type='button' className='w-1/2 bg-blue-600 rounded-lg' onClick={() => setModalActive(true)}>Вывести</button>
      <button type='button' className='w-1/2 bg-blue-600 rounded-lg' onClick={() => setModalActive2(true)}>История</button>
    </div>
    <div className="px-4 py-2">
      <h2 className="text-xl font-semibold mb-4">Лента выводов</h2>
      <div className="flex space-x-11">
        <div className="w-1/3 bg-blue-400 rounded-lg p-4 flex flex-col items-center">
          <img src={hamsterCoin} alt="User Avatar" className="w-16 h-16 rounded-full object-cover mb-2"/>
          <p className="text-lg font-medium">11500 ₽</p>
        </div>
        <div className="w-1/3 bg-blue-400 rounded-lg p-4 flex flex-col items-center">
          <img src={hamsterCoin} alt="User Avatar" className="w-16 h-16 rounded-full object-cover mb-2"/>
          <p className="text-lg font-medium">2000 ₽</p>
        </div>
        <div className="w-1/3 bg-blue-400 rounded-lg p-4 flex flex-col items-center">
          <img src={hamsterCoin} alt="User Avatar" className="w-16 h-16 rounded-full object-cover mb-2"/>
          <p className="text-lg font-medium">15940 ₽</p>
        </div>
      </div>
    </div>
  </div>
  <Modal active={modalActive2} setActive={setModalActive2}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">У вас нет запросов на вывод</h2>
        </div>
  </Modal>
  <Modal active={modalActive} setActive={setModalActive}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Вывод</h2>
          <div className="text-left mb-4 flex items-center space-x-2">
            <p className="text-gray-600">Доступно:</p>
            <p className="text-xl font-bold">{(points * 0.1).toFixed(1)}Р</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-2 block">Способ</label>
            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
              <img src="" alt="Visa MIR" className="w-10 h-10" />
              <p>Банковская карта</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-2 block">Реквизиты</label>
            <input
              type="text"
              placeholder="Номер карты"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-2 block">Сумма</label>
            <input
              type="number"
              placeholder="Сумма (1500 - 50000 ₽)"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
            Вывести
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Продолжая, вы соглашаетесь с <a href="#" className="text-blue-500 underline">офертой</a>.
          </p>
        </div>
      </Modal>
</div>
 );
};

export default WithdrawMoney;