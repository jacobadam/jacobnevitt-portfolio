import Link from "next/link";

export default function SideNav() {
  return (
    <aside className="sticky top-0 h-screen">
      <header className="flex flex-col justify-center items-center max-w-3xl py-20">
        <h1 className="text-5xl font-bold mb-2">Jacob Nevitt</h1>
        <h2 className="text-2xl mb-2">Software Developer</h2>
        <h3>
          Bridging the gap between design and functionality one line of code at
          a time
        </h3>
      </header>

      <nav>
        <ul className="flex flex-col justify-center items-center max-w-3xl">
          <li>
            <Link href="#about" className="group relative pb-0.5">
              About
              <span className="absolute bg-current scale-x-0 group-hover:scale-x-100 bottom-0 left-0 w-full h-0.5 origin-left transition-transform duration-700"></span>
            </Link>
          </li>
          <li>
            <Link href="#tech-stack" className="group relative pb-0.5">
              Tech Stack
              <span className="absolute bg-current scale-x-0 group-hover:scale-x-100 bottom-0 left-0 w-full h-0.5 origin-left transition-transform duration-700"></span>
            </Link>
          </li>
          <li>
            <Link href="#experience" className="group relative pb-0.5">
              Experience
              <span className="absolute bg-current scale-x-0 group-hover:scale-x-100 bottom-0 left-0 w-full h-0.5 origin-left transition-transform duration-700"></span>
            </Link>
          </li>
          <li>
            <Link href="#projects" className="group relative pb-0.5">
              Projects
              <span className="absolute bg-current scale-x-0 group-hover:scale-x-100 bottom-0 left-0 w-full h-0.5 origin-left transition-transform duration-700"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
