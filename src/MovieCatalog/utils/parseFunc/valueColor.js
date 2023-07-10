const valueColor = (rating) => {
    if(rating >= 7) return {color:'#60C60A'}
    else if(rating < 7 && rating >= 5) return {color:'#FD9B25'}
    else return {color:'#F84B2F'}
}

export default valueColor