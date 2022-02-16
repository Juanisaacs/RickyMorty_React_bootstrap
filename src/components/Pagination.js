import React from 'react';

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevius = () => {
        onPrevious();

    }
    const handleNext = () => {
        onNext();
    }

  return (
      <nav className="my-5">
          <ul className="pagination justify-content-center">
              {
                  prev ? ( 
              <li className="page-item">
                  <button className="page-link" onClick={handlePrevius}>Previous</button>
              </li>
                ) :
              null
              } 
              {
                  next ? ( 
              <li className="page-item">
                  <button pageName="page-link" onClick={handleNext}>Next</button>
              </li>
                  ) : 
                  null 
                  }
          </ul>
      </nav>
  ) 
};

export default Pagination;
