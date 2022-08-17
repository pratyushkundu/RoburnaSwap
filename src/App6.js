import React from 'react'
import './index6.css'

const App6 = () => {
    return (
        <div className='main_div6'>
            <div className='wallet_pop_up'>
                <div className='wallet_pop_up_top'>
                    <div className='wallet_close'>
                        <div className='wallet_head'>Your Wallet</div>
                        <div className='close_div'>
                            <div className='close_head'>Close</div>
                            <img src="images/pop6.png" className='close_img' />
                        </div>
                    </div>
                </div>
                <div className='wallet_pop_up_bottom'>
                    <div className='wallet_pop_up_bottom_balance_section'>
                        <div className='walet_info_div_left'>
                            <img className='wallet_picture' style={{width:"5rem",height:"5rem"}} src="images/Walletpic.png" />
                            <div className='wallet_info'>
                                <div className='account_head'>Account</div>
                                <div className='account_info_and_img'>
                                    <div className='address_head'>0xc19703...bbde</div>
                                    <img className='dot_img' src="images/Connected.png"/>
                                    <img className='copy_img' src="images/copy.png" />
                                </div>
                            </div>
                        </div>
                        <div className='wallet_info_div_right'>
                            <div className='price_info_top'>
                                <img className='three_dash_icon' src="images/Mark.png"/>
                                <div className='price_1'>138,147</div>
                                <img className='coin_img' src="images/BinanceCoin.png"/>
                            </div>
                            <div className='price_info_bottom'>
                                <div className='price_2'>~ $108,070</div>
                            </div>
                        </div>
                    </div>
                    <img className='horizontal_arr'  src="images/Line12.png"></img>
                    <div className='wallet_pop_up_bottom_order_section'>
                        <select id='order_div'>
                            <option>View recent activity</option>
                            <option>View recent activity</option>
                        </select>
                    </div>
                    <img className='horizontal_arr1' src="images/Line12.png"></img>
                    <div className='button_section'>
                        <div id="button_14">
                            <div className='button_left'>Disconnect Wallet</div>
                        </div>
                        <div id="button_15">
                            <div className='button_right'>View on BscScan</div>
                            <img src="images/arrow-right.png" className='arrow_img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App6