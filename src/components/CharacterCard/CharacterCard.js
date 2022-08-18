import './CharacterCard.scss'

const CharacterCard = (props) => {
    return (
        <div className="character-card">
            <div className="character-card__num">
                {props.info.id}
            </div>
            <div className="character-card__img">
                <img src={props.info.image} alt="" />
            </div>
            <div className="character-card__info">
                <h3 className="character-card__title">{props.info.name}</h3>
                <span className="character-card__extra character-card__extra--gender">{props.info.gender}</span>
                <span className="character-card__extra character-card__extra--occupation">{props.info.occupation}</span>
                <span className="character-card__extra character-card__extra--first-episode">{props.info.firstEpisode}</span>
            </div>
            <a  className="btn" href={props.info.wikiUrl}>Find out more</a>
        </div>
     );
}

export default CharacterCard;