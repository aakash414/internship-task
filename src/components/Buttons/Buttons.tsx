/* eslint-disable indent */
import PlusIcon from "../../../public/Icon.svg";
import Image from "next/image";

const ButtonGreen = () => {
    return <button className="flex flex-row items-center p-3 gap-3  w-32 h-12  rounded-md bg-green-600 text-black font-bold">
        <Image src={PlusIcon} alt="plus-icon"></Image>POST
        </button>;
};

const ButtonBlack = () => {
    return <button className="flex flex-row items-center p-3 gap-3  w-32 h-12  rounded-md bg-black text-green-600 font-bold">
        <Image src={PlusIcon} alt="plus-icon"></Image>POST
        </button>;
};

const ButtonGreenBorder = () => {
    return <button className="flex flex-row items-center p-3 gap-3  w-32 h-12 border-2 border-green-600 rounded-md bg-black text-green-600  font-bold">
        <Image src={PlusIcon} alt="plus-icon"></Image>POST
        </button>;
};

const ButtonOval = () => {
return  <button className="flex items-center rounded-full border-2 border-neutral-700 p-2 px-5 gap-2 bg-stone-900">Yesterday</button>;
};

const ButtonOvalGreen = () => {
    return  <button className="flex items-center rounded-full border-2 border-green-900 p-2 px-5 gap-2 bg-green-950	">Yesterday</button>;
    };
    
export   {ButtonGreen,
    ButtonBlack,
    ButtonGreenBorder,
    ButtonOval,
    ButtonOvalGreen,
};
