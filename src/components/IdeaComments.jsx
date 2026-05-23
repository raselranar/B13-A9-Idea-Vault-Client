"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Form, TextArea, toast } from "@heroui/react";
import { MessageCircle, Edit, Trash2, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import EditCommentModal from "./EditCommentModal";
import DeleteCommentModal from "./DeleteCommentModal";

const IdeaComments = ({ comments, id }) => {
  const { data: session } = authClient.useSession();

  const router = useRouter();
  const ownerCheck = (comment) => {
    return session?.user?.name?.toLowerCase() === comment?.user?.toLowerCase();
  };
  // post comment handler
  const handlePostComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentText = formData.get("commentBox");
    // post to server

    const {
      data: { token },
      error,
    } = await authClient.token();
    if (error) {
      console.error("Error fetching token:", error);
      toast.danger("Error fetching authentication token. Please try again.");
    }

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: session?.user?.id || "anonymous",
        user: session?.user?.name || "Anonymous User",
        text: commentText,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        commentId: Date.now(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.danger(data.error);
        } else {
          toast.success("Comment posted successfully!");
        }
        // refresh comments
        router.refresh();
      });
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border-2 border-orange-100 dark:border-slate-700 py-8 px-3 sm:p-8">
      <h2 className="text-3xl font-black text-gray-900 dark:text-slate-50 mb-6 flex items-center gap-3">
        <MessageCircle className="w-8 h-8 text-orange-500" />
        Comments ({comments?.length || 0})
      </h2>

      {/* Add Comment Form */}
      <Form
        onSubmit={handlePostComment}
        className="mb-8 bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border-2 border-gray-200 dark:border-slate-700">
        <TextArea
          rows={3}
          name="commentBox"
          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none mb-3"
          placeholder="Share your thoughts on this idea..."
        />
        <Button type="submit" className="bg-gradient">
          <Send className="w-5 h-5" />
          Post Comment
        </Button>
      </Form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments?.map((comment, i) => {
          const isOwner = ownerCheck(comment);
          console.log(isOwner);
          return (
            <div
              key={i}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border-2 border-gray-200 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {comment?.user?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-bold text-gray-900 dark:text-slate-50">
                        {comment?.user || "Unknown User"}
                      </span>
                      {/* {isOwner && (
                        <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">
                          AUTHOR
                        </span>
                      )} */}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-slate-300">
                      {comment?.date}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
                    {comment?.text}
                  </p>
                  {isOwner && (
                    <div className="flex gap-2">
                      {/* edit button */}
                      <EditCommentModal
                        id={id}
                        commentId={comment?.commentId}
                      />
                      {/* delete button */}
                      <DeleteCommentModal
                        id={id}
                        commentId={comment?.commentId}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default IdeaComments;
