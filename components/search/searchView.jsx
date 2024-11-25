import "./css/searchView.css"

function SearchView(props) {
    return (
      <div className="search-view-container">
        <h2>Exercises!</h2>
        <input onChange={props.clickMe} type="text" name="" id="" placeholder="Search.." />
      </div>
    );
  }
  
  export default SearchView;