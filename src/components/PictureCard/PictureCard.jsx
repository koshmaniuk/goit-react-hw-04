import css from './PictureCard.module.css';
export const PictureCard = ({ pictureUrl }) => {
  return (
    <li>
      <a href={pictureUrl.regular} rel="noreferrer noopener">
        <img src={pictureUrl.small} className={css.cardPicture} width="300px" alt="" />
      </a>
    </li>
  );
};
