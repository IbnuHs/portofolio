import frame from "../assets/Frame 20.png";
import frameDesktop from "../assets/Frame desktop.svg";
import linkedin from "../assets/social media/linkedin-square-icon.svg";
import instagram from "../assets/social media/black-instagram-icon.svg";
import email from "../assets/social media/email-address-icon.svg";

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
          I am a fresh graduate who is highly dedicated to web development.
          With my love for technology and creativity, I have explored various
          areas in web development, from interface design to backend
          development. With the experience and knowledge I have gained during my
          studies, I have managed to create a variety of interesting web
          projects.
        </p>

        <ol className="flex flex-row gap-6 lg:absolute xl:-bottom-0">
          <li>
            <a
              href="https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin icon"
                className="lg:w-[45px] w-[35px] p-1 border-[2px] border-black rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="mailto:ibnuhs30@gmail.com" target="_blank">
              <img
                src={email}
                alt="email icon"
                className="lg:w-[45px] w-[35px] p-1 border-[2px] border-black rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ibnu.hasyim.s/" target="_blank">
              <img
                src={instagram}
                alt="instagram icon"
                className="lg:w-[45px] w-[35px] p-1 border-[2px] border-black rounded-md"
              />
            </a>
          </li>
          {/* <li>
            <a href="">
              <img src={discord} alt="discord icon" className="w-30px" />
            </a>
          </li> */}
        </ol>
      </div>
    </div>
  );
}
