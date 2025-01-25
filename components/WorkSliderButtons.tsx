"use client";

import { ChevronLeft, ChevronRight, CircleArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

interface WorkSliderButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

const WorkSliderButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSliderButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <ChevronLeft className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <ChevronRight className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
