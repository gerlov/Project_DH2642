import "./css/searchResults.css"

function SearchResults({ searchResults, resultChosenACB }) {
  return (
    <div>
      {searchResults.map((result) => (
        <div
          key={result.id}
          className="result-container"
          // onClick={() => resultChosenACB(result)}
        >
          <div className="result-metadata-container">
            <div className="result-metadata-target">
              <h1>{result.target}</h1>
            </div>
            <div className="result-metadata-instructions">
              <p>{result.instructions}</p>
            </div>
          </div>
          <div className="result-gif-container">
            <img
              src={result.gifUrl}
              alt={`${result.name} gif`}
              height="300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
