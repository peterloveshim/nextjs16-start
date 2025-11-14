"use client";

import { useMenuStore } from "../store";
import { TMenuItem } from "../types";

type Props = {
  data: TMenuItem;
};

const MenuItem = ({ data }: Props) => {
  const { menus, incrementCount } = useMenuStore();

  return (
    <div
      className="col-span-1 row-span-1 bg-white rounded-2xl flex flex-col items-center justify-center border-3 border-red-300 active:border-red-500 shadow-md hover:shadow-lg active:shadow-xl transition-all duration-100 p-4"
      onClick={() => incrementCount(data.idx)}
    >
      <div className="size-full bg-white rounded-2xl flex flex-col items-center justify-center border-3 border-red-300 active:border-red-500 shadow-md hover:shadow-lg active:shadow-xl transition-all duration-100">
        <span className="font-bold text-3xl text-red-400 mb-2">
          {data.name}
        </span>
        <span className="font-bold text-2xl text-red-400">
          {`${data.price.toLocaleString()} 원`}
        </span>
      </div>
    </div>
  );
};
export default MenuItem;
