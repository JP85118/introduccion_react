import './Card.css';

function Card({img, name, text, link, textLink}) {
  return(
    <div className='card__container'>
      <div>
      <img className='card__img' src={img} alt="photo" />
      </div>
      <h2 className='card__title'>{name}</h2>
      <p className='card__text'>{text}</p>
      <a href={link} className='card__link' target="_blank">{textLink}</a>
    </div>
  )
}

export default Card;