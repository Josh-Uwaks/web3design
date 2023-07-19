"use client"

import './globals.css'
import BoxModel from './components/boxmodel'
import Fire from '../public/assets/fire.png'
import Road from '../public/assets/road.png'
import unbalanced from '../public/assets/unbalanced.png'
import users from '../public/assets/users.png'
import first from '../public/assets/first.png'
import second from '../public/assets/second.png'
import third from '../public/assets/third.png'
import fourth from '../public/assets/fourth.png'
import RippleBox from './components/ripplebox'
import Screen from './components/screen'
import DownloadSteps from './components/download'
import ChevronDown from '../public/assets/arrowdown.png'
import Image from 'next/image'
import ContentHandler from '@/utils/contenthandler'
import ColorVariation from './components/colorvariation'

const BoxDetails = [
  {
    id: 1,
    amount: first,
    unit: 'Kcal',
    title: 'Calories burned',
    icon: Fire,
  },

  {
    id: 2,
    amount: second,
    unit: 'Meter(M)',
    title: 'Distance covered',
    icon: Road
  },

  {
    id: 3,
    amount: third,
    unit: 'Kilogram(KG)',
    title: 'Given kilogram',
    icon: unbalanced
  },

  {
    id: 4,
    amount: fourth,
    unit: 'Users',
    title: 'Total users',
    icon: users
  }
]

const CardDetails = {
    title: 'Download BetterStep',
    description: 'Start earning money by walking! Download our app now and convert your steps into earnings with our blockchain and cryptocurrency-based experience.'
}

const ACCORDION_DATA = [
  {
    id: 1,
    title: 'How can I earn money by walking?',
    description: 'paragraph description first'
  },
  {
    id: 2,
    title: 'How can I sell my shoes?',
    description: 'paragraph description second'
  },
  {
    id: 3,
    title: 'What can I do if my shoes get worn out?',
    description: 'patagraph description third'
  },
  {
    id: 4,
    title: 'How are the rarity levels of shoes determined?',
    description: 'paragraph description fourth'
  }
]

const team = [
  {
    id: 1,
    name: 'Isabella Wilson',
    position: 'Owner'
  },
  {
    id: 2,
    name: 'Peter Parker',
    position: 'UI & UX'
  },
  {
    id: 3,
    name: 'Avery Anderson',
    position: 'Developer'
  }
]

export default function Home() {

  const {clicked, toggle} = ContentHandler(false)

  return (
    <div className='mt-40'>
      
      <section className='flex flex-col items-center'>
        <div className='gradient' />
        <Screen/>
      </section>

      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-2 gap-16 mt-24'>
          {BoxDetails.map((box) => {
            return <BoxModel key={box.id} {...box}/>
          })}
      </div>
      </div>

      <section className='flex flex-col items-center'>
      <div className='gradient2'/>
      <RippleBox/>
    </section>

    {/* <section>
      <DownloadSteps data={CardDetails}/>
    </section> */}
    <section>
      <div className='gradient4'/>
      <ColorVariation/>
    </section>

    <section className='px-6 py-12 flex flex-col gap-20 items-center'>
      <div className='gradient3'/>
      <div>
        <h1 className='text-[40px] font-bold text-center mb-10'>Our team</h1>

        <div className='text-center flex gap-5'>
          {team.map((item) => (
            <div className='flex flex-col'>
              <div className='h-[300px] w-[300px] rounded-[20px] bg-[#1C1718] backdrop-blur-sm'>
              </div>
              <div className='my-6'>
                <h1 className='text-2xl font-bold mb-2'>{item.name}</h1>
                <span className='text-[#857E7F]'>{item.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className='text-[40px] font-bold text-center my-6'>FAQ</h1>
        <div className='w-[640px] mx-auto flex flex-col gap-5'>
        {ACCORDION_DATA.map((item, index) => (
          <>
            <div className="py-5 px-10 flex justify-between items-center bg-[#1C1718] backdrop-blur-md rounded-[15px]" onClick={() => toggle(index)}>
              <h1 className="font-bold text-lg">{item.title}</h1>
              <Image
                src={ChevronDown}
                width={30}
                height={30}
                alt="" 
                className={`${clicked === index && 'transform rotate-180 transition-all'}`}
            />
            </div>
            {clicked === index ? <div>{item.description}</div> : null}
          </>
        ))}
        </div>
      </div>
    </section>
    </div>
  )
}
