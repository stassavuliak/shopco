import styles from "./ProductCard.module.scss";
import RatingStars from "../RatingStars/RatingStars";
import Badge from "../Badge/Badge";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    image,
    price,
    oldPrice,
    discount,
    rating,
    isNew,
  } = product;

  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          {isNew && <Badge text="NEW" />}
          {discount && <Badge text={discount} type="discount" />}
          <img src={image} alt={title} className={styles.image} />
        </div>

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>

          <div className={styles.rating}>
            <RatingStars rating={rating} />
            <span className={styles.ratingValue}>{rating}/5</span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>${price}</span>
            {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
          </div>
        </div>
      </div>
    </Link>
    
  );
};

export default ProductCard;
