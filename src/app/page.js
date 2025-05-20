
import Image from "next/image";
import NavBarDropdown from "./components/navbar-dropdown/navbar-dropdown";
import { ShiftCard } from "./components/shift-card/shift-card";
import { ShiftCardUse } from "./components/shift-card/shift-cardUse";
import { BackgroundBoxesUse } from "./components/background-boxes/background-boxes-use";
import ServiceCard from "./components/services-card/service-card";
import { Carousel } from "./components/carousel-projects/carousel-projects";
import { Timeline } from "./components/how-we-work/how-we-work";
import { cards } from "./lib/data/data";

import { Cta } from "./components/cta/cta";

import { slideData, data } from "./lib/data/data";
import { Carousel2 } from "./components/carousel-projects2.jsx/carousel-projects2";
import { FeaturesDemo } from "./components/features-demo/features-demo";

export default function Home() {


  return (
    <div className="w-full relative bg-neutral-950">
      <NavBarDropdown />
      <BackgroundBoxesUse />
      <ServiceCard />

      <Cta />

      {/* CAROUSEL NUMERO 2 */}
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Get to know your iSad.
        </h2>
        <Carousel2 items={cards} />
      </div>
      <div className="w-full">
        <FeaturesDemo />
      </div>
      <Timeline data={data} />
    </div>
  );
}
