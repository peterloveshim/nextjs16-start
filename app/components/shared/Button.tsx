type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="w-14 h-full flex justify-center items-center hover:shadow-lg active:shadow-xl transition-all duration-100"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
