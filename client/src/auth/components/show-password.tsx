type Props = {
  showPassword: boolean;
  onClickHandler: () => void;
};

const ShowPassword = ({ showPassword, onClickHandler }: Props) => {
  return (
    <p
      className="text-[10px] uppercase font-bold cursor-pointer absolute top-9 right-2"
      onClick={onClickHandler}
    >
      {!showPassword ? "show" : "hide"}
    </p>
  );
};

export default ShowPassword;
