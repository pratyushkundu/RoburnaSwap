import React from 'react'
import img1 from './images/GUSD.png'
import img2 from './images/BinanceCoins.png'
import img3 from './images/SXP.png'
import img4 from './images/Solarcoin.png'
import img5 from './images/Tether.png'
import img6 from './images/HUSD.png'
import Common_coins from './Pop_up_components/common_coins'
import Token_list_box from './Pop_up_components/Token_list_box'
import './index4.css';



const App4 = () => {

    const commonCoinArr = [
        { id: 1, images: img1, name: "GUSD" },
        { id: 2, images: img2, name: "BNB" },
        { id: 2, images: img3, name: "SXP" },
        { id: 2, images: img4, name: "SLR" }
    ];

    const TokenListArr = [
        { id: 1, image: img2, heading: "BNB", smallHeading: "BNB", balance: "471.14182" },
        { id: 2, image: img3, heading: "SXP", smallHeading: "Swipe", balance: "254" },
        { id: 3, image: img1, heading: "GUSD", smallHeading: "Gnosis-USD", balance: "1,474" },
        { id: 4, image: img5, heading: "USDT", smallHeading: "Tether", balance: "20,474" },
        { id: 5, image: img4, heading: "SLR", smallHeading: "Solarcoin", balance: "87,171,111.01" },
        { id: 6, image: img6, heading: "HUSD", smallHeading: "HUSD", balance: "10,047.2" }
    ];

    return (
        <div className='main_div4'>
            <div className='pop_up_div'>
                <div className='pop_up_top_div'>
                    <div className='pop_close_div'>
                        <div className='select_token_head'>Select a Token</div>
                        <div className='close'>
                            <div className='close_head'>Close</div>
                            <img className='close_img' src="images/pop6.png" />
                        </div>
                    </div>
                    <div className='search_div'>
                        <input placeholder='Search name or paste address' className='search_head'></input>
                    </div>
                    <div className='common_base'>
                        <div className='common_base_head'>Common Bases</div>
                        <img className='question_img' src="images/Vector.png" />
                    </div>
                    <div className='common_coins_div'>
                        {commonCoinArr.map((data) => <div className='coin_div'>
                            <Common_coins data={data} />
                        </div>)}
                    </div>
                </div>
                <img className='horizontal_arr_img' src="images/Line12.png"></img>
                <div className='pop_up_bottom_div'>
                    <div className='pop_up_bottom_div_top_head'>
                        <div className='pop_up_bottom_div_top_head_left'>Tokens</div>
                        <div className='pop_up_bottom_div_top_head_right'>Balance</div>
                    </div>
                    <div className='token_list_box_div'>
                        {TokenListArr.map((data)=><div className='token_box'>
                            <Token_list_box data={data}/>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App4