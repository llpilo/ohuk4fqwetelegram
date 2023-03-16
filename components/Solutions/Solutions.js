import cartaIcon from '../../public/assets/cartita.svg';
import camionIcon from '../../public/assets/camion.svg';
import avionIcon from '../../public/assets/camiavion.svg';
import ecoIcon from '../../public/assets/ecoIcon.svg';
import Image from 'next/image';

const pasos = [
  {
    id: cartaIcon,
    title: 'Soluciones digitales',
    excerpt:
      'Entregas electrónicas, SMS, email masivo y más para publicidad, legales y otros.',
  },
  {
    id: camionIcon,
    title: 'Soluciones de Transporte y Entrega',
    excerpt: 'Recogemos en tu puerta y entregamos en el tiempo que requieras.',
  },
  {
    id: avionIcon,
    title: 'Soluciones de Logística',
    excerpt: 'Optimizamos tu logística para campañas y tu almacenamiento.',
  },

  /* {
    id: ecoIcon,
    title: 'Soluciones para eCommerce',
    excerpt:
      'Pago contra entrega, devoluciones, almacenamiento y todo lo que necesitas para tu tienda virtual.',
  }, */

  ,
];

export default function Solutions() {
  return (
    <div className="xl:mt-14 mt-5 mb-10 py-8 bg-white-500 overflow-hidden">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div className="space-y-4">
          <span className="w-max mx-auto px-6 text-black-600 mb-10">
            <h1 className="text-center text-gray-700 text-1xl font-bold font-display md:text-4xl">
              Conoce nuestras soluciones
            </h1>
          </span>
          <span></span>
        </div>
        <div className="mt-16 p-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {pasos.map(({ id, title, excerpt }) => (
            <div className="relative group ">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-white shadow-md transition duration-300 group-hover:scale-105 lg:group-hover:scale-105"
              />
              <div className="relative space-y-8 p-5 md:p-8 lg:p-8 xl:p-6">
                <Image className="h-50 w-50" src={id} alt="" />

                <div className="border-l-2 border-green-600 pl-2 space-y-4">
                  <h1 className="text-2xl font-display text-black font-medium transition">
                    {title}
                  </h1>
                </div>
                <p className="text-black font-display text-lg md:text-xl">
                  {excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
