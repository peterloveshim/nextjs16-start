"use client";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = "", children }: Props) => {
  return (
    <div className={`bg-[#FCF3E7] rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
