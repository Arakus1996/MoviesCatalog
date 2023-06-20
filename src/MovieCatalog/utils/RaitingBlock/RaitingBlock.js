import style from './RaitingBlock.module.css'

const RaitingBlock = (props) => {
    return (  
        <div className={style.block}><span>{props.name}</span><span>{props.value}</span></div>
    );
}
 
export default RaitingBlock;