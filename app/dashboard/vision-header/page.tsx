import AnimatedButton from "@/app/components/ui/animated-button";
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
  tabscoin = [],
  foxtradeicons,
  handleEnter,
  handleLeave,
  isopen,
}: Props) {
  return (
    <>
      <div className="flex items-center w-[16%]">
        <Image
          src={foxtradeicons}
          alt="FoxTrades Logo"
          width={100}
          height={60}
          style={{
            filter: "invert(55%) sepia(95%) saturate(500%) hue-rotate(350deg)",
          }}
        />
        <h1 className="ml-2 text-white ">
          Fox_Trade <span className="font-bold ">&</span> Risk_Protect
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mr-12 ">
        {tabscoin?.map((item, index) => (
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
              <div className="absolute left-0 top-full   bg-gray-900 text-white shadow-xl rounded p-3 w-50">
                {item.content?.map((coin, i) => (
                  <p
                    key={i}
                    className="py-1 px-2 hover:bg-[#064f4f] rounded cursor-pointer"
                  >
                    {coin}
                    {/* #93aeae */}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <AnimatedButton text="Contact" />
      </div>
    </>
  );
}
