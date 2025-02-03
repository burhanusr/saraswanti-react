import { useQuery } from "@tanstack/react-query";

import Table from "./Table";
import { fetchPosts, Post } from "../api/fetchData";
import { useMemo, useState } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";

export interface Category {
  id: number;
  title: string;
  category_code: string;
}

const category: Category[] = [
  { id: 1, title: "Food & Beverage", category_code: "F" },
  { id: 2, title: "Pharmaceuticals", category_code: "P" },
  { id: 3, title: "Government", category_code: "G" },
  { id: 4, title: "Traditional Medicine & Suplement", category_code: "T" },
  { id: 13, title: "Beauty, Cosmetics & Personal Care", category_code: "B" },
  { id: 14, title: "Media RTU", category_code: "M" },
  { id: 15, title: "K3L Products", category_code: "K" },
  { id: 16, title: "ALKES & PKRT", category_code: "A" },
  { id: 17, title: "Feed, Pesticides & PSAT", category_code: "E" },
  { id: 18, title: "Others", category_code: "L" },
  { id: 19, title: "Research / Academic Purpose", category_code: "R" },
  { id: 20, title: "Dioxine Udara", category_code: "D" },
];

export default function Page() {
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState<string>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState({
    status: "",
    attachment: "",
    discount: "",
    type: "",
  });
  const itemsPerPage = 10;

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredSortedPosts = useMemo(() => {
    if (!posts || posts.length === 0) return [];

    const filtered = posts.filter((post) => {
      return (
        (filters.status === "" ||
          (filters.status === "approved" ? post.status : !post.status)) &&
        (filters.attachment === "" ||
          (filters.attachment === "yes"
            ? post.attachment
            : !post.attachment)) &&
        (filters.discount === "" ||
          (filters.discount === "yes" ? post.discount : !post.discount)) &&
        (filters.type === "" || post.type === parseInt(filters.type))
      );
    });

    return filtered.sort((a, b) => {
      if (a[sortField as keyof Post] < b[sortField as keyof Post])
        return sortOrder === "asc" ? -1 : 1;
      if (a[sortField as keyof Post] > b[sortField as keyof Post])
        return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [posts, filters, sortField, sortOrder]);

  // Calculate paginated data
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredSortedPosts.slice(startIndex, endIndex);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredSortedPosts.length / itemsPerPage);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Filter
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleSort={handleSort}
            sortField={sortField}
            sortOrder={sortOrder}
            categories={category}
          />
          <Table data={currentPosts} categories={category} />
          <Pagination
            onPageChange={setPage}
            currentPage={page}
            totalPages={totalPages}
          />
        </div>
      )}
      {isError && <div>Error fetching data</div>}
    </>
  );
}
