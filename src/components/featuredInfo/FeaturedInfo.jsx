import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './FeaturedInfo.css'

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,4150</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/> </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,4150</span>
                <span className="featuredMoneyRate">-1.4 <ArrowDownwardIcon className='featuredIcon negative'/> </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+2.4 <ArrowUpwardIcon className='featuredIcon '/> </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
    </div>
  )
}

export default FeaturedInfo