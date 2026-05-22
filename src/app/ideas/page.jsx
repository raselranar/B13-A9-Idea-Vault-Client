import IdeasPage from "./IdeasPage";

const fetchIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
  return await res.json();
};
// metadata for ideas page
export const metadata = {
  title: "All Ideas - Explore Innovative Startup Concepts",
  description:
    "Discover a wide range of innovative startup ideas across various industries. Browse through our collection of creative concepts and find inspiration for your next venture.",
};

const page = async () => {
  const allIdeas = await fetchIdeas();

  return <IdeasPage allIdeas={allIdeas} />;
};
export default page;
