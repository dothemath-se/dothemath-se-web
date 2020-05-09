import Head from "next/head";
import Link from "next/link";

export default function () {
  return (
    <div className="container">
      <Head>
        <title>dothemath.se</title>
      </Head>

      <main>
        <h1 className="title">dothemath.se</h1>
        <ul>
          <li>
            <Link href="/elever-bootstrap">
              <a>Elever-sidan i React-Bootstrap</a>
            </Link>
          </li>
          <li>
            <Link href="/elever-material">
              <a>Elever-sidan i Material-UI</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
