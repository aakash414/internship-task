import {ButtonGreen, ButtonBlack, ButtonGreenBorder, ButtonOval, ButtonOvalGreen} from "@/components/Buttons/Buttons";
import { CardLarge, CardSmall } from "@/components/Card/Card";
import bellIcon from "../../public/images/bell-icon.svg";
import bellIconGreen from "../../public/images/bell-icon-green.svg";

export default function Home() {
    return (
        <div className="flex flex-col gap-12 p-10" >
            <div className="flex flex-row gap-10">
                <div className="flex  flex-col items-center gap-6">
                    <ButtonGreen/>
                    <ButtonBlack/>
                    <ButtonGreenBorder/>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <ButtonOval />
                    <ButtonOvalGreen/>
                </div>

            </div>
            <div className="flex flex-col gap-10">
                <CardLarge details="Some Description about the Event" bellIcon={bellIcon}/>
                <CardLarge details="Some Description about the Event" bellIcon={bellIconGreen}/>
                <CardSmall bellIcon={bellIcon}/>
            </div>
        </div>
    );
}
