"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import IdeaEditModal from "./IdeaEditModal";
import IdeaDeleteModal from "./IdeaDeleteModal";

export default function MyIdeasManager({ initialIdeas }) {
  const [ideas, setIdeas] = useState(initialIdeas ?? []);

  const handleIdeaUpdated = (updatedIdea) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea._id === updatedIdea._id ? { ...idea, ...updatedIdea } : idea,
      ),
    );
  };

  const handleIdeaDeleted = (ideaId) => {
    setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea._id !== ideaId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl dark:text-white dark:text-slate-50 font-black text-gray-900 mb-4">
              My Ideas
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient rounded-2xl p-6 text-white">
            <div className="text-4xl font-black mb-2">{ideas.length}</div>
            <div className="text-lg opacity-90">Total Ideas</div>
          </div>
        </div>

        <div className="space-y-6">
          {ideas?.map((idea) => (
            <div
              key={idea._id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 border-2 border-gray-100 dark:border-slate-700 hover:border-orange-500 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-4 py-1.5 bg-gradient text-white rounded-full text-sm font-bold">
                      {idea.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-slate-300">
                      {idea.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-slate-50 mb-2">
                    {idea.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {idea.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-slate-300">
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">{idea.likes ?? 0}</span>{" "}
                      likes
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">
                        {idea.comments?.length ?? 0}
                      </span>{" "}
                      comments
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:w-auto">
                  <div className="flex flex-col gap-3 *:w-full md:justify-end ">
                    <IdeaEditModal idea={idea} onSaved={handleIdeaUpdated} />
                    <IdeaDeleteModal
                      idea={idea}
                      onDeleted={handleIdeaDeleted}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {ideas.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 dark:bg-slate-800 rounded-full mb-6">
              <Plus className="w-12 h-12 text-gray-400 dark:text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-2">
              No ideas yet
            </h3>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              Start sharing your innovative ideas with the community
            </p>
            <Link
              href="/add-idea"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all">
              <Plus className="w-5 h-5" />
              Add Your First Idea
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
