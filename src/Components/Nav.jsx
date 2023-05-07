import SearchBar from "./SearchBar/SearchBar";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <>
      <SearchBar onSearch={onSearch} />
    </>
  );
};

export default Nav;
