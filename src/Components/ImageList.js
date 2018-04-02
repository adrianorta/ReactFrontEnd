import React from 'react';
 const ImageList = props => {

   let results = props.data;

   return (
     results.map((image, index) =>
       <li key={index}>
         <img
           src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
           alt={image.title} />
       </li>
     )
   );
 }

 export default ImageList;
