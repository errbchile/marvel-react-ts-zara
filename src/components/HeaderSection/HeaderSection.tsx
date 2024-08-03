import logo from "../../assets/logo.svg";
import heart from "../../assets/heart.svg";

export default function Header() {
  return (
    <header className="h-20 w-full bg-black px-4 md:px-12 flex justify-between items-center">
      <img src={logo} alt="Logo marvel" width="130" height="52" />

      <div className="flex justify-center items-center">
        <img src={heart} alt="Icon heart" width="24" height="22" />
        <span className="ml-2">3</span>
      </div>
    </header>
  );
}
