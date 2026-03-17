import React from 'react'
import Logo from '../../assets/website/coffee_logo.png'
import { FaCoffee } from 'react-icons/fa'

const Menus = [
  { id: 1, name: 'Home', link: "/#" },
  { id: 2, name: 'Services', link: "/#services" },
  { id: 3, name: 'About', link: "/#banner" },
{ id: 4, name: 'Gallery', link: "/#gallery" },
]

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
      <div className="container py-2">
        
        <div className="flex justify-between items-center">
          
          {/* ✅ Logo */}
          <a
            href="#"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive"
          >
            <img src={Logo} alt="Logo" className='w-12 sm:w-14' />
            Coffee Cafe
          </a>

          {/* ✅ Right Section */}
          <div className="flex items-center gap-4">
            
            {/* Menu Links (hidden on mobile) */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block text-lg py-2 px-3 text-white/70 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* ✅ Order Button (always visible) */}
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2">
              Order
              <FaCoffee className="text-lg" />
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar