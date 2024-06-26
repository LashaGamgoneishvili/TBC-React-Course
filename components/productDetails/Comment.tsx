"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AllCommentType } from "@/typings";

const CommentList = ({
  allUsersComment,
}: {
  allUsersComment: AllCommentType[];
}) => {
  const [comments, setComments] = useState<AllCommentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (allUsersComment) {
        setComments(allUsersComment);
        setLoading(false);
      } else {
        setLoading(false);
        setError("User comments are not available");
        toast.error("User comments are not available");
      }
    };

    fetchComments();
  }, [allUsersComment]);

  if (loading) return <p className="text-center mt-4">Loading comments...</p>;
  if (error)
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Comments</h2>
      {comments.length === 0 ? (
        <p className="text-center text-gray-500">No comments available.</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.comment_id}
            className="bg-white shadow-md rounded-lg p-6 mb-6"
          >
            <CommentCard key={comment.comment_id} comment={comment} />
          </div>
        ))
      )}
    </div>
  );
};

const CommentCard = ({ comment }: { comment: AllCommentType }) => (
  <div className="">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={comment.image} alt="@shadcn" />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{comment.lastname}</p>
      </div>
      <p className="text-sm text-gray-500">Your comment</p>
    </div>
    <p className="text-gray-700">{comment.comment_text}</p>
  </div>
);

export default CommentList;
