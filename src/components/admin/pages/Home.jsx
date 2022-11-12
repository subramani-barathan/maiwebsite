import Chart from "../chart/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../widgetSm/WidgetSm";
import WidgetLg from "../widgetLg/WidgetLg";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} grid dataKey="uv" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
