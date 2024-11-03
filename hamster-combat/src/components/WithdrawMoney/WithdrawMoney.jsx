import { hamsterCoin, chipY } from '../../images';

const WithdrawMoney = () => {

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
      <div className="text-2xl flex py-2 items-center">2342 
      <img src={hamsterCoin} alt="Exchange" className="w-6 h-6" />
      </div>
      <div className="text-lg py-3">~5122.12Р</div>
    </div>
    <div className='py-3 bg-blue flex justify-between space-x-2'>
      <button type='button' className='w-1/2 bg-blue-600 rounded-lg'>Вывести</button>
      <button type='button' className='w-1/2 bg-blue-600 rounded-lg'>История</button>
    </div>
  </div>
</div>
 );
};

export default WithdrawMoney;