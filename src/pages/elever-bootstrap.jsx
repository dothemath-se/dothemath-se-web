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

        <Link href="/">Hem</Link>
        <Link href="/elever-bootstrap"><a>Elever Bootstrap</a></Link>
        <Link href="/elever-material"><a>Elever Material</a></Link>

      </main>
    </div>
  )
}
