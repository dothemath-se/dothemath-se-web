import Head from "next/head";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div className="container">
      <Head>
        <title>dothemath.se</title>
      </Head>
      <main>
        {/* <MenuWithNav /> */}
        <MenuWithNavbar />
        <Alert variant="danger">Få hjälp med skolan av volontärer!</Alert>
        Se videon nedan för instruktioner på hur du går med
        <video
          src="https://dothemath.se/wp-content/uploads/2020/03/film.mp4"
          autoPlay={false}
          controlsList="nodownload"
          style={{ width: "100%" }}
        />
        Klicka här för att gå med <br />
        <Button variant="success">
          <FontAwesomeIcon icon={["fab", "slack"]} />
          Gå med i Slack
        </Button>{" "}
        <br />
        <br />
        <Alert variant="danger">Är det fortfarande lite oklart?</Alert>
        Ingen fara, tryck på knappen nedan för att se en guide för hur du kan gå
        med. <br />
        <Button variant="danger">
          <FontAwesomeIcon icon="book" />
          Ladda ned guide
        </Button>
        <br />
        <br />
        <Förhållningsregler />
      </main>
    </div>
  );
};

const FörhållningsreglerItems = [
  "Vi vill påminna om att enligt appen Slacks användarvillkor är appen inte avsedd för och bör inte användas av någon under 16 år. Det är därför ett krav att du är minst 16 år om du väljer att använda dig av vår hjälpkanaler. Om vårdnadshavare till elever under 16 år vill ställa frågor i våra kanaler är detta OK.",
  "Be om hjälp i den kanal/channel som passar den fråga du vill ställa. I samband med att du laddar upp frågan, visa eller beskriv hur du hittills försökt lösa uppgiften så blir det lättare för hjälparen att anpassa sin förklaring efter vad just du behöver lära dig.",
  "Det är viktigt att hjälpen sker i uppgifts-tråden. På så sätt undviker vi att kanalen blir rörig och svårläst.",
  "Radera inte tråden när du fått den hjälp du behöver – din fråga kan hjälpa andra elever som har svårt för liknande uppgifter.",
  "Hjälpen hålls i de allmänna kanalerna i en tråd och inte via privata meddelanden. Om någon kontaktar dig i ett privat meddelande, hör av dig till någon av gruppens admins eller moderatorer.",
  "Syftet med gruppen är att endast få hjälp med skoluppgifter. Om en hjälpare eller annan elev använder gruppen för andra syften eller beter sig på ett olämpligt sätt så leder det till avstängning. Kontakta isåfall genast gruppens admins eller moderatorer.",
  "Det är inte tillåtet att ställa frågor kring uppgifter där du som elev inte är tillåten att använda yttre hjälp. Det är inte heller tillåtet att fuska. Sekretessbelagda prov, uppgifter eller lösningar får inte heller delas.",
];

const Förhållningsregler = () => (
  <ListGroup style={{ fontSize: "10px" }}>
    {FörhållningsreglerItems.map((text) => (
      <ListGroup.Item>
        <FontAwesomeIcon icon="check" listItem size="3x" />
        {text}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

//@ts-ignore
const MenuWithNav = () => (
  <Nav
    className="justify-content-center"
    fill
    variant="pills"
    activeKey="link-1"
  >
    <Nav.Item>
      <Nav.Link href="/">Hem</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Elever</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Hjälpare</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Vårdnadshavare</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">FAQ</Nav.Link>
    </Nav.Item>
  </Nav>
);

const MenuWithNavbar = () => (
  <Navbar bg="light" expand="sm">
    <Navbar.Brand href="#home">
      <Image src="Do-The-Math-ny.png" roundedCircle fluid />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link>Hem</Nav.Link>
        <Nav.Link>Elever</Nav.Link>
        <Nav.Link>Hjälpare</Nav.Link>
        <Nav.Link>Vårdnadshavare</Nav.Link>
        <Nav.Link>FAQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
