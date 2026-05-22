import IdeaComments from "@/components/IdeaComments";
import { Button, Form, TextArea } from "@heroui/react";
import {
  Calendar,
  User,
  Tag,
  DollarSign,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Edit,
  Trash2,
  Send,
} from "lucide-react";
import Image from "next/image";

const fetchIdea = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`);
  return await res.json();
};
// dynamic metadata for idea details page by params
export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const ideaData = await fetchIdea(id);
  return {
    title: `${ideaData?.title} - Idea Details`,
    description: ideaData?.shortDescription,
  };
};

export default async function IdeaDetails({ params }) {
  const { id } = await params;
  const ideaData = await fetchIdea(id);

  console.log("ideadata", ideaData);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-12">
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        {/* Badge */}
        <div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}>
          <span className="px-4 py-2 bg-gradient text-white rounded-full text-sm font-bold">
            {ideaData?.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl dark:text-white dark:text-slate-50 font-black text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          {ideaData?.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              {ideaData?.authorPhoto}
            </div>
            <span className="font-semibold">{ideaData?.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{ideaData?.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>{ideaData?.likes || 0} likes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>{ideaData?.commentsCount || 0} comments</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border-2 border-orange-100 dark:border-slate-700 overflow-hidden mb-8">
          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-orange-100 to-pink-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
            <Image
              src={ideaData?.imageUrl || null}
              alt={ideaData?.title || null}
              width={400}
              height={400}
              className="w-full"
            />

            {}
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Short Description */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-slate-50 mb-3">
                Overview
              </h2>
              <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                {ideaData?.shortDescription}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {ideaData?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-100 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/30 dark:to-pink-900/30 rounded-xl p-6 border-2 border-orange-100 dark:border-orange-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                  <h3 className="font-black text-gray-900 dark:text-slate-50">
                    Estimated Budget
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300">
                  {ideaData?.budget}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6 border-2 border-blue-100 dark:border-blue-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  <h3 className="font-black text-gray-900 dark:text-slate-50">
                    Target Audience
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300">
                  {ideaData?.targetAudience}
                </p>
              </div>
            </div>

            {/* Problem Statement */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-slate-50 mb-3">
                Problem Statement
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {ideaData?.problemStatement}
              </p>
            </div>

            {/* Proposed Solution */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-slate-50 mb-3">
                Proposed Solution
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {ideaData?.proposedSolution}
              </p>
            </div>

            {/* Detailed Description */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-slate-50 mb-3">
                Detailed Description
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {ideaData?.detailedDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <IdeaComments comments={ideaData?.comments} id={ideaData?._id} />
      </div>
    </div>
  );
}
