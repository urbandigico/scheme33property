import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container empty-page">
      <p className="eyebrow">404 · LET’S GET YOU HOME</p>
      <h1>This address isn’t here.</h1>
      <p>Explore our current projects or return to the homepage.</p>
      <Link href="/projects" className="button">
        Explore projects ↗
      </Link>
    </div>
  );
}
