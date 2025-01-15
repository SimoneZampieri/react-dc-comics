import "./ComicCard.css";

const ComicCard = ({ title, thumb }) => {
  return (
    <div className="comic-card">
      <img src={thumb} alt={title} className="comic-card-image" />
      <div className="comic-card-details">
        <h2 className="comic-card-title">{title}</h2>
      </div>
    </div>
  );
};

export default ComicCard;
