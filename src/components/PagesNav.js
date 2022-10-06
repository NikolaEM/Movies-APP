function PagesNavigation({ setPage, page, totalPages }) {
  const handleNext = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {page != 1 && (
        <button type="button" onClick={handlePrev}>
          Previous
        </button>
      )}
      {page != totalPages && (
        <button type="button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default PagesNavigation;
