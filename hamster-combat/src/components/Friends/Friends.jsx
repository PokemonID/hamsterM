import { giftMax, giftMini, diamond } from '../../images';

const Friends = () => {

    return (
    <div className="bg-black flex justify-center">
        <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
            <div className="px-24 py-2 flex items-center space-x-2">
                    <p className="text-4xl text-white">Приглашайте друзей!</p>
                </div>
                <div className="px-36 py-2 flex items-center space-x-1"> 
                    <h4 className="text-1xl text-white"> Вы и ваш друг получите бонусы</h4>
                </div>
                <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative flex items-center">
                <img src={giftMini} alt="Gift" className="w-12 h-12 mr-4" />
                <div>
                <div>Пригласить друга</div>
                <div className="flex items-center">
                <img src={diamond} alt="Gift" className="w-6 h-6 " />
                <div>· + 0,1 для вас и вашего друга</div>
                </div>
                </div>
                </div>
                <div className="top-2 bg-[#272a2f] rounded-lg px-4 py-2 w-full relative flex items-center">
                <img src={giftMax} alt="Gift" className="w-12 h-12 mr-4" />
                <div>
                <div>Пригласить друга с Telegram Premium</div>
                <div className="flex items-center">
                <img src={diamond} alt="Gift" className="w-6 h-6 " />
                <div>· + 0,3 для вас и вашего друга</div>
                </div>
                </div>
                </div>
                <div className=" py-5 flex items-center space-x-1"> 
                    <h2 className="text-2xl text-white"> Список ваших друзей</h2>
                </div>

        </div>
    </div>
     );
    };
    
    export default Friends;