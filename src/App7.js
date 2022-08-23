import React from 'react'
import SideNavBar from './Sidebarcomponents.js/SideNavBar'
// import './index7.css';

const App7 = () => {
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
                        <div className='middle_divs'>
                            <div className='middle_div_top'>
                                <div className='middle_div_top_left1'>
                                    <div className="swap_head1">Swap</div>
                                </div>
                                <div className='middle_div_top_mid1'>
                                    <div className="liquidity_head1">Liquidity</div>
                                </div>
                                <div className='middle_div_top_right1'>
                                    <div className="limit_head1">Limit</div>
                                </div>
                            </div>
                            <div className='middle_div_bottomz'>
                                <div className='middle_div_bottom_top'>
                                    <div className='form_section'>
                                        <div className='form_heads'>Select Pair</div>
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
                            <div className='switchs_div'>
                                <img src="images/add-circle.png" className='switch_img' />
                            </div>
                            <div className='middle_div_lastz'>
                                <div className='middle_div_bottom_tops'>
                                    <div className='form_sections'>
                                        <div className='form_heads'>Select pair</div>
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
                                    <div className='middle_div_bottom_bottom_bottomzz'>
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

                            <div className='routes_div'>
                                <div className='route_bottomz'>
                                    <div className='route_bottom_left'>
                                        <div className='route_head11'>BNB per DODO</div>
                                        <div className='route_head11'>DODO per BNB</div>
                                        <div className='route_head1_1'>
                                            <div className='route_head1_1_1'>Share of Pool</div>
                                            <img className='question_img1' src="images/Vector.png" />
                                        </div>
                                        <div className='route_head1'>Slippage Tolerance</div>
                                    </div>
                                    <div className='route_bottom_right'>
                                        <div className='route_head21'>~ 18,069 DODO</div>
                                        <div className='route_head21'>~ 169 BNB</div>
                                        <div className='route_head21'> 1.00%</div>
                                        <div className='route_head31'>
                                            <div className='route_head41'>2.0%</div>
                                            <img src="images/setting-2.png" className='set_img' style={{ height: "1.6rem", width: "1.6rem", marginLeft: "1rem" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="button_12s">
                                <div className='last_button_heading'>Swap</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App7