"use client";

import Card from "./shared/Card";
import SelectedItem from "./SelectedItem";
import MenuItem from "./MenuItem";
import { GrPowerReset } from "react-icons/gr";
import { useMenuStore } from "../store";

const Calculator = () => {
  const { menus, total, resetMenu } = useMenuStore();

  return (
    <div className="grid grid-cols-6 gap-4 size-full max-w-[1400px] max-h-[1000px] items-center text-center text-black sm:items-start sm:text-left">
      <Card className="col-span-4 h-full p-4 flex flex-col">
        <span className="pt-2 mb-4 text-xl font-bold">메뉴</span>
        <div className="grid grid-cols-3 grid-rows-3 h-full gap-4">
          {menus.map((el) => {
            return <MenuItem key={el.idx} data={el} />;
          })}
        </div>
      </Card>
      <Card className="col-span-2 h-full p-4 overflow-y-auto flex flex-col justify-between relative">
        <span className="pt-2 mb-4 text-xl font-bold">주문</span>
        <div className="flex flex-col gap-y-2 h-[calc(100%-64px)] overflow-y-auto pb-8">
          {menus
            .filter((el) => el.count > 0)
            .map((item) => {
              return <SelectedItem key={item.idx} data={item} />;
            })}
        </div>
        <div className="sticky bottom-1 flex gap-x-2">
          <div className="flex justify-center items-center text-2xl font-bold bg-red-500 h-16 rounded-xl p-2 w-full text-white">
            <span>{`${total.toLocaleString()} 원 결제`}</span>
          </div>
          <div
            className="flex justify-center items-center text-2xl font-bold bg-white h-16 rounded-xl p-2 aspect-square border-2 border-gray-300"
            onClick={resetMenu}
          >
            <GrPowerReset />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
