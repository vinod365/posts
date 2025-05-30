"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { PostCard } from "@/components/postCard";
import { SearchBar } from "@/components/searchBar";
import { getPosts } from "@/features/posts.action";
import { LoadingState } from "@/components/loading";
import { ErrorState } from "@/components/error";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const {
    posts = [],
    isLoading,
    error,
  } = useAppSelector((state) => state.post);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchInput);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchInput]);

 

  if (error)
    return <ErrorState message={error} onRetry={() => dispatch(getPosts())} />;

  const filteredPosts = !debouncedSearchTerm.trim()
    ? posts
    : posts.filter((post) => {
        const lower = debouncedSearchTerm.toLowerCase();
        return (
          post.title.toLowerCase().includes(lower) ||
          post.body.toLowerCase().includes(lower)
        );
      });

  return (
    <div className="container mx-auto px-4 py-8">
   
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Posts</h1>
        <p className="text-gray-500 mb-6">
          Discover and search through our collection of posts
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <SearchBar searchTerm={searchInput} onSearchChange={setSearchInput} />
          <div className="text-sm text-gray-500">
            {filteredPosts.length} posts
          </div>
        </div>
      </div>
      {
        isLoading && <LoadingState />
      }
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
