import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import MyIdeasManager from "@/components/MyIdeasManager";

// metadata for my ideas page
export const metadata = {
  title: "My Ideas - Manage Your Submitted Ideas",
  description:
    "View and manage your submitted ideas. Edit, delete, or track the performance of your ideas in one place.",
};

// app.get("/my-ideas", async (req, res) => {
//       const { authorEmail } = req.query;
//       const cursor = ideasCollection.find({ authorEmail });
//       const myIdeas = await cursor.toArray();
//       if (!myIdeas) return res.json({});
//       res.send(myIdeas);
//     });

// fetch my ideas from server
const fetchMyIdeas = async (name, token) => {
  console.log(name);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/?name=${name}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return await res.json();
};

export default async function MyIdeas() {
  const session = await auth.api.getSession({ headers: await headers() });
  const { token } = await auth.api.getToken({ headers: await headers() });
  const myIdeas = await fetchMyIdeas(session?.user?.name, token);
  console.log(myIdeas);
  return <MyIdeasManager initialIdeas={myIdeas} />;
}
