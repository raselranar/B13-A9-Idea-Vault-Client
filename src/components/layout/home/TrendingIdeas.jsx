import IdeaCard from "@/components/IdeaCard";

// fetch trending ideas from server
const fetchTrendingIdeas = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`,
  );
  return await res.json();
};

const TrendingIdeas = async () => {
  const trendingIdeas = await fetchTrendingIdeas();

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-5xl text-center">Trending Ideas</h1>
      <p className="text-gray-500 text-xl mt-2 text-center">
        Explore the most popular and trending startup ideas in our community
      </p>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 mt-8">
        {trendingIdeas.map((idea) => (
          <IdeaCard key={idea._id} data={idea} />
        ))}
      </div>
    </section>
  );
};
export default TrendingIdeas;
