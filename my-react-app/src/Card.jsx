import watchImage from "./assets/images.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={watchImage} alt="watch image"></img>
      <h2 className="card-title">ORIS Watch</h2>
      <p className="card-desc">It tells time</p>
    </div>
  );
}

export default Card;
