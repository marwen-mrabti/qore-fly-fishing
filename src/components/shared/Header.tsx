import { Logo } from "@/assets";
import Navbar from "@/components/shared/Navbar";


export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Central Texas Fly Fishing Logo" className="logo" />
        <span className="logo-text">Central Texas Fly Fishing</span>
      </div>
      <Navbar />
    </header>
  );
}
