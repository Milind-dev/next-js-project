import Image, { StaticImageData } from "next/image";

type Tab = {
  id: number;
  name: string;
  content: string[];
};
type Props = {
  tabscoin: Tab[];
  // foxtradeicons: any;
  foxtradeicons: StaticImageData | string;

  handleEnter: (index: number) => void;
  handleLeave: () => void;
  isopen: number | null;
};

export default function VisionPage({
  tabscoin,
  foxtradeicons,
  handleEnter,
  handleLeave,
  isopen,
}: Props) {
  return (
    <>
      <div className="flex items-center w-[15%]">
        <Image
          src={foxtradeicons}
          alt="FoxTrades Logo"
          width={60}
          height={60}
        />
        <h1 className="ml-2 text-white">Fox Trade</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mr-12">
        {tabscoin.map((item, index) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={handleLeave}
          >
            <button className="font-bold shadow-lg hover:shadow-xl transition border px-4 py-2 rounded">
              {item.name}
            </button>

            {isopen === index && (
              <div className="absolute left-0 top-full bg-black text-white shadow-xl rounded p-3 w-40">
                {item.content.map((coin, i) => (
                  <p
                    key={i}
                    className="py-1 px-2 hover:bg-[#064f4f] rounded cursor-pointer"
                  >
                    {coin}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <button className="border border-white rounded-4xl px-2 py-2">
          Contact
        </button>
      </div>
    </>
  );
}
