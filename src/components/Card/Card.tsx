/* eslint-disable indent */
import Image from "next/image";
import CardImage from "../../../public/images/rectangle-2.png";
import DateIcon from "../../../public/images/date-icon.svg";


interface CardLargeProps {
    details: string;
    bellIcon : string;
}

interface CardSmallProps {
    bellIcon: string;
}


const CardLarge: React.FC<CardLargeProps> = ({details, bellIcon}) => {
    return <div className="flex w-2/3 flex-row rounded-md border border-gray-800 bg-gray-28 gap-4 p-4">
                
                        <div className="">
                            <Image src={CardImage} alt="Date-icon"></Image>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-2xl font-light">Robosoccer lorem ipsum</h4>
                            <p>{details}</p>
                                <div className="flex flex-row gap-2">
                                    <Image src={DateIcon} alt="Date-icon"></Image>
                                    <p>Date</p>
                                </div>
                        </div>
                        <div className="flex items-center ml-auto p-4">
                            <Image src={bellIcon} alt="bell-icon" ></Image>
                        </div>
                
            </div>;
};

const CardSmall: React.FC<CardSmallProps> = ({bellIcon}) => {
    return <div className="flex w-2/3 flex-row rounded-md border border-gray-800 bg-gray-28 gap-4 p-4">
    
            <div className="">
                <Image src={CardImage} width={60} height={60} alt="Date-icon"></Image>
            </div>
            <div className="flex flex-col">
                <h4 className="text-2xl font-light">Robosoccer lorem ipsum</h4>
                    <div className="flex flex-row gap-2">
                        <Image src={DateIcon} alt="Date-icon"></Image>
                        <p>Date</p>
                    </div>
            </div>
            <div className="flex items-center ml-auto p-4">
                <Image src={bellIcon} alt="bell-icon" ></Image>
            </div>
    
</div>;
};

export {
    CardLarge,
    CardSmall,
};
