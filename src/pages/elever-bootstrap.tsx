import Head from 'next/head';
import Link from 'next/link';

export default function() {
  return (
    <div className="container">
      <Head>
        <title>dothemath.se</title>
      </Head>

      <main>

        <h1 className="title">
          dothemath.se
        </h1>

        Få hjälp med skolan av Universitetsstudenter
        Tryck här för att gå med

        Är det fortfarande lite oklart?
        Ingen fara, tryck på knappen nedan för att se en guide för hur du kan gå med.

      </main>
    </div>
  )
}
