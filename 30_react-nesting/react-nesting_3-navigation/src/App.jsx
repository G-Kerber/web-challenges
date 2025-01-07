import "./styles.css";
import Header from "./components/header.jsx";
import Navigation from "./components/navigation.jsx";
import Link from "./components/link.jsx";
import Logo from "./components/logo.jsx";
import Avatar from "./components/avatar.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
