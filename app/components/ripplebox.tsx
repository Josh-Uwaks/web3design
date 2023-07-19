import Image from "next/image"
import '../globals.css'
import foot from '../../public/assets/foot.png'
import currency from '../../public/assets/currency.png'
import compass from '../../public/assets/compass.png'
import horizontal from '../../public/assets/horizontal.png'

export default function RippleBox(){
    return(
        <div className="flex flex-col items-center mt-36">
            <h1 className='text-[40px] font-bold'>Earn while working</h1>
            <div className="my-20 flex gap-6">
                <div className="flex flex-col items-center gap-10 px-3">
                    <div className="ripple">
                        <Image
                        src={foot}
                        alt='logo'
                        height={35}
                        width={35}
                        />
                    </div>
                    <h1>Take a step</h1>
                </div>
                
                <div className="my-12">  
                    <Image
                    src={horizontal}
                    width={100}
                    alt="logo"
                    />
                </div>
                
                <div className="flex flex-col items-center gap-10 px-3">
                    <div className="ripple">
                        <Image
                        src={currency}
                        alt='logo'
                        height={35}
                        width={35}
                        />
                    </div>
                    <h1>Earn</h1>
                </div>

                <div className="my-12">
                    <Image
                    src={horizontal}
                    width={100}
                    alt="logo"
                    />
                </div>

                <div className="flex flex-col items-center gap-10">
                    <div className="ripple">
                        <Image
                        src={compass}
                        alt='logo'
                        height={35}
                        width={35}
                        />
                    </div>
                    <h1>Complete the tasks</h1>
                </div>
            </div>
        </div>
    )
}