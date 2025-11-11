import Link from "next/link";

//? aikane teke all code run hove , i mean soro th aikanai hove
export default function Home() {
  return (
    <div>
      <p>Hi Quiz verse</p>
      <Link href="/about">
        <button
          className="px-5 py-2.5 bg-purple-700 text-white font-medium rounded-lg 
                   border border-purple-800 shadow-sm hover:bg-purple-800 
                   hover:shadow-md active:scale-95 transition-all duration-200"
        >
          Go to About
        </button>
      </Link>
    </div>
  );
}
