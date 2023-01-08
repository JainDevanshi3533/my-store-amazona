import _ from 'lodash';
function Rating(props) {
  const { rating, numReviews } = props;
  let num = rating;
  let n = parseInt(num);
  let deci = rating - parseInt(rating);
  let rem = Math.floor(5 - num);
  let arr = [];
  return (
    <div className="rating">
      {_.times(n, (p) => {
        arr.push(
          <span key={p}>
            <i  className="fas fa-star" />
          </span>
        );
      })}
      {deci >= 0 && (
        <>
          {arr.push(
            <span key={arr.length + 1}>
              <i  className="fas fa-star-half-alt" />
            </span>
          )!=null ?<></> : <></>
          }
        </>
      )}
      {_.times(rem, () => {
        arr.push(
          <span key={arr.length + 1}>
            <i  className="far fa-star" />
          </span>
        );
      })}
      {/* {console.log(arr)} */}
      {arr}
      <span> {numReviews} reviews</span>
    </div>
  );
}

export default Rating;

