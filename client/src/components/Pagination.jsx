import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages === 1) return null;

    const maxVisiblePages = 3; // Number of pages to show at once

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Adjust startPage again if currentPage is in the middle and endPage doesn't reach totalPages
    if (currentPage > Math.floor(maxVisiblePages / 2) && totalPages - currentPage < Math.floor(maxVisiblePages / 2)) {
        startPage = Math.max(1, totalPages - maxVisiblePages + 1);
        endPage = totalPages;
    }

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                    Prev
                </button>
            </li>
            {startPage > 1 && (
                <>
                    <li className="page-item">
                        <button className="page-link" onClick={() => onPageChange(1)}>
                            1
                        </button>
                    </li>
                    {startPage > 2 && (
                        <li className="page-item disabled">
                            <span className="page-link">..</span>
                        </li>
                    )}
                </>
            )}
            {pageNumbers.map((page) => (
                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page)}>
                        {page}
                    </button>
                </li>
            ))}
            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && (
                        <li className="page-item disabled">
                            <span className="page-link">..</span>
                        </li>
                    )}
                    <li className="page-item">
                        <button className="page-link" onClick={() => onPageChange(totalPages)}>
                            {totalPages}
                        </button>
                    </li>
                </>
            )}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
