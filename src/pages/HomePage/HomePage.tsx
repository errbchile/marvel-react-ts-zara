import loupe from "../../assets/loupe.svg";
import logo from "../../assets/logo.svg";
import heart from "../../assets/heart.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
      <header className="h-20 w-full bg-black px-4 md:px-12 flex justify-between items-center">
        <img src={logo} alt="Logo marvel" width="130" height="52" />

        <div className="flex justify-center items-center">
          <img src={heart} alt="Icon heart" width="24" height="22" />
          <span className="ml-2">3</span>
        </div>
      </header>
      {/* search section */}
      <section className="h-20 w-full bg-white px-4 md:px-12 flex justify-center flex-col">
        <div className="flex pb-1 w-full border-b border-black">
          <img src={loupe} alt="icon loupe" width="13" height="13" />
          <input
            type="text"
            placeholder="SEARCH A CHARACTER..."
            className="w-full ml-2 border border-transparent px-2 py-1 placeholder-[#AAAAAA] outline-none text-black text-sm"
          />
        </div>
        <p className="text-black text-xs mt-2">50 RESULTS</p>
      </section>

      <main className="flex flex-grow bg-white px-4 md:px-12 text-black pt-3">
        {/* character-list */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {/* card */}
          <div className=" bg-white flex flex-col max-h-[245px] max-w-[188px] aspect-w-3 aspect-h-4 overflow-hidden corner-cut">
            <div className="h-4/5 flex-grow bg-gray-300">
              <img
                src="https://picsum.photos/188/245"
                alt="character image"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-1/5 bg-black flex justify-between p-3 items-center  transition-colors duration-300 hover:bg-marvel-red">
              <span className="text-xs text-white">NAME</span>
              <img src={heart} alt="Icon heart" width="13" height="12" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
