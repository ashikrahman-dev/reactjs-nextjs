import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <div className='container mx-auto px-[10px] sm:px-0'>
          <div className='grid grid-cols-2 items-center justify-center py-3'>
            
            <Link to={'/'} className=' text-4xl text-orange-700 font-semibold'>Logo</Link>
            
            <div className='flex gap-3 align-middle justify-end'>
              <Link to={'/login'} className=' bg-orange-600 text-amber-50 py-2 text-sm font-semibold uppercase px-6 rounded hover:bg-orange-700'>Login</Link>
              <Link to={'/otp'} className=' bg-orange-600 text-amber-50 py-2 text-sm font-semibold uppercase px-6 rounded hover:bg-orange-700'>OTP</Link>
            </div>
          </div>
        </div>
    </nav>
  )
}
