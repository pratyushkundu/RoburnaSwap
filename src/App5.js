import React from 'react'
import './index5.css';

const App5 = () => {
    return (
        <div className='Main_div5'>
            <div className='settings_pop_up'>
                <div className='settings_pop_up_top'>
                    <div className='settings_close_div'>
                        <div className='settings_token_head'>Settings</div>
                        <div className='close'>
                            <div className='close_head'>Close</div>
                            <img className='close_img' src="images/pop6.png" />
                        </div>
                    </div>
                </div>
                <div className='settings_pop_up_bottom'>
                    <div className='GWET_section'>
                        <div className='GWEI_speed'>
                            <div className='GWEI_speed_head'>Default Transcation Speed (GWEI)</div>
                            <img className="GWEI_question_img" src="images/Vector.png" />
                        </div>
                        <div className='GWEI_option'>
                            <div className='GWEI_option1'>
                                <div className='GWEI_option_head1'>Standard (5)</div>
                            </div>
                            <div className='GWEI_option2'>
                                <div className='GWEI_option_head2'>Fast (6)</div>
                            </div>
                            <div className='GWEI_option3'>
                                <div className='GWEI_option_head3'>Instant (7)</div>
                            </div>
                        </div>
                    </div>
                    <div className='slippage_section'>
                        <div className='slip_tollerance'>
                            <div className='slip_tollerance_head'>Slippage Tolerance</div>
                            <img className="slip_question_img" src="images/Vector.png" />
                        </div>
                        <div className='slip_option'>
                            <div className='slip_option1'>
                                <div className='slip_option_head1'>0.1%</div>
                            </div>
                            <div className='slip_option1'>
                                <div className='slip_option_head1'>0.5%</div>
                            </div>
                            <div className='slip_option1'>
                                <div className='slip_option_head1'>1%</div>
                            </div>
                            <div className='slip_option2'>
                                <div className='slip_option_head2'>1%</div>
                            </div>
                        </div>
                    </div>
                    <div className='deadline_section'>
                        <div className='deadline_transaction'>
                            <div className='deadline_transaction_head'>Transaction deadline (mins)</div>
                            <img className="deadline_question_img" src="images/Vector.png" />
                        </div>
                        <div className='deadline_option'>
                            <div className='deadline_option1'>
                                <div className='deadline_option_head1'>10 mins</div>
                            </div>
                            <div className='deadline_option1'>
                                <div className='deadline_option_head1'>20 mins</div>
                            </div>
                            <div className='deadline_option2'>
                                <div className='deadline_option_head2'>25 mins</div>
                            </div>
                        </div>
                    </div>
                    <div className='personalisation_section'>
                        <div className='personalisation'>Personalisation</div>
                        <div className='Mode_preference'>
                            <div className='Mode_head'>Dark Mode</div>
                            <div className='Mode_img_head'>
                                <img className='Mode_img' />
                            </div>
                        </div>
                    </div>
                    <div id="button_13">
                        <div className='save_head'>Save Changes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App5