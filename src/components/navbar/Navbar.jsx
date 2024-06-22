
import Links from './links/Links'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='h-[100px] flex items-center justify-between pt-16'>
        <div className='bg-white relative w-56 h-24 right-8 rounded-lg ml-8'>
            <Image src="/mytutor.png" fill/>
        </div>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar;