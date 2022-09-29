import React from 'react'
import SideNavBar from './Sidebarcomponents.js/SideNavBar'
// import './index7.css';
import Middlediv from './middlediv'
import Component1 from './images/Component1.png'
import Component2 from './images/Component2.png'
import Component3 from './images/Component3.png'
import Component4 from './images/Component4.png'
import Component5 from './images/Component5.png'
import Component6 from './images/Component6.png'
import Component7 from './images/Component7.png'
import LiquidityList from './liquidity_list/liquidityList'

const App8 = () => {


    const liquidityArr = [
        { id: 1, logo: Component1, Name: "BNB/DODO" },
        { id: 2, logo: Component2, Name: "GUSD/SXP" },
        { id: 3, logo: Component3, Name: "BNB/WAXP" },
        { id: 4, logo: Component4, Name: "BNB/SLR" },
        { id: 5, logo: Component5, Name: "GUSD/SXP" },
        { id: 6, logo: Component6, Name: "USDT/DODO" }
    ];

    return (
        <div className='main_div21'>
            <div className="hero_sections">
                <SideNavBar />
                <div className='hero_section_right_div'>
                    <div className='top_div_1'>
                        <div className="top_div_1_left">
                            <div className='top_div_1_left_top'>
                                <div className='top_div_1_left_top_head'>Exchange</div>
                                <img src="images/Line2.png" className='arrowImg' />
                                <div className='top_div_1_left_top_head1'>Liquidity</div>
                            </div>
                            <div className='top_div_1_left_bottomz'>Provide liquidity and start earning fees.</div>
                        </div>
                        <div className="top_div_1_right">
                            <div id="button_7">
                                <img className="bell_div" src="images/notification-bing.png"></img>
                            </div>
                            <div id="button_8">
                                <img className="Settings_div" src="images/setting-2.png"></img>
                            </div>

                            <div id="button_9">
                                <img className="meta_div" src="images/MetamaskLogo.png"></img>
                                <div className='heading_meta'>0xdd....ahs4</div>
                                <img className='meta_dot' src="images/DropIcon.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mid_back_imgs' >
                        <div className='divimp'>
                            <Middlediv />
                            <div className='hero_section_right_liquidity_div'>
                                <div className='liquidity_divison'>
                                    <div className='liquidity_heading'>Your Liquidity</div>
                                </div>
                                <div className='liquidity_list'>
                                    <div className='liquidity_list_box'>
                                        {liquidityArr.map((data) => <LiquidityList data={data}/>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default App8
// {liquidityArr.map((data) => <div className=''>
//                                         <select id="liquidity_1">
//                                             <option id="dodo">BNB/DODO</option>
//                                         </select>
//                                         <img className='lines_stroke' src="images/Line3.png" />
//                                     </>
//                                     )}