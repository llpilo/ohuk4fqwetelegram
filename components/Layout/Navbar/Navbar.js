import React from 'react';
import Image from 'next/image';
import LogoHeader from '../../../public/assets/logo-blanco.svg';
import LogoHeader2 from '../../../public/assets/logo-verde.svg';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import XIcon from '@heroicons/react/outline/XIcon';
import MenuIcon from '@heroicons/react/outline/MenuIcon';

const links = [
  { name: 'Rastrear', to: '#', id: 1 },
  { name: 'Cotizar', to: '#', id: 2 },
  { name: 'Recoger', to: '#', id: 3 },
  { name: 'Soluciones', to: '#', id: 4 },
  { name: 'Nuestra Red', to: '#', id: 5 },
  { name: 'Nosotros', to: '#', id: 6 },

  { name: 'Contactanos', to: '#', id: 8 },

  { name: 'Servientrega LATAM', to: '#', id: 10 },
  { name: 'Ingresar', to: '#', id: 11 },
];

export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="flex justify-between w-full bg-green-600">
      <div className="p-4 text-xl cursor-pointer">
        <Image src={LogoHeader} alt="Logo" width="180" height="28" />
      </div>
      {/* The Navbar on large screens */}
      <div className="hidden pr-6 lg:inline-flex">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="py-5 px-6 text-sm text-white transform hover:underline hover:underline-offset-4 "
          >
            {name}
          </a>
        ))}
      </div>

      {/* The Side Bar Menu for screens smaller than 'Large' */}

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 1025,
            }}
            exit={{
              width: 0,
              transition: { duration: 0.15 },
            }}
            className="fixed left-0 bg-white h-screen lg:hidden z-40"
          >
            <motion.div className="flex flex-col my-4">
              <Image
                className="mx-8 my-2"
                src={LogoHeader2}
                alt="Logo"
                width="172"
                height="27"
              />
              <motion.ul className="my-2 border-t-2 border-green-600">
                {links.map(({ name, to, id }) => (
                  <motion.li className="border-b p-2">
                    <motion.a
                      key={id}
                      href={to}
                      className="mx-8 font-semibold font-display text-gray-600 transition duration-100 hover:text-green-600"
                    >
                      {name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* The Hamburger Menu and Close Icons */}
      <div className="flex justify-end lg:hidden z-40">
        <button className="px-2 m-5 cursor-pointer" onClick={cycleOpen}>
          <span className="sr-only">Open</span>
          {open ? (
            <XIcon
              className="fixed w-6 h-6 text-gray-500 right-7 top-6"
              aria-hidden="true"
            />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
}
