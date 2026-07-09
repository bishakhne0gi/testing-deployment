export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-4 px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          Product1
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A basic Next.js application. Edit{" "}
          <code className="rounded bg-black/[.05] px-1.5 py-0.5 font-mono text-sm dark:bg-white/[.06]">
            src/app/page.tsx
          </code>{" "}
          to get started.
        </p>
      </main>
    </div>
  );
}
