import CustomButton from "@/app/components/Button";
import testImage from "@/public/images/messi.jpg"
import Image from "next/image";

export default function AboutPage() {
    return (
        <div>
            <h1>Mission</h1>
            <p>This is the Misson page</p>
            <Image placeholder="blur" src={testImage} alt="Messi" width={1280} height={720}/>
            <CustomButton/>
        </div>
    );
}