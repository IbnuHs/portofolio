import React from "react";
import reactimg from "../assets/skills/react-js-icon.svg";
import html from "../assets/skills/html5-balck-icon.svg";
import css from "../assets/skills/css3-icon.svg";
import express from "../assets/skills/express-js-icon.svg";
import tailwind from "../assets/skills/tailwind-css-icon.svg";
import nestjs from "../assets/skills/nest-js-icon.svg";
import mysql from "../assets/skills/mysql-icon.svg";
import git from "../assets/skills/icon-git.svg";
import bootstrap from "../assets/skills/bootstrap-5-logo-icon.svg";
import javascript from "../assets/skills/javascript-programming-language-icon.svg";

export default function MySkill() {
  return (
    <div className="font-sora py-10 px-4 lg:py-20">
      <h1 className="text-[28px] text-center lg:text-[48px]">
        My <span className="font-bold">Skills</span>
      </h1>

      <ol className="grid grid-cols-2 font-sora mt-5 gap-5 m-auto justify-items-center md:grid-cols-3 lg:grid-cols-5 xl:px-28 2xl:px-36 lg:mt-[60px]">
        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img src={git} alt="git icons" className="w-14" />
          <h1 className="text-[20px] font-bold text-center mt-8">git</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img src={html} alt="html icons" className="w-14" />
          <h1 className="text-[20px] font-bold text-center mt-8">Html</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img src={css} alt="css icons" className="w-14" />
          <h1 className="text-[20px] font-bold text-center mt-8">Css</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img
            src={javascript}
            alt="javascript icons"
            className="w-14 grayscale"
          />
          <h1 className="text-[20px] font-bold text-center mt-8">Javascript</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img
            src={tailwind}
            alt="tailwind icons"
            className="w-14 brightness-0 grayscale"
          />
          <h1 className="text-[20px] font-bold text-center mt-8">Tailwind</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img
            src={bootstrap}
            alt="boostrap icons"
            className="w-14 grayscale"
          />
          <h1 className="text-[20px] font-bold text-center mt-8">Boostrap</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img
            src={reactimg}
            alt="react icons"
            className="w-14 brightness-0 grayscale"
          />
          <h1 className="text-[20px] font-bold text-center mt-8">React</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img src={express} alt="express js icons" className="w-14" />
          <h1 className="text-[20px] font-bold text-center mt-8">Express Js</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img
            src={nestjs}
            alt="NestJs icons"
            className="w-14 brightness-0 grayscale"
          />
          <h1 className="text-[20px] font-bold text-center mt-8">NestJs</h1>
        </li>

        <li className="flex justify-center flex-col items-center border-2 border-black w-40 aspect-square rounded">
          <img
            src={mysql}
            alt="NestJs icons"
            className="w-14 brightness-0 grayscale"
          />
          <h1 className="text-[20px] font-bold text-center mt-8">MySql</h1>
        </li>
      </ol>
    </div>
  );
}
