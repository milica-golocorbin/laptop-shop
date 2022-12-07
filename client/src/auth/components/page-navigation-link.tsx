import { Link } from "react-router-dom";

type Props = {
  title: string;
  linkTitle: string;
  linkTo: string;
};

const PageNavigationLink = ({ title, linkTitle, linkTo }: Props) => {
  return (
    <p className="font-bold">
      {title}{" "}
      <span className="underline underline-offset-4 decoration-sky-500">
        <Link to={linkTo}>{linkTitle}</Link>
      </span>
    </p>
  );
};

export default PageNavigationLink;
