import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ContentSection } from './ContentSection';
import { Movie } from './Movie';

const OMDB_KEY = '4236c616';

export const Favourites = () => {
  const favourites = useSelector(state => state.favourites);

  return (
    <ContentSection>
      <div className="container">
        <h1 className="mb-3">Favourites</h1>

        {favourites.length ? (
          <table className="table table-hover">
            <thead className="table-primary">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Details</th>
              </tr>
            </thead>

            <tbody>
              {favourites.map(favourite => (
                <tr>
                  <td>{favourite.id}</td>
                  <td>{favourite.title}</td>
                  <td><Link to={`/movies/${favourite.id}`} className="btn btn-sm btn-outline-primary">View details</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-info">You haven't added any movies to your favourites</div>
        )}
      </div>
    </ContentSection>
  );
}
