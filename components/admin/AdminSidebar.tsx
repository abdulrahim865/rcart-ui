import Image from "next/image";
import Link from "next/link";
import { BiNews } from "react-icons/bi";

export default function AdminLeftTabsHeader() {
  return (
    <div className=" flex flex-col fixed left-0 top-0 h-screen bottom-0 bg-slate-100 dark:bg-gray-900">
      <Link
        href="/"
        className=" flex p-5 rounded-md anim-hover hover:bg-slate-300 "
      >
        <Image
          src="/logo/newsone-logo.png"
          alt="NewsOne Logo"
          width={26}
          height={26}
        />
      </Link>
      <Link
        className=" flex p-5 rounded-md anim-hover hover:bg-slate-300  "
        href="/admin/posts"
      >
        <BiNews size={26} />
      </Link>
    </div>
  );
}
