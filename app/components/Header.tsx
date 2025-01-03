import Link from "next/link"

const Header = () => {
  return (
    <div className='bg-white border-4 border-block py-7'>
      <div className='text-black text-2xl'> Tech<span className='text-purple-700'>sdh</span></div>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-6'>
           <Link href={"/"}><li>Home</li></Link> 
           <Link href={"./About"}><li>About</li></Link>
           <Link href={"./Contact"}> <li>Contact</li></Link>
           <Link href={"/Services"}> <li>Service</li></Link>
            
           
            
        </ul>
      </div>
    </div>
  )
}

export default Header
