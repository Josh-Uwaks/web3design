import Image from "next/image"
import '../globals.css'

const tabletitle = [
    { id: 1, title: 'Rarity'},
    { id: 2, title: 'Color'},
    { id: 3, title: 'Name'},
    { id: 4, title: 'Supply'}
]

const tabledata = [
    {id: 1, color: 'Red'},
    {id: 2, color: 'Yellow'}
]
export default function ColorVariation(){
    return(
        <div className="flex flex-col items-center p-12">
            <h1 className="text-[40px] font-bold">Rarity Level</h1>
            <p className="text-[#707070] mt-3">More information about the rarity levels of NFTs</p>
            <Image
            src={`/assets/colorvariation.png`}
            alt='color variation'
            width={350}
            height={300}
            />

            <div className="mt-[80px] py-14 px-8 border-[#222224] border-[1px] rounded-[20px] bg-black/25 backdrop-blur">
                <table className="tablecontainer">
                    <tr>
                        {tabletitle.map((item) => (
                            <th key={item.id}>{item.title}</th>
                        ))}
                    </tr>
                    <tr>
                        <td>Red</td>
                        <td><Image src={`/assets/redellipse.png`} width={54} height={54} alt="red"/></td>
                        <td>Common</td>
                        <td>1800</td>
                    </tr>
                    <tr>
                        <td>Yellow</td>
                        <td><Image src={`/assets/yellowellipse.png`} width={54} height={54} alt="yellow"/></td>
                        <td>Uncommon</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Blue</td>
                        <td><Image src={`/assets/blueellipse.png`} width={54} height={54} alt="blue"/></td>
                        <td>Rare</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>Green</td>
                        <td><Image src={`/assets/greenellipse.png`} width={54} height={54} alt="green"/></td>
                        <td>Legendary</td>
                        <td>60</td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}