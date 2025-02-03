interface FiltersProps {
  filters: {
    status: string;
    attachment: string;
    discount: string;
    type: string;
  };
  handleFilterChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
  handleSort: (field: string) => void;
  sortField: string;
  sortOrder: "asc" | "desc";
  categories: { id: number; title: string; category_code: string }[];
}

export default function Filter({
  filters,
  handleFilterChange,
  handleSort,
  sortField,
  sortOrder,
  categories,
}: FiltersProps) {
  return (
    <>
      <div className="mb-4 flex items-center space-x-2 text-sm">
        <label className="whitespace-nowrap">Sort by</label>
        <select
          value={sortField}
          onChange={(e) => handleSort(e.target.value)}
          className="h-fit rounded-md border p-2"
        >
          <option value="id">ID</option>
          <option value="status">Status</option>
          <option value="attachment">Attachment</option>
          <option value="discount">Discount</option>
          <option value="type">Type</option>
        </select>

        <select
          value={sortOrder}
          onChange={() => handleSort(sortField)}
          className="h-fit rounded-md border p-2"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <label className="whitespace-nowrap">Filter by</label>
        <div className="grid grid-cols-4 space-x-2">
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="h-fit rounded-md border p-2"
          >
            <option value="">All Statuses</option>
            <option value="approved">Approved</option>
            <option value="unapproved">Unapproved</option>
          </select>

          <select
            name="attachment"
            value={filters.attachment}
            onChange={handleFilterChange}
            className="h-fit rounded-md border p-2"
          >
            <option value="">All Attachments</option>
            <option value="yes">Has Attachment</option>
            <option value="no">No Attachment</option>
          </select>

          <select
            name="discount"
            value={filters.discount}
            onChange={handleFilterChange}
            className="h-fit rounded-md border p-2"
          >
            <option value="">All Discounts</option>
            <option value="yes">Has Discount</option>
            <option value="no">No Discount</option>
          </select>

          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="h-fit rounded-md border p-2"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
