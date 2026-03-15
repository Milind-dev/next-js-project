import Image, { StaticImageData } from "next/image";

type ResourceCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

export default function ResourceCard({
  image,
  title,
  description,
}: ResourceCardProps) {
  return (
    <div
      className="py-4 px-4 border border-gray-700 rounded-xl 
bg-[#063c39] 
flex flex-col items-center text-center 
hover:border-[#40dedf] 
hover:shadow-[0_0_15px_#40dedf40] 
transition-all duration-300"
    >
      <Image src={image} alt={title} width={200} height={100} />

      <p className="font-semibold py-2 text-white">{title}</p>

      <p className="py-2 text-sm text-gray-400">{description}</p>

      <button className="mt-3 px-4 py-2 shadow rounded-md bg-[#40dedf] text-black hover:bg-[#2ac6c7] transition">
        View Post <span>→</span>
      </button>
    </div>
  );
}

/* import Image, { StaticImageData } from "next/image";

type ResourceCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

export default function ResourceCard({
  image,
  title,
  description,
}: ResourceCardProps) {
  return (
    <div className="p-6 border rounded-lg text-center grid place-items-center gap-3 hover:shadow-xl transition">
      
      <Image src={image} alt={title} width={200} height={100} />

      <p className="font-semibold">{title}</p>

      <p className="text-sm text-gray-200 max-w-xs">
        {description}
      </p>

      <button className="mt-2 px-4 py-2 shadow rounded-md bg-[#40dedf] text-black hover:bg-[#2ac6c7] transition">
        View Post →
      </button>

    </div>
  );
} */
