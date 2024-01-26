import AllPublisher from "../../components/Home/AllPublisher";
import CategoryNews from "../../components/Home/CategoryNews";
import Entertainment from "../../components/Home/Entertainment";
import LocalNews from "../../components/Home/LocalNews";
// import InternationalSlide from "../../components/Home/InternationalSlide";
import Plan from "../../components/Home/Plan";
import PopularNews from "../../components/Home/PopularNews";
import Slider from "../../components/Home/Slider";
import Sports from "../../components/Home/Sports";
import Statistic from "../../components/Home/Statistic";
import TopNews from "../../components/Home/TopNews";
import Trendy from "../../components/Home/Trendy";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopNews></TopNews>
      <AllPublisher></AllPublisher>
      <Trendy></Trendy>
      <CategoryNews></CategoryNews>
      <PopularNews></PopularNews>
      {/* <InternationalSlide></InternationalSlide> */}
      <LocalNews></LocalNews>
      <Statistic></Statistic>
      <Sports></Sports>
      <Plan></Plan>
      <Entertainment></Entertainment>
    </div>
  );
};

export default Home;
