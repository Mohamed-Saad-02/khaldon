import Container from "./ui/Container";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="max-md:shadow-land-price py-4">
      <Container className="flex items-center justify-between gap-x-3">
        <Logo />

        <Nav />
      </Container>
    </header>
  );
}

export default Header;
