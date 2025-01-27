import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";

export default function EthioEarthquakeNotifierLogo() {
  return (
    <Link
      className={`${lusitana.className} flex flex-row items-center gap-2 leading-none`}
      href="/"
    >
      {/* Updated Icon */}
      <div className="flex items-center justify-center bg-yellow-500 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      {/* Updated Text */}
      <p className="text-[34px] font-semibold">
        <span className="text-yellow-500">Yilma</span>{" "}
        <span className="text-white">Electrical Installation</span>
      </p>
    </Link>
  );
}
