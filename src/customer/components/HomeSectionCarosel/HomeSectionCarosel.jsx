import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import {mens_kurta} from "../../../Data/Men/men_kurta.js"

const HomeSectionCarosel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="relative px-4 lg:px-8 ">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-center">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          // autoPlay
          // autoPlayInterval={1000}
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)" }} aria-label="next">
            <KeyboardArrowLeftIcon/>
        </button> 
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
