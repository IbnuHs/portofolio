import React from "react";
import facebook from "../assets/social media/facebook.svg";
import twitter from "../assets/social media/twitter.svg";
import discord from "../assets/social media/discord.svg";
import reddit from "../assets/social media/reddit.svg";

export default function ContactForm() {
  return (
    <div className="py-10 px-4 lg:grid grid-cols-2 lg:gap-10 xl:gap-0 lg:px-20 lg:py-[60px]">
      <form action="" className="flex flex-col gap-5 xl:w-[80%]">
        <input
          type="text"
          className="border w-full border-black rounded text-[16px] px-4 py-3 focus:outline-none"
          placeholder="Your name"
        />
        <input
          type="email"
          className="border w-full border-black rounded text-[16px] px-4 py-3 focus:outline-none"
          placeholder="Email"
        />
        <input
          type="text"
          className="border w-full border-black rounded text-[16px] px-4 py-3 focus:outline-none"
          placeholder="Your website (If exists)"
        />

        <textarea
          name=""
          id=""
          cols={30}
          rows={6}
          className="border border-black rounded px-4 py-3"
          placeholder="How can I help?*"
        ></textarea>

        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:gap-6">
          <div className="">
            <button
              type="submit"
              className="text-white bg-black rounded font-semibold px-4 py-3 lg:px-4 lg:text-[14px] lg:h-full xl:px-4"
            >
              Get In Touch
            </button>
          </div>
          <ol className="flex flex-row gap-6">
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
      </form>

      <div className=" mt-10 font-sora flex flex-col gap-8">
        <h1 className="font-extrabold text-[28px] lg:text-[35px] xl:lg:text-[48px]">
          Let’s <span className="stroke-thin text-white">talk</span> for <br />
          Something special
        </h1>
        <p className="text-[#71717A]">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <h1 className="text-[20px] font-bold font-sora lg:text-[28px]">
          Ibnuhs30@gmail.com
        </h1>
      </div>
    </div>
  );
}
