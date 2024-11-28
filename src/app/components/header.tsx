import Image from "next/image";
import headerImg from "/public/headerimg1.jpg";

export default function Header() {
  return (
    <div className="relative w-full h-80">
      {/* Optimized Image with Next.js */}
      <Image
        src={headerImg}
        alt="Equine business header"
        layout="fill"
        objectFit="cover"
        quality={90} // Enhance quality
        priority // Preload the image for performance
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Left-Aligned Content */}
      <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-12 lg:px-16">
        <div className="invert brightness-0">
          <Image
            decoding="async"
            src="https://framerusercontent.com/images/ubOFczMYrFQjarYF0WCFiDP9to.svg"
            alt=""
            width={130}
            height={100}
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-medium mb-4 leading-tight mt-10">
          Supercharge your equine business{" "}
          <span className="block">all in one place with Bridle</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Manage horses & clients, streamline finances, automate bookings &
          events, and more.
        </p>
      </div>
    </div>
  );
}
