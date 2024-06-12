import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <Link href="/users">
        <button className="bg-military-green text-white px-4 py-2 rounded mb-4">
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
