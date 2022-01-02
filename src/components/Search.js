import { ContentSection } from './ContentSection';

export const Search = () => {
  return (
    <ContentSection>
      <div className="container">
        <div className="search-box bg-light p-5">
          <h1 className="text-center mb-3">Search Movie</h1>

          <form className="d-flex flex-column">
            <div className="mb-3">
              <input type="text" className="form-control form-control-lg text-center" placeholder="Enter your search here..." />
            </div>

            <button type="submit" className="btn btn-primary btn-lg align-self-end">
              <i className="bi bi-search me-1"></i>
              Search
            </button>
          </form>
        </div>
      </div>
    </ContentSection>
  )
}
