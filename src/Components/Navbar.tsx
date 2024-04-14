import { useState } from "react";
import tag from "../assets/code-icon.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  function onToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="font-sora flex justify-between px-4 py-4 items-center z-50 border-2 overflow-hidden bg-white shadow-sm lg:px-20">
      <h1 className="text-black text-[20px] font-bold z-50 flex justify-between gap-2">
        <img src={tag} alt="" className="w-8" />
        HasyimDev
      </h1>
      <ol
        className={`flex absolute top-20 right-0 left-0 justify-center items-center font-semibold flex-col gap-10  bg-white z-10 py-4 lg:flex transition ease-in-out duration-200 lg:static lg:translate-y-0 lg:flex-row lg:z-0 lg:opacity-100 ${
          toggle ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
        }  `}
      >
        <li className="">
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact Me</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1vm0ZMNGS8XGNhmk4_5-1I4XOAv_Lkf5-/view?usp=sharing"
            target="_blank"
            className="border"
          >
            <button className="font-semibold px-4 py-3 bg-black text-white rounded gap-2 text-[12px] items-center flex lg:hidden">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </a>
        </li>
      </ol>
      <button onClick={onToggle} className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <a
        href="https://drive.google.com/file/d/1vm0ZMNGS8XGNhmk4_5-1I4XOAv_Lkf5-/view?usp=sharing"
        target="_blank"
        className="hidden lg:flex"
      >
        <button className="font-semibold px-4 py-3 bg-black text-white rounded gap-2 text-[15px] items-center hidden lg:flex">
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
