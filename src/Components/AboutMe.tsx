import React from "react";
import vector from "../assets/About Me/Group 1000015845.svg";

export default function AboutMe() {
  return (
    <div className="flex flex-col px-4 py-10 gap-10 font-sora md:py-24 md:px-10 lg:grid lg:grid-cols-2 2xl:px-20 lg:py-[60px]">
      <img
        src={vector}
        alt=""
        className="md:w-2/3 m-auto lg:w-full xl:w-10/12"
      />
      <div className="text-[#71717A] px-8">
        <h1 className="text-[28px] text-black xl:text-[48px]">
          About <span className="font-bold">Me</span>
        </h1>
        <div className="mt-10 flex flex-col gap-5 lg:text-[12px] xl:text-[16px]">
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>

          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
