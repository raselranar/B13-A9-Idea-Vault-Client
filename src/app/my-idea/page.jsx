import { Button } from "@heroui/react";
import { Edit, Trash2, Plus, Eye } from "lucide-react";
import Link from "next/link";

const myIdeas = [
  {
    id: 1,
    title: "AI-Powered Personal Finance Assistant",
    description:
      "A mobile app that uses machine learning to analyze spending patterns and provide personalized financial advice in real-time.",
    category: "AI",
    date: "May 15, 2026",
    likes: 24,
    comments: 12,
  },
  {
    id: 2,
    title: "LocalCraft - Artisan Marketplace",
    description:
      "E-commerce platform exclusively for local artisans and craftspeople to sell handmade products directly to consumers.",
    category: "E-commerce",
    date: "May 11, 2026",
    likes: 18,
    comments: 8,
  },
  {
    id: 3,
    title: "CodeMentor AI - Programming Assistant",
    description:
      "AI-powered coding assistant that helps developers debug code, learn new languages, and improve coding practices.",
    category: "Tech",
    date: "May 10, 2026",
    likes: 35,
    comments: 20,
  },
];

export default function MyIdeas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-4">My Ideas</h1>
            <p className="text-xl text-gray-600">
              Manage and track your submitted ideas
            </p>
          </div>
          <Link href="/add-idea">
            <Button className="bg-gradient text-md">
              <Plus className="w-5 h-5" />
              Add New Idea
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient rounded-2xl p-6 text-white">
            <div className="text-4xl font-black mb-2">{myIdeas.length}</div>
            <div className="text-lg opacity-90">Total Ideas</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
            <div className="text-4xl font-black mb-2">77</div>
            <div className="text-lg opacity-90">Total Likes</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
            <div className="text-4xl font-black mb-2">40</div>
            <div className="text-lg opacity-90">Total Comments</div>
          </div>
        </div>

        {/* Ideas List */}
        <div className="space-y-6">
          {myIdeas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-orange-500 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-4 py-1.5 bg-gradient text-white rounded-full text-sm font-bold">
                      {idea.category}
                    </span>
                    <span className="text-sm text-gray-500">{idea.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {idea.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {idea.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">{idea.likes}</span> likes
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">{idea.comments}</span>{" "}
                      comments
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col gap-3">
                  <button className="flex-1 md:flex-none px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all flex items-center justify-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (when no ideas) */}
        {myIdeas.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Plus className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No ideas yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start sharing your innovative ideas with the community
            </p>
            <a
              href="/add-idea"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all">
              <Plus className="w-5 h-5" />
              Add Your First Idea
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
