import linkedin from "../assets/social media/linkedin-square-icon.svg";
import email from "../assets/social media/email-address-icon.svg";
import instagram from "../assets/social media/black-instagram-icon.svg";

export default function ContactForm() {
  return (
    <div id="contact" className="py-10 px-4 lg:grid grid-cols-2 lg:gap-10 xl:gap-0 lg:px-20 lg:py-[60px]">
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
              <a
                href="https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  className="w-[35px] p-1 border-[2px] border-black rounded-md"
                />
              </a>
            </li>
            <li>
              <a href="mailto:ibnuhs30@gmail.com" target="_blank">
                <img
                  src={email}
                  alt="email icon"
                  className="w-[35px] p-1 border-[2px] border-black rounded-md"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ibnu.hasyim.s/"
                target="_blank"
              >
                <img
                  src={instagram}
                  alt="instagram icon"
                  className="w-[35px] p-1 border-[2px] border-black rounded-md"
                />
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
