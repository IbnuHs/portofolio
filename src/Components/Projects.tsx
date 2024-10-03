import ecoshop from "../assets/projects/ecoshop.png";
import kallGroup from "../assets/projects/kalla-logo_no-bg-270x182.png";
import newsApps from "../assets/projects/News Apps.png";
import lostandfound from "../assets/projects/lostandfound.png";
import anchor from "../assets/projects/anchor.svg";
import blogblok from "../assets/projects/BlogBlok.png";
import { FaUnlink } from "react-icons/fa";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-[#000000] text-white font-sora px-4 py-10 lg:px-20 lg:py-20"
    >
      <h1 className="text-[28px] text-center lg:text-[48px]">
        My <span className="font-bold">Projects</span>
      </h1>

      <div className="mt-7 flex flex-col gap-10 justify-center items-center lg:mt-20">
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 lg:gap-10 2xl:max-w-[95%]">
          <img
            src={newsApps}
            alt=""
            className="rounded-lg w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 lg:w-full md:aspect-auto md:object-contain lg:object-fill object-cover"
          />

          <div className="flex flex-col gap-7 lg:justify-center">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              01
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              News Apps
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              a news application that uses the API from the News API that
              displays the latest news. built using react and Tailwind Css. the
              display is responsive, can be accessed using desktops, tablets and
              cellphones.
            </p>
            <button disabled>
              <FaUnlink className="text-[20px]" />
            </button>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 2xl:max-w-[90%]">
          <img
            src={ecoshop}
            alt=""
            className="rounded-lg w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 md:aspect-auto lg:w-full md:object-fill object-cover md:col-start-2"
          />

          <div className="flex flex-col gap-7 lg:justify-center md:col-start-1 md:row-start-1 m-auto">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              02
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              Eco shop
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              an application for buying and selling recycled goods using used
              goods. the design is the result of{" "}
              <a
                href="https://www.figma.com/@bimaagustianwp"
                className="underline"
              >
                Bima agustian Wanaputra's work
              </a>{" "}
              . it is a design that I randomly found on figma. I made this to
              fill my free time. Built using react and tailwind Css.
            </p>
            <button disabled>
              <FaUnlink className="text-[20px]" />
            </button>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 2xl:max-w-[95%]">
          <img
            src={kallGroup}
            alt=""
            className="object-fill rounded-lg w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 md:aspect-auto md:object-fill lg:w-full  "
          />

          <div className="flex flex-col gap-7 lg:justify-center">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              03
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              Logistic API
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              A back end application to track the position of goods sent, an API
              that will be used by the front end. built using nestJs Typescript
              and Mysql.
            </p>
            <button disabled>
              <FaUnlink className="text-[20px]" />
            </button>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 2xl:max-w-[90%] mb-10">
          <img
            src={lostandfound}
            alt=""
            className="rounded-lg w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 md:aspect-auto lg:w-full md:object-center object-cover md:col-start-2"
          />

          <div className="flex flex-col gap-7 lg:justify-center md:col-start-1 md:row-start-1 m-auto">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              04
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              Lost and Found
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              My final project is an application, a platform for lost and found
              items specifically designed for the Faculty of Computer Science at
              Universitas Muslim Indonesia. It was developed using ReactJS for
              the frontend, NestJS for the backend, Tailwind for styling, and
              MySQL as the database.
            </p>
            <a
              href="https://lost-and-found.pages.dev/"
              target="_blank"
              className="disabled:"
            >
              <img src={anchor} alt="" />
            </a>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 2xl:max-w-[95%]">
          <img
            src={blogblok}
            alt=""
            className="object-fill rounded-lg w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 md:aspect-auto md:object-fill lg:w-full  "
          />

          <div className="flex flex-col gap-7 lg:justify-center">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              06
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              BlogBlok
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              BlogBlok is a dynamic blog application designed for creating,
              reading, and sharing articles online. I designed the user
              interface myself, focusing on a clean and intuitive experience
              using modern web design principles. The front end was built using
              ReactJS and styled with Tailwind CSS to ensure responsiveness and
              usability across devices. The API is still under development, but
              the application is structured to allow seamless integration with
              backend services once completed.
            </p>
            <a
              href="https://blogblok.pages.dev/article"
              target="_blank"
              className="disabled:"
            >
              <img src={anchor} alt="" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
