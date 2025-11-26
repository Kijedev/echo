import Logo from "../Img/logo.svg";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0C10] pt-20 pb-10">
      <section className="flex justify-around text-white">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex justify-around gap-20">
          <ul className="text-[#D8D8D8] text-sm flex flex-col gap-3">
            <p className="text-[#7D7E80] mb-4">Get started</p>
            <li>
              <a href="#">Download app</a>
            </li>
            <li>
              <a href="#">New releases</a>
            </li>
            <li>
              <a href="#">Originals</a>
            </li>
            <li>
              <a href="#">Plans</a>
            </li>
          </ul>

          <ul className="text-[#D8D8D8] text-sm flex flex-col gap-3">
            <p className="text-[#7D7E80] mb-4">Account</p>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>

          <ul className="text-[#D8D8D8] text-sm flex flex-col gap-3">
            <p className="text-[#7D7E80] mb-4">Pride</p>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">New releases</a>
            </li>
            <li>
              <a href="#">Originals</a>
            </li>
            <li>
              <a href="#">Plans</a>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-[#A41045] rounded-md text-white px-4 py-2">Sign up</button>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex justify-center gap-20 items-center py-8">
          <p className="text-sm text-[#7D7E80]">
            Say goodbye to interruptions and enjoy uninterrupted music
            streaming.
          </p>
          <div className="flex gap-2 text-[#7D7E80]">
            <FaYoutube />
            <FaSquareXTwitter />
            <AiFillTikTok />
            <FaFacebookSquare />
          </div>
        </div>

        <hr className="mx-auto max-w-3xl text-[#7D7E80]" />

        <div className="flex justify-center gap-10 py-8 text-[#7D7E80] text-sm">
          <p>2025 echo</p>
          <p>Cookie settings</p>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
