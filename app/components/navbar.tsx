import Image from 'next/image'



export default function Navbar(){
    return(
        <nav className="mt-10 py-4 px-5 backdrop-blur-2xl dark:bg-zinc-800/30 rounded-full flex justify-between items-center">
            <Image
            src="/assets/Logo.png"
            className='ml-6'
            alt='Logo'
            width={30}
            height={30}
            priority
            />

            <ul className='flex gap-12'>
                <li>Home</li>
                <li>Feature</li>
                <li>Career</li>
            </ul>

            <button className="bg-[#AFAFAF] text-[#000000] py-2 px-6 rounded-full font-bold">Launch App</button>
        </nav>
    )
}