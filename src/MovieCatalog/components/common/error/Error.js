import style from "./Error.module.css"

const Error = (props) => {
    console.log(props.errorData)
    return (
        <div className={style.errorBlock}>
            <h1>Error {props.errorData?.statusCode} </h1>
            <p>{props.errorData?.message}</p>
        </div>
        
    );
}

export default Error;