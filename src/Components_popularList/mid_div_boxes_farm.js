import React from 'react'

const Mid_div_boxes_farm = ({data}) => {

    return (
        <>
            <div className='img_logos'>
                <img src={data.logo} className='BinanceCoin' />
                {/* <img src="images/RIP.png" className='RIP' /> */}
            </div>
            <div className='mid_div_box_inner1'>
                <div className='mid_heading_1'>{data.Name}</div>
                <div id="button_1">
                    <div className='mid_heading_2'>{data.buttonType}</div>
                </div>
            </div>
            <div className='mid_div_box_inner2'>
                <div className='mid_heading_3'>
                    <div className='mid_heading_3_1'>APY</div>
                    <img className="questionMark_img" src="images/Vector.png" />
                </div>
                <div className='mid_heading_4'>{data.apyPercent}</div>
            </div>
            <div className='mid_div_box_inner3'>
                <div className='mid_heading_5'>
                    <div className='mid_heading_5_1'>{data.Multiplier}</div>
                    <img className="questionMark_img" src="images/Vector.png" />
                </div>
                <div className='mid_heading_6'>{data.MultiplierPercent}</div>
            </div>
            <div className='mid_div_box_inner4'>
                <div className='mid_heading_7'>Stake</div>
                <img className='arrow_img' src="images/arrow.png" />
            </div>
        </>
    )
}

export default Mid_div_boxes_farm;