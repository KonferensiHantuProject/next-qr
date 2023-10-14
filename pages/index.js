import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='px-10 my-auto bg-white min-h-250 min-w-250 lg:min-w-750 lg:max-w-750 max-w-250 rounded-md justify-center align-middle items-center flex'>
      <div className='text-center'>
        <p className='font-extrabold text-4xl lg:text-5xl'>Welcome</p>
        <hr className='mt-2 mb-2 border-[0.3px] border-slate-300' />
        <p className='font-semibold mb-3 lg:text-2xl lg:mb-5'>Aplikasi ini merupakan sebuah generator QR dengan Next JS</p>
        <a className='' href="/input">
          <button className='bg-blue-400 p-2 lg:p-3 lg:text-xl rounded-lg text-white'>Start</button>
        </a>
      </div>
    </div>
  )
}
