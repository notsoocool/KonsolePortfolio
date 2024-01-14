import CustomCursor from "../components/cursor";
import Mainez from "./Mainez";
import WebLoader from "./WebLoader";

export default function Home(){
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <div className="hidden md:block">
            <WebLoader/>
        </div>
        <CustomCursor/>
        <Mainez/>
        </>
    )
}