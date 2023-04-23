import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto container">
      <main className="h-[calc(100vh-4rem)] grid grid-cols-2 gap-8">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-6xl tracking-tight font-bold leading-tight">
            The biggest marketplace for gaming.
          </h1>
          <Link href='/sign-up' className="mt-4 bg-orange-700 py-4 px-8 text-lg text-orange-50 rounded-xl w-max">
            Get Started
          </Link>
        </div>
        <div className="h-full w-full relative">
          <Image src="/hero.png" alt="A gaming controller with 2 people" fill className="object-contain" />
        </div>
      </main>
    </div>
  );
}
