import { Link } from 'react-router-dom';
import { ContentSection } from './ContentSection';

export const NotFound = () => {
  return (
    <ContentSection>
      <div className="container text-center">
        <div className="mb-3 text-primary display-1">404</div>

        <h1>Not found</h1>

        <p>The page you are trying to reach doesn't exist or is unavailable.</p>

        <Link to="/" className="btn btn-secondary">
          <i className="bi bi-house-door me-1"></i>
          Home
        </Link>
      </div>
    </ContentSection>
  )
}
