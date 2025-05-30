import React from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium">
          User {post.userId}
        </span>
        <span className="text-xs text-gray-400">#{post.id}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
        {post.body}
      </p>
    </div>
  );
}
