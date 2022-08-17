import React from 'react'
import SideNavBar from './Sidebarcomponents.js/SideNavBar'
import './index2.css';

const App2 = () => {
    return (
        <div className='main_div2'>
            <div className="hero_section">
                <SideNavBar />
                <div className='hero_section_right_div'>
                    <div className='top_div_1'>
                        <div className="top_div_1_left">
                            <div className='top_div_1_left_top'>
                                <div className='top_div_1_left_top_head'>Exchange</div>
                                <img src="images/Line2.png" className='arrowImg' />
                                <div className='top_div_1_left_top_head1'>Swaps</div>
                            </div>
                            <div className='top_div_1_left_bottom'>Make a swap at no cost</div>
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
                    <div className='mid_back_img'>
                        <div className='middle_div'>
                            <div className='middle_div_top'>
                                <div className='middle_div_top_left'>
                                    <div className="swap_head">Swap</div>
                                </div>
                                <div className='middle_div_top_mid'>
                                    <div className="liquidity_head">Liquidity</div>
                                </div>
                                <div className='middle_div_top_right'>
                                    <div className="limit_head">Limit</div>
                                </div>
                            </div>
                            <div className='middle_div_bottom'>
                                <div className='middle_div_bottom_top'>
                                    <div className='form_section'>
                                        <div className='form_head'>From</div>
                                    </div>
                                    <div className="input_section">
                                        <select id="img_logos">
                                            <option>BNB</option>
                                            <option>BNB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='middle_div_bottom_bottom'>
                                    <div className='middle_div_bottom_bottom_top'>
                                        <div className='left_1'>Amount</div>
                                        <div className='right_1'>Balance: 140,114</div>
                                    </div>
                                    <div className='middle_div_bottom_bottom_bottom'>
                                        <div className='middle_div_bottom_bottom_bottom_inner'>
                                            <div className='leftz'>
                                                <div className='left_2'>138,147</div>
                                                <div className='right_2'>~ $108,070</div>
                                            </div>
                                            <img className='stroking' src="images/Line1.png" />
                                            <div className='rightz'>
                                                <div id="button_10">
                                                    <div className='left_3'>HALF</div>
                                                </div>
                                                <div id="button_11">
                                                    <div className='right_3'>MAX</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='switch_div'>
                                <img src="images/Switch.png" className='switch_img' />
                            </div>
                            <div className='middle_div_lasts'>
                                <div className='middle_div_bottom_top'>
                                    <div className='form_section'>
                                        <div className='form_head'>From</div>
                                    </div>
                                    <div className="input_section">
                                        <select id="img_logoz">
                                            <option>DODO</option>
                                            <option>DODO</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='middle_div_bottom_bottom'>
                                    <div className='middle_div_bottom_bottom_top'>
                                        <div className='left_1'>Amount</div>
                                        <div className='right_1'>Balance: 140,114</div>
                                    </div>
                                    <div className='middle_div_bottom_bottom_bottomz'>
                                        <div className='middle_div_bottom_bottom_bottom_inner'>
                                            <div className='leftz'>
                                                <div className='left_2'>138,147</div>
                                            </div>
                                            <div className='rightz_1'>
                                                <div className='right_2s'>~ $108,070</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id="button_121">
                                <div className='last_button_heading'>Swap</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App2