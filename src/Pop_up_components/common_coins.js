import React from 'react'

const Common_coins = ({ data }) => {
    return (
        <>
            {/* <div className='img_coin_div'> */}
                <img className='coin_img' src={data.images} />
            {/* </div> */}

            <div className='coin_head'>{data.name}</div>
        </>
    )
}

export default Common_coins