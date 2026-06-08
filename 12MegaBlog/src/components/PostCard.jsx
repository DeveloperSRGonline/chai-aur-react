import appWriteService from "../appWrite/config";
import { Link } from "react-router-dom";
import "./PostCard.scss";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="post-card-link">
      <div className="post-card">
        <div className="post-card__image-container">
          <img
            className="post-card__image"
            src={appWriteService.previewFile(featuredImage)}
            alt={title}
          />
        </div>

        <h2 className="post-card__title">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;