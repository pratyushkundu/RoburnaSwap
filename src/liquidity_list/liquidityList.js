import React from 'react'

const LiquidityList = ({data}) => {
    const Background = data.logo;
    return (
        <>
            <select id="liquidity_1" style={{backgroundImage:`url(${Background})`}}>
                <option id="dodo">{data.Name}</option>
            </select>
            <img className='lines_stroke' src="images/Line3.png"  />
        </>
    )
}

export default LiquidityList