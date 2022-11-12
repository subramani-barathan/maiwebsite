import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.css"

function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$322.32</span>
                <span className="featuredMoneyRate">-11.1 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$422.32</span>
                <span className="featuredMoneyRate">-4.1 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1322.32</span>
                <span className="featuredMoneyRate">+2.1 <ArrowUpward className="featuredIcon"/></span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
    </div>
  )
}

export default FeaturedInfo