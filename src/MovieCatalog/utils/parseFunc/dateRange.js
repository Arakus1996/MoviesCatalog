const dateRange = () => {
    let toDate = new Date()
    let fromDate = new Date()
    fromDate.setMonth(fromDate.getMonth() - 1)
    toDate = toDate.toLocaleDateString('ru-RU');
    fromDate = fromDate.toLocaleDateString('ru-RU');
    return `${fromDate}-${toDate}`
}
export default dateRange