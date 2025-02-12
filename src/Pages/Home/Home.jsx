
import Carousel from "../../Components/Carousel/Carousel";
import InformationBanner from "../../Components/InformationBanner/InformacionBanner";
import SpecialCategory from "../../Components/SpecialCategory.jsx/SpecialCategory";
import { mockData } from "../../HomeData.js";

import home01 from "../../Components/Images/home01.jpg";
import home02 from "../../Components/Images/home02.jpg";
import home03 from "../../Components/Images/home03.jpg";

function Home() {
  return (
    <div>
      <Carousel image1={home01} image2={home02} image3={home03} />
      <InformationBanner
        title={mockData.title}
        description={mockData.description}
        benefits={mockData.benefits}
      />
    
     
    </div>
  );
}

export default Home;
