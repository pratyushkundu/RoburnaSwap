import React from 'react'

const Nft_box = ({ data}) => {

    const InnerUrl = data.images;
    return (
        <>
            <div className="nft_box_top" style={{ backgroundImage: `url(${InnerUrl})` }}>
                <div id='button_2'>
                    <img className='ether_img' src={data.logo} />
                    {/* <div className='nft_box_top_heading'>{data}</div> */}
                </div>
            </div>
            <div className="nft_box_bottom">
                <div className="nft_box_bottom_left">
                    <div className='nft_name'>{data.Name}</div>
                    <div className='nft_swaps'>
                        <img className='tick' src="images/VerifiedTag.png" />
                        <div className='nft_swaps_name'>{data.SwapsName}</div>
                    </div>
                </div>
                <div className="nft_box_bottom_right">
                    <div className='nft_list_price'>Listed Price</div>
                    <div className='nft_prices'>
                        <img className='nft_logo' src="images/RIP.png" />
                        <div className='nft_price'>{data.price}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nft_box