import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="carousel relative container mx-auto" style={{maxWidth: '1600px'}}>
        <div className="carousel-inner relative overflow-hidden w-full">
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="true"/>
            <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
                <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{}}>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Carousel;
