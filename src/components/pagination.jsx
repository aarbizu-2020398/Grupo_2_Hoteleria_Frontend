const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${currentPage === page 
              ? 'bg-[#034a8a] text-white' 
              : 'bg-white text-[#034a8a] hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;