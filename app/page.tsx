import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import Navbar from "./ui/Navbar";
import HomePage from "./ui/HomePage";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar />
      <HomePage />
    </main>
  );
}
