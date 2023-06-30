const parseDate = (isoDate) => {
    if (isoDate) {
        let date = new Date(isoDate)
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toLocaleString("ru", options)
    }
}
export default parseDate