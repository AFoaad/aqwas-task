"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import { Error } from "@/components/Error";
import { fetchPosts } from "@/services/fetchPosts";
import { Post } from "@/types/posts";

const Posts_PER_PAGE = 6;

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: allPosts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["Posts"],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    if (allPosts) {
      const startIndex = (currentPage - 1) * Posts_PER_PAGE;
      const endIndex = startIndex + Posts_PER_PAGE;
      const nextPosts = allPosts.slice(startIndex, endIndex);

      setDisplayedPosts((prevPosts) => [...prevPosts, ...nextPosts]);

      if (endIndex >= allPosts.length) {
        setHasMore(false);
      }
    }
  }, [allPosts, currentPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (hasMore) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore]);

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full px-4 py-8 bg-main-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Posts
      </h1>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {displayedPosts.map((post) => (
          <li
            key={post.id}
            className="border-b last:border-b-0 py-10 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
          >
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <h4 className="text-base font-semibold text-gray-800">
                {post.body}
              </h4>
            </div>
          </li>
        ))}
        {!hasMore && (
          <div className="text-center text-main-900 mt-4">
            No more Posts to load
          </div>
        )}
      </ul>
    </div>
  );
};
