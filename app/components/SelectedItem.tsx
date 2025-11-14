"use client";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { TMenuItem } from "../types";
import { useMenuStore } from "../store";
import Button from "./shared/Button";

type Props = {
  data: TMenuItem;
};

const SelectedItem = ({ data }: Props) => {
  const { updateCount, incrementCount, decrementCount } = useMenuStore();

  return (
    <div className="flex flex-col bg-gray-50 rounded-xl p-4 gap-y-2 shadow-md">
      <div className="flex justify-between h-10 items-center">
        <div className="flex border border-gray-200 rounded-md items-center h-10 gap-x-1 shadow-sm">
          <Button onClick={() => decrementCount(data.idx)}>
            <FaMinus />
          </Button>
          <span className="w-14 text-center border-x-2 border-gray-200">
            {data.count}
          </span>
          <Button onClick={() => incrementCount(data.idx)}>
            <FaPlus />
          </Button>
        </div>
        <button
          className="w-16 bg-gray-100 rounded-sm p-2"
          onClick={() => updateCount(data.idx, Number(0))}
        >
          삭제
        </button>
      </div>
      <div className="flex justify-between h-10 items-center">
        <strong>{data.name}</strong>{" "}
        <span className="text-gray-600">
          {`${data.price.toLocaleString()} X ${data.count} = `}
          <span className="text-black">
            {(data.count * data.price).toLocaleString()}
          </span>
        </span>
      </div>
    </div>
  );
};
export default SelectedItem;
