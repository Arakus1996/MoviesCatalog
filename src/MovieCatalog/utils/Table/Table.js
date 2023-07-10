import style from './Table.module.css'

export const Table = (props) => {
    return (
        <div className={style.discriptionBlock__table}>
            <table>
                <tbody>
                {props.children}
                </tbody>
            </table>
        </div>
    );
}

export const TableLine = (props) => {
    let value
    value = Array.isArray(props.values) ? props.values.map(value => value.name || value.value).join(', ') : props.values
    return (
        <>
            {value && <tr>
                <td className={style.table__lineName}>{props.name}</td>
                <td><div className={props.className}>{value}</div></td>
            </tr>}
        </>
    )
}