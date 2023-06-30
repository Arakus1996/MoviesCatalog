import style from './RatingBlock.module.css'

const RatingBlock = (props) => {
    const valueColor = (rating) => {
        if(rating >= 7) return {color:'#60C60A'}
        else if(rating < 7 && rating >= 5) return {color:'#FD9B25'}
        else return {color:'#F84B2F'}
    }

    return (  
        <div className={style.rating}>
            <span className={style.ratingName}>{props.ratingName}:</span>
            <span className={style.ratingValue} style={valueColor(props.value)}>{props.value}</span>
        </div> 
    );
}
 
export default RatingBlock;