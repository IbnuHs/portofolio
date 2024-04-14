import ecoshop from "../assets/projects/ecoshop.png";
import kallGroup from "../assets/projects/kalla-logo_no-bg-270x182.png";
import newsApps from "../assets/projects/News Apps.png";

export default function Projects() {
  return (
    <div className="bg-[#000000] text-white font-sora px-4 py-10 lg:px-20 lg:py-20">
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
            {/* <a href="">
              <img src={anchor} alt="" />
            </a> */}
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
            {/* <a href="">
              <img src={anchor} alt="" />
            </a> */}
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
            {/* <a href="">
              <img src={anchor} alt="" />
            </a> */}
          </div>
        </article>
      </div>
    </div>
  );
}
