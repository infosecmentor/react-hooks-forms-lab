import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(event){
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search"
      placeholder="Search..." 
      onChange={handleSearchChange} 
      value={search}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
	@@ -14,4 +24,4 @@ function Filter({ onCategoryChange }) {
  );
}

export default Filter;