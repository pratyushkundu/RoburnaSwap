import React from 'react'
import './index1.css';

const App1 = () => {
    return (
        <div className='main_div1'>
            <div className='hero_section1'>
                <div className='pop_up_divs'>
                    <div className='pop_top'>
                        <div className='pop_top_left'>Choose Product</div>
                        <div className='pop_top_right'>
                            <div className='pop_close'>Close</div>
                            <img src="images/pop6.png"/>
                        </div>
                    </div>
                    <div className='pop_bottom'>
                        <div className='pop_bottom_left'>
                            <div className='pop_inner'>
                                <img className="pop_img" src="images/pop5.png" />
                                <div className="pop_head">Exchange</div>
                            </div>
                            <div className='pop_inner'>
                                <img className="pop_img" src="images/pop4.png" />
                                <div className="pop_head">Staking</div>
                            </div>
                            <div className='pop_inner'>
                                <img className="pop_img" src="images/pop3.png" />
                                <div className="pop_head">Marketplace</div>
                            </div>
                        </div>
                        <div className='pop_bottom_right'>
                            <div className='pop_inner'>
                                <img className="pop_img" src="images/pop1.png" />
                                <div className="pop_head">Farms</div>
                            </div>
                            <div className='pop_inner'>
                                <img className="pop_img"  src="images/pop2.png" />
                                <div className="pop_head">Lottery</div>
                            </div>
                            <div className='pop_inner'>
                                <img className="pop_img" style={{marginTop:"0.5rem"}} src="images/pop7.png" />
                                <div className="pop_head" style={{marginLeft:"0.8rem"}} >Launchpad</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App1