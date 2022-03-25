import React from "react";
import CategoriesItems from './CategoriesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const Categories = () => {
 

  return (
    <div>
      <div class="wow fadeInRight media service-box mt-4">
        {CategoriesItems.map((item,index) => {
          return(
            <div key={index}>
            <div className="pull-left ">
              {/* <img src={item.icon} className="float-start" /> */}
              <FontAwesomeIcon icon={item.icon} style={{width:20,height:20}} />
            </div>
            <div className="media-body">
              <h4 className="media-heading">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
          )
        })}
      </div>
     
    </div>
  );
};

export default Categories;
