import Image, { StaticImageData } from "next/image"

type BoxProp = {
    id: number;
    amount: StaticImageData;
    unit: string;
    title: string;
    icon: StaticImageData;
}
export default function BoxModel({amount, unit, title, icon}: BoxProp){

    const Container = 'py-12 px-10 flex flex-col justify-between h-[220px] w-[350px] bg-white/20 rounded-[30px] relative'
    const Circle = 'absolute flex items-center justify-center top-0 right-0 -m-4 h-[70px] w-[70px] backdrop-blur-md bg-white/20 rounded-full border-[1px] border-white/40'
    return (
        <div className={Container}>
            <div className={Circle}>
                <Image 
                src={icon} 
                height={30}
                width={30}
                alt="box"
                />
            </div>

            <div>
                <Image
                src={amount}
                height={150}
                width={140}
                alt="box"
                />
                <h5 className="mt-3 font-bold text-[#A09B8F]">{unit}</h5>
            </div>
            <div>
                <h1 className="text-2xl text-white font-bold">{title}</h1>
            </div>
        </div>
    )
}