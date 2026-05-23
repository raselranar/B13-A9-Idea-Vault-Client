import ShowUserComments from "@/components/ShowUserComments";
import { auth } from "@/lib/auth";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

// metadata for my interactions page
export const metadata = {
  title: "My Interactions - Track Your Engagement with Ideas",
  description:
    "View and manage your interactions with ideas. See your comments, track the ideas you've engaged with, and stay connected with the community.",
};

// fetch commented ideas from server
const fetchCommentedIdeas = async (id) => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/commented-ideas/?id=${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return await res.json();
};

export default async function MyInteractions() {
  const session = await auth.api.getSession({ headers: await headers() });
  const interactions = await fetchCommentedIdeas(session?.user?.id);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl dark:text-white dark:text-slate-50 font-black text-gray-900 mb-4">
            My Interactions
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300">
            Track your comments and engagement with ideas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-black mb-2">
                  {interactions.length}
                </div>
                <div className="text-lg opacity-90">Total Comments</div>
              </div>
              <MessageCircle className="w-16 h-16 opacity-30" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-black mb-2">
                  {interactions.length}
                </div>
                <div className="text-lg opacity-90">Ideas Engaged</div>
              </div>
              <Calendar className="w-16 h-16 opacity-30" />
            </div>
          </div>
        </div>

        {/* Interactions List */}
        <div className="space-y-6">
          {interactions.map((interaction, i) => (
            <div
              key={interaction?._id || i}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 border-2 border-gray-100 dark:border-slate-700 hover:border-orange-500 transition-all">
              {/* Idea Info */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-4 py-1.5 bg-gradient text-white rounded-full text-sm font-bold">
                      {interaction?.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-slate-50 mb-1">
                    {interaction?.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-300">
                    by {interaction?.author}
                  </p>
                </div>
                <Link href={`/ideas/${interaction?._id}`}>
                  <button className="px-4 py-2 bg-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                    View Idea
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* Comment */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4 border-2 border-gray-100 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-1">
                      Your Comments:
                    </p>
                    <div className="text-gray-600 dark:text-slate-300 leading-relaxed">
                      <ShowUserComments comments={interaction?.comments} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {interactions.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 dark:bg-slate-800 rounded-full mb-6">
              <MessageCircle className="w-12 h-12 text-gray-400 dark:text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-2">
              No interactions yet
            </h3>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              Start engaging with ideas from the community
            </p>
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all">
              Explore Ideas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
