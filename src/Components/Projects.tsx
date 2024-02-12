import crypto from "../assets/projects/crypto.svg";
import ecommerce from "../assets/projects/ecommerce.svg";
import blog from "../assets/projects/blog.svg";
import anchor from "../assets/projects/anchor.svg";

export default function Projects() {
  return (
    <div className="bg-[#000000] text-white font-sora px-4 py-10 lg:px-20 lg:py-20">
      <h1 className="text-[28px] text-center lg:text-[48px]">
        My <span className="font-bold">Projects</span>
      </h1>

      <div className="mt-7 flex flex-col gap-10 justify-center items-center lg:mt-20">
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 lg:gap-10 2xl:max-w-[95%]">
          <img
            src={crypto}
            alt=""
            className="w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 lg:w-full md:aspect-auto md:object-contain lg:object-fill object-cover"
          />

          <div className="flex flex-col gap-7 lg:justify-center">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              01
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              Crypto Screener Application
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <a href="">
              <img src={anchor} alt="" />
            </a>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 2xl:max-w-[90%]">
          <img
            src={ecommerce}
            alt=""
            className="w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 md:aspect-auto lg:w-full md:object-fill object-cover md:col-start-2"
          />

          <div className="flex flex-col gap-7 lg:justify-center md:col-start-1 md:row-start-1 m-auto">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              02
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              Euphoria - Ecommerce (Apparels) Website Template
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book. when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
            <a href="">
              <img src={anchor} alt="" />
            </a>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:gap-5 2xl:max-w-[95%]">
          <img
            src={blog}
            alt=""
            className="w-full h-full md:w-auto m-auto md:h-auto lg:max-w-[530px] aspect-2/3 md:aspect-auto md:object-fill lg:w-full object-cover "
          />

          <div className="flex flex-col gap-7 lg:justify-center">
            <h1 className="font-bold text-[24px] md:text-[16px] lg:text-[48px]">
              03
            </h1>
            <h1 className="font-bold text-[20px] md:text-[16px] lg:text-[32px]">
              Blog Website Template
            </h1>
            <p className="text-[#71717A] md:text-[12px] lg:text-[16px]">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <a href="">
              <img src={anchor} alt="" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
