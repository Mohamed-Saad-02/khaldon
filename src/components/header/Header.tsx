import Logo from "../Logo";
import Container from "../ui/Container";
import Nav from "./Nav";

function Header() {
  return (
    <header className="max-md:shadow-land-price relative bg-white py-4">
      <Container className="flex items-center justify-between gap-x-3">
        <Logo />

        <Nav />
      </Container>
    </header>
  );
}

export default Header;
