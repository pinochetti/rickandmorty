import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.container}>
      {characters.map((c) => {
        return (
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            species={c.species}
            gender={c.gender}
            origin={c.origin.name}
            status={c.status}
            image={c.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
