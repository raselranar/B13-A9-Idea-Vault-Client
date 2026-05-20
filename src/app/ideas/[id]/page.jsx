import { Button, TextArea } from "@heroui/react";
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

const comments = [];

export default async function IdeaDetails({ params }) {
  const { id } = await params;
  const ideaData = await fetchIdea(id);

  console.log("ideasdata", ideaData);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
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
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-bold">
            {ideaData?.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-black text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          {ideaData?.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
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
            <span>{ideaData?.likes} likes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>{ideaData?.commentsCount} comments</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-100 overflow-hidden mb-8">
          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
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
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ideaData?.shortDescription}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {ideaData?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 border-2 border-orange-100">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                  <h3 className="font-black text-gray-900">Estimated Budget</h3>
                </div>
                <p className="text-gray-700">{ideaData?.budget}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="font-black text-gray-900">Target Audience</h3>
                </div>
                <p className="text-gray-700">{ideaData?.targetAudience}</p>
              </div>
            </div>

            {/* Problem Statement */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Problem Statement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {ideaData?.problemStatement}
              </p>
            </div>

            {/* Proposed Solution */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Proposed Solution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {ideaData?.proposedSolution}
              </p>
            </div>

            {/* Detailed Description */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Detailed Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {ideaData?.detailedDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-orange-500" />
            Comments ({comments.length})
          </h2>

          {/* Add Comment Form */}
          <div className="mb-8 bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <TextArea
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none mb-3"
              placeholder="Share your thoughts on this idea..."
            />
            <Button className="bg-gradient">
              <Send className="w-5 h-5" />
              Post Comment
            </Button>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {comment.authorPhoto}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-gray-900">
                          {comment.author}
                        </span>
                        {comment.isOwner && (
                          <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">
                            AUTHOR
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {comment.text}
                    </p>
                    {comment.isOwner && (
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all flex items-center gap-1">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-all flex items-center gap-1">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
