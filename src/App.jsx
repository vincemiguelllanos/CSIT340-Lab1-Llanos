
export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Vince Miguel A. LLanos</h1>
        <p className="mt-2 text-lg text-slate-600">
          Third year BSIT student at Cebu Institute of Technology – University.
        </p>
        <hr className="mt-8 border-slate-200" />
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            grew up in Sibonga, Cebu and moved to Cebu City for college. I picked IT because I
            wanted to build things people actually open, and I have been slowly figuring out
            what part of that I enjoy most. So far it is the part where something finally runs.
          </p>
        </section>

        {/* Details Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Sibonga, Cebu
          </p>
        </section>

        {/* Things I Like Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Playing tennis and pickleball on weekends</li>
            <li>Coaching new pickleball players</li>
            <li>coffee is my best therapyy</li>
          </ul>
        </section>

        {/* Reach Me Section */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            vincemiguel.llanos@cit.edu
            <br />
            @vincemiguelllanos on most things
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </div>
  );
}