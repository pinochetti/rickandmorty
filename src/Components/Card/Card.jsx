import style from "./Card.module.css";

function Card(props) {
  const { id, name, gender, species, image, onClose, status, origin } = props;
  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        <div className={style.font}>
          <img src={image} alt={name} className={style.image} />
        </div>

        <div className={style.back}>
          <button className={style.btn} onClick={() => onClose(id)}>
            X
          </button>
          <h2>{name}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{status}</h2>
          <h2>{origin.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
