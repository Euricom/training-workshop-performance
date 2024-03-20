import { useState } from "react";
import { useQuery } from "react-query";

const Users = () => {
  const [page, setPage] = useState(1);

  const { isLoading, error, data, refetch } = useQuery(["users", page], () =>
    fetch(`http://localhost:3000/api/users?page=${page}&pageSize=100`).then((res) =>
      res.json().then((data) => data.users),
    ),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + (error as any).message;

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                FirstName
              </th>
              <th scope="col" className="px-6 py-3">
                LastName
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-1">
                    <img loading="lazy" src={user.imageUrl} className="w-8" alt="Apple Watch" />
                  </td>
                  <td className="px-1 py-1 font-semibold text-gray-900 dark:text-white">{user.firstname}</td>
                  <td className="px-1 py-1 font-semibold text-gray-900 dark:text-white">{user.lastname}</td>
                  <td className="px-1 py-1 font-semibold text-gray-900 dark:text-white">{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => {
            setPage(page + 1);
            refetch();
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default Users;
