import Posts from './components/Posts';

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome:
        <span className="whitespace-nowrap">
          I am <span className="font-bold">Gregosch</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
