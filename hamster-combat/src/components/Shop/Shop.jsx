import React from 'react';
import './Shop.css';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { HeadsItems, GlassesItems, AccessoriesItems, PaymentItems } from "./data";
import ProductItem from '../Productitem/Productitem';

const Shop = () => {
  const navigate = useNavigate(); // Инициализируем navigate

  return (
    <div className='bg-black flex justify-center'>
      <main className='w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl'>
        <div className="welcome">
          <button type="button" className='quit-text-shop' onClick={() => navigate('/')}> ← </button> {/* Заменяем router.push на navigate */}
          <div className='welcome-text-shop'> Добро пожаловать в магазин!</div>
        </div>
        <div className='main-shop'>
          <div className='ton-value'>
            <div className={'list'}>
              {PaymentItems.map((item) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  className={'item-pay'}
                />
              ))}
            </div>
          </div>
          <div className='heads'>
            <div className='title-item'>Шляпы</div>
            <div className={'list'}>
              {HeadsItems.map((item) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  className={'item'}
                />
              ))}
            </div>
          </div>
          <div className='glasses'>
            <div className='title-item'>Очки</div>
            <div className={'list'}>
              {GlassesItems.map((item) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  className={'item'}
                />
              ))}
            </div>
          </div>
          <div className='glasses'>
            <div className='title-item'>Аксессуары</div>
            <div className={'list'}>
              {AccessoriesItems.map((item) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  className={'item'}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
