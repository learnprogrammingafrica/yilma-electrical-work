import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";

export default function EthioEarthquakeNotifierLogo() {
  return (
    <Link
      className={`${lusitana.className} flex flex-row items-center gap-2 leading-none`}
      href="/"
    >
      <ShieldExclamationIcon className="h-12 w-12 text-red-600" />
      <p className="text-[34px] font-semibold">
        <span className="text-white">Ethio Earthquake Notifier</span>{" "}
      </p>
    </Link>
  );
}
