import Image from 'next/image';
import Banner from '../../public/assets/banner-40.svg';

import TelegramForm from '../Form/TelegramForm';

const Hero = () => {
  return (
    <>
      <div className="relative bg-gray-200 ">
        <div className="relative py-7 flex flex-col mx-auto justify-between">
          <div className="p-5 flex flex-col md:justify-center font-display h-fit max-w-3xl z-10 mb-60 md:mb-10">
            <div className="border-l-2 p-4 mb-5 border-pink-600">
              <h1 className="text-2xl font-bold ">Mundo de Soluciones</h1>
              <p>
                Transporte, entrega y logistica fisica o digital para ti o tu
                empresa a tiempo.
              </p>
            </div>
            <TelegramForm />
          </div>

          <div className="absolute bottom-0 right-0 ">
            <Image src={Banner} alt="Hero Image" width={500} quality={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
