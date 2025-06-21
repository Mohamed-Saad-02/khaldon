import Logo from "./Logo";
import Container from "./ui/Container";

function Footer() {
  return (
    <footer className="py-4 bg-[#374700] text-white">
      <Container className="flex items-center justify-between gap-3 flex-wrap max-sm:justify-center">
        <Logo white />
        <p className="text-sm">
          Copyright @ {new Date().getFullYear()}{" "}
          <span className="font-bold">Khaldonai</span>, All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
