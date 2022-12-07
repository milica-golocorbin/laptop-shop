import { RiInstagramFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { FaDev } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-2">
      <a
        target="_blank"
        aria-label="milica golocorbin instagram link"
        href="https://www.instagram.com/milicagolocorbin"
        rel="noopener noreferrer"
      >
        <RiInstagramFill className="text-2xl hover:text-teal-500 hover:scale-105" />
      </a>

      <a
        target="_blank"
        aria-label="milica golocorbin github link"
        href="https://github.com/milica-golocorbin"
        rel="noopener noreferrer"
      >
        <RiGithubFill className="text-2xl hover:text-teal-500 hover:scale-105" />
      </a>

      <a
        target="_blank"
        aria-label="milica golocorbin linkedin link"
        href="#"
        rel="noopener noreferrer"
      >
        <RiLinkedinBoxFill className="text-2xl hover:text-teal-500 hover:scale-105" />
      </a>

      <a
        target="_blank"
        aria-label="milica golocorbin youtube link"
        href="https://www.youtube.com/channel/UCvUxkka6v725zFX-v2SJmtQ"
        rel="noopener noreferrer"
      >
        <RiYoutubeFill className="text-2xl hover:text-teal-500 hover:scale-105" />
      </a>

      <a
        target="_blank"
        aria-label="milica golocorbin twitter link"
        href="https://twitter.com/micagolocorbin"
        rel="noopener noreferrer"
      >
        <RiTwitterFill className="text-2xl hover:text-teal-500 hover:scale-105" />
      </a>

      <a
        target="_blank"
        aria-label="milica golocorbin dev link"
        href="https://dev.to/milicagolocorbin"
        rel="noopener noreferrer"
      >
        <FaDev className="text-2xl hover:text-teal-500 hover:scale-105" />
      </a>
    </div>
  );
};

export default SocialMedia;

// TODO: ADD LINK FOR PORTFOLIO AND LINKEDIN
