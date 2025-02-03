interface MyComponentProps {
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  onPageChange,
  currentPage,
  totalPages,
}: MyComponentProps) {
  const pageNumbers = [];
  const maxPagesToShow = 5;
  const range = Math.min(maxPagesToShow, totalPages);
  const start = Math.max(1, currentPage - Math.floor(range / 2));
  const end = Math.min(totalPages, start + range - 1);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-6 flex flex-wrap items-center justify-center space-x-2">
      {/* First */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`rounded-lg bg-green-500 px-4 py-2 text-sm text-white ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-green-400"}`}
      >
        First
      </button>

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-lg bg-green-500 px-4 py-2 text-sm text-white ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-green-400"}`}
      >
        &lt;
      </button>

      {/* Page Number */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-lg px-4 py-2 text-sm ${page === currentPage ? "bg-green-600 text-white" : "bg-white text-green-500 hover:bg-green-100"}`}
        >
          {page}
        </button>
      ))}

      {/* Next*/}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`rounded-lg bg-green-500 px-4 py-2 text-sm text-white ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-green-400"}`}
      >
        &gt;
      </button>

      {/* Last */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`rounded-lg bg-green-500 px-4 py-2 text-sm text-white ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-green-400"}`}
      >
        Last
      </button>
    </div>
  );
}
