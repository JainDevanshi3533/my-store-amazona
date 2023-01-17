// import _ from 'lodash';
// function Rating(props) {
//   const { rating, numReviews, caption } = props;
//   let num = rating;
//   let n = parseInt(num);
//   let deci = rating - parseInt(rating);
//   let rem = Math.floor(5 - num);
//   let arr = [];
//   return (
//     <div className="rating">
//       {_.times(n, (p) => {
//         arr.push(
//           <span key={p}>
//             <i  className="fas fa-star" />
//           </span>
//         );
//       })}
//       {deci >= 0 && (
//         <>
//           {arr.push(
//             <span key={arr.length + 1}>
//               <i  className="fas fa-star-half-alt" />
//             </span>
//           )!=null ?<></> : <></>
//           }
//         </>
//       )}
//       {_.times(rem, () => {
//         arr.push(
//           <span key={arr.length + 1}>
//             <i  className="far fa-star" />
//           </span>
//         );
//       })}
//       {/* {console.log(arr)} */}
//       {caption ? (
//         <span>{caption}</span>
//       ) : (
//         <span>{' ' + numReviews + ' reviews'}</span>
//       )}
//     </div>
//   );
// }

// export default Rating;



function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{' ' + numReviews + ' reviews'}</span>
      )}
    </div>
  );
}
export default Rating;