import React from 'react'

const Token_list_box = ({data}) => {
    return (
        <>
            <div className='token_list_left'>
                <img className='token_list_left_img' src={data.image}/>
                <div className='token_list_mainhead'>
                    <div className='token_list_head1'>{data.heading}</div>
                    <div className='token_list_head2'>{data.smallHeading}</div>
                </div>
            </div>
            <div className='token_list_right'>
                <div className='token_list_right_head'>{data.balance}</div>
            </div>
        </>
    )
}

export default Token_list_box