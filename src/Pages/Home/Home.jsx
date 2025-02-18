
import Carousel from "../../Components/carousel/Carousel.jsx";
import InformationBanner from "../../Components/informationBanner/InformacionBanner.jsx";
import { mockData } from "../../HomeData.js";

import home01 from "../../Components/Images/home01.jpg";
import home02 from "../../Components/Images/home02.jpg";
import home03 from "../../Components/Images/home03.jpg";
import ImageGallery from "../../Components/imageGallery/ImagaGallery.jsx";

function Home() {
  return (
    <div>
      <Carousel image1={home01} image2={home02} image3={home03} />
      <InformationBanner
        title={mockData.title}
        titleSecound={mockData.titleSecound}
        description={mockData.description}
        benefits={mockData.benefits}
        icon= {mockData.icon}
      />
      <ImageGallery />
    </div>
  );
}

export default Home;
