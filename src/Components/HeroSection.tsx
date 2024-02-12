import React from "react";
import frame from "../assets/Frame 20.png";
import facebook from "../assets/social media/facebook.svg";
import twitter from "../assets/social media/twitter.svg";
import discord from "../assets/social media/discord.svg";
import reddit from "../assets/social media/reddit.svg";
import frameDesktop from "../assets/Frame desktop.svg";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center py-10 flex-col px-4 md:px-24 md:gap-20 lg:grid lg:grid-cols-2 lg:px-20 lg:relative lg:py-[60px]">
      <img
        src={frame}
        alt=""
        className="m-auto w-full md:w-1/2 lg:w-full lg:hidden md:scale-110"
      />

      <img
        src={frameDesktop}
        alt=""
        className="hidden lg:block w-full scale-110 xl:-translate-x-32 2xl:scale-125 pt-[60px]"
      />
      <div className="lg:row-start-1">
        <h1 className="text-[28px] xl:text-[48px]">
          Hello I’am <span className="font-bold"> Ibnu Hasyim S. Web </span>{" "}
          <span className="text-white font-bold stroke-thin">Developer</span>{" "}
          <span className="font-semibold">Based in</span>{" "}
          <span className="font-bold">Indonesia</span>
        </h1>

        <p className="text-[16px] text-[#71717A] py-8">
          I'm Ibnu Hasyim Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>

        <ol className="flex flex-row gap-6 lg:absolute xl:-bottom-8">
          <li>
            <a href="">
              <img src={facebook} alt="facebook icon" className="w-30px" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={reddit} alt="reddit icon" className="w-30px" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="twitter icon" className="w-30px" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={discord} alt="discord icon" className="w-30px" />
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
