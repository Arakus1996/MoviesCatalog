const parseMoney = (money, currency) => {
    if (money && currency) return money.toLocaleString() + currency
}
export default parseMoney