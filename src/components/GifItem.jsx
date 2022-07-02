import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className="container-card">
        <img className="container-card__img" src={ url } alt={ title }/>
        <p className="container-card__text">{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title:  PropTypes.string.isRequired,
  url:    PropTypes.string.isRequired
}