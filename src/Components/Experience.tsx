import dicoding from "../assets/experience/dicoding.png";
import idcamp from "../assets/experience/idcamp.jpg";
import kalla from "../assets/experience/images.png";
import lintasrta from "../assets/experience/unnamed.png";

export default function Experience() {
  return (
    <div className="bg-[#000000] text-white font-sora py-[60px] px-4 md:px-14">
      <h1 className="text-[28px] text-center lg:text-[48px]">
        My <span className="font-bold ">Experience</span>
      </h1>
      <div className="grid grid-rows-4 mt-5 gap-5 justify-items-center md:gap-10 md:mt-16 lg:gap-8 lg:mt-20">
        <article className="rounded-lg border-[1px] border-white px-6 py-[30px] lg:max-w-[1168px]">
          <div className="flex flex-row gap-[30px] items-center ">
            <img
              src={idcamp}
              alt="dicoding logo"
              className="w-16 h-16 aspect-square bg-white rounded-full"
            />
            <h1 className="text-[16px] lg:text-[24px]">
              Indosat Ooredoo Hutchison Digital Camp 2022
            </h1>
          </div>

          <p className="mt-[30px]">July 2022 - Sept 2022</p>
          <p className="mt-7">
            Joined the Indosat Ooreedo Hutchinson Digital Camp 2022 Scholarship
            program held by Dicoding and Indosat Ooreedo Hutchinson. Took the
            learning path of front-end web developer.
          </p>
        </article>

        <article className="rounded-lg border-[1px] border-white px-6 py-[30px] lg:max-w-[1168px] bg-[#27272A]">
          <div className="flex flex-row gap-[30px] items-center">
            <img
              src={lintasrta}
              alt="lintasarta cloudeka logo"
              className="w-16 h-16 aspect-square bg-white rounded-full object-contain"
            />
            <h1 className="text-[16px] lg:text-[24px]">
              Lintasarta Cloudeka Digischool 2022
            </h1>
          </div>

          <p className="mt-[30px]">Sept 2022 - Okt 2022</p>
          <p className="mt-7">
            Participated in the Lintasarta Cloudeka Digischool 2022 scholarship
            program held by dicoding and Lintasarta Cloudeka. Which flow of
            learning Full-Stack Development.
          </p>
        </article>

        <article className="rounded-lg border-[1px] border-white px-6 py-[30px] lg:max-w-[1168px]">
          <div className="flex flex-row gap-[30px] items-center">
            <img
              src={dicoding}
              alt="dicoding logo"
              className="w-16 h-16 aspect-square bg-white rounded-full"
            />
            <h1 className="text-[16px] lg:text-[24px]">
              Studi Independen Pengembang Front End Web dan Back End
            </h1>
          </div>

          <p className="mt-[30px]">Feb 2023 - June 2023</p>
          <p className="mt-7">
            Participated in Independent Study activities at Merdeka Campus with
            learning topics Front End Web and Back End and successfully worked
            on and completed the capstone project in a team.
          </p>
        </article>

        <article className="rounded-lg border-[1px] border-white px-6 py-[30px] lg:max-w-[1168px] bg-[#27272A]">
          <div className="flex flex-row gap-[30px] items-center">
            <img
              src={kalla}
              alt="dicoding logo"
              className="w-16 h-16 aspect-square rounded-full"
            />
            <h1 className="text-[16px] lg:text-[24px]">
              Back end Developer Internship At Kalla Group
            </h1>
          </div>

          <p className="mt-[30px]">Aug 2023 - Dec 2023</p>
          <p className="mt-7">
            Participated in internship activities held by the Kampus Merdeka,
            which partnered with the kalla group. there I was a back end
            developer, I worked with my team of 4 people and worked to create an
            API that would be used by the frontend team. the project we worked
            on was an item tracking application that would be used by kalla
            translog.
          </p>
        </article>
      </div>
    </div>
  );
}
