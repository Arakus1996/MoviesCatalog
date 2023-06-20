import style from './Button.module.css'

const Button = (props) => {
    return <button onClick={props.onClick} className={style.defaultButton}>{props.children}{props.text}</button>
}

export default Button