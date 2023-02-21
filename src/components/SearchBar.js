import React from "react";

function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
