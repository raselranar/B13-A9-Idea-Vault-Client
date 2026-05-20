import IdeaCard from "@/components/IdeaCard";

const fetchIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
  return await res.json();
};

const IdeasPage = async () => {
  const allIdeas = await fetchIdeas();
  return (
    <section className="container mx-auto py-12 px-4 mt-2">
      <header>
        <h1 className="text-4xl text-center">All Ideas</h1>
        <p className="text-gray-500 text-xl text-center">
          Browse through thousands of innovative startup ideas
        </p>
      </header>

      {/* card container */}
      <section className="w-fit mx-auto">
        <div className="text-gray-500">
          Showing <span className="font-bold">{allIdeas.length}</span> ideas
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 mt-4">
          {allIdeas.map((idea) => (
            <IdeaCard key={idea._id} data={idea} />
          ))}
        </div>
      </section>
    </section>
  );
};
export default IdeasPage;
