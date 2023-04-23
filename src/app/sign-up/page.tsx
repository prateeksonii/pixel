import Image from "next/image";
import SignupForm from "./SignupForm";

export default function Page() {
  return (
    <main className="mx-auto container h-page grid grid-cols-2 gap-8">
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-4xl">Let&apos;s get started</h1>
        <SignupForm />
      </div>
      <div className="relative h-full w-full">
        <Image src='/hero.png' alt='Controller' fill className="object-contain" />
      </div>
    </main>
  );
}
