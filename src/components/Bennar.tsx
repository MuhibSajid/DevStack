import HeaderImage from "../assets/banner-stack.png";

const Bennar = () => {
  return (
    <div className="container mx-auto px-6 pt-8 pb-16 lg:pt-12">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <section className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition hover:opacity-90">
              Explore Technologies
            </button>
            <button className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </section>

        <section className="w-full max-w-md lg:max-w-lg">
          <img
            src={HeaderImage}
            alt="Development stack illustration"
            className="w-full"
          />
        </section>
      </div>
    </div>
  );
};

export default Bennar;
