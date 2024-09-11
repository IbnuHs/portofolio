import vector from "../assets/About Me/Group 1000015845.svg";

export default function AboutMe() {
  return (
    <div id="aboutme" className="flex flex-col px-4 py-10 gap-10 font-sora md:py-24 md:px-10 lg:grid lg:grid-cols-2 2xl:px-20 lg:py-[60px]">
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
            hello, I am Ibnu hasyim Surianto a fresh graduate from
            Universitas Muslim Indonesia, majoring in informatics engineering
            and focusing on web development. i have participated in several
            bootcamp activities such as Indosat Oreedoo hutchinson, linstasarta
            cloudeka digishool and independent studies held by the Kampus
            Merdeka in partnership with Dicoding with the topic of learning
            Front End web development and Back end. I have also had an
            internship for approximately 5 months which was also held by the
            Kampus Merdeka and partnered with Kalla Group, there I worked as a
            Back End Developer and was tasked with creating an API used by the
            Front End team.
          </p>
          {/* <p>
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
          </p> */}
        </div>
      </div>
    </div>
  );
}
