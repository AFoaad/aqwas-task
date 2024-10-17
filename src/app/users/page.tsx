"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/services/fetchUsers";

import { QueryError } from "@/types/errors";
import { Loader } from "@/components/Loader";
import { Error } from "@/components/Error";
import { User } from "@/types/User";

const Users = () => {
  const { data, isLoading, isError, error } = useQuery<User[], QueryError>({
    queryKey: ["Users"],
    queryFn: fetchUsers,
  });

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" h-full w-full px-4 py-8 bg-main-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Users
      </h1>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {data?.map((user: User) => (
          <li
            key={user.id}
            className="border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
          >
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
