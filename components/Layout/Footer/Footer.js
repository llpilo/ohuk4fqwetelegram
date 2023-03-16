import { useState } from 'react';
import Image from 'next/image';
import LogoHeader2 from '../../../public/assets/logo-verde.svg';

export default function Footer() {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };
  const links = [
    { label: 'Promociones' },
    { label: 'Nuestra Empresa' },
    { label: 'Trabaja con nosotros' },
  ];

  return (
    <>
      <footer className="font-display p-5 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <Image
                className="lg:ml-0 mx-auto my-2"
                src={LogoHeader2}
                alt="Logo"
                width="172"
                height="27"
              />
              <p className="text-gray-400 text-center md:text-justify ">
                Mundo de soluciones
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="font-bold text-lg mb-2" onClick={toggleQuickLinks}>
                Sobre Servientrega
              </h2>
              {isQuickLinksOpen && (
                <ul>
                  {links.map((link, index) => (
                    <li key={index} className="hover:text-green-600">
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center font-display text-sm">
        © Servientrega, 2021.{' '}
      </div>
    </>
  );
}
