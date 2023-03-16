import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Solutions from '../components/Solutions/Solutions';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mundo de Soluciones - Servientrega</title>
      </Head>
      <Layout>
        <Hero />

        <Solutions />
      </Layout>
    </div>
  );
}
