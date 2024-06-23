import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BASE_URL } from "@/app/api/api";

function SocialLinks({ id }: { id: string }) {
  return (
    <div className=" flex gap-4 relative">
      <FacebookShareButton url={`${BASE_URL}/${id}`} title={`Vercel`}>
        <div className="hover:text-[#ff2020] hover:border-[#ff2020] border p-2 hover:p-3 duration-300 rounded-full flex justify-center absolute top-0 left-0 items-center">
          <FaFacebookF />
        </div>
      </FacebookShareButton>
      <TwitterShareButton url={`${BASE_URL}/${id}`} title={`Vercel`}>
        <div className="hover:text-[#ff2020] hover:border-[#ff2020] border p-2 hover:p-3 duration-300 rounded-full flex justify-center absolute top-0 left-16 items-center">
          <FaTwitter />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton url={`${BASE_URL}/${id}`} title={`Vercel`}>
        <div className="hover:text-[#ff2020] hover:border-[#ff2020] border p-2 hover:p-3 duration-300 rounded-full flex justify-center absolute top-0 left-32 items-center">
          <FaLinkedin />
        </div>
      </LinkedinShareButton>
    </div>
  );
}

export default SocialLinks;
