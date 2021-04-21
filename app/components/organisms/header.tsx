import Menu from "../molecules/menu";

export default function Header() {
  return (
    <header id="header" className="header">
      <style jsx>{`
        .header {
          background-color: #fff;
        }
      `}</style>
      <Menu />
    </header>
  );
}
