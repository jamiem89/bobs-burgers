import './CharacterCard.scss'

const CharacterCard = (props) => {
    return (
        <div className="character-card">
            <div className="character-card__content">
                <div className="character-card__num">
                    {props.info.id}
                </div>
                <div className="character-card__img">
                    <img src={props.info.image} alt="" />
                </div>
                <div className="character-card__info">
                    <h3 className="character-card__title">{props.info.name}</h3>
                    {props.info.gender && <span className="character-card__extra character-card__extra--gender">Gender: {props.info.gender}</span>}
                    {props.info.occupation &&<span className="character-card__extra character-card__extra--occupation">Occupation: {props.info.occupation}</span>}
                    {!props.info.occupation && <span className="character-card__extra character-card__extra--occupation">No occupation</span>}
                </div>
            </div>
            {props.info.wikiUrl && <a className="character-card__btn" target="_blank" href={props.info.wikiUrl}>Find out more</a>}
        </div>
     );
}

export default CharacterCard;