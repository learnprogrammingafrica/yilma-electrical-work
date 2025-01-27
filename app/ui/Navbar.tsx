import Link from "next/link";
import AcmeLogo from "./acme-logo";

const Navbar = () => {
  return (
    <div className="flex h-10 shrink-0 items-end justify-between rounded-lg bg-blue-500 p-4 md:h-32">
      <AcmeLogo />
      <div className="flex items-center gap-5">
        <Link
          href="/login"
          className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
