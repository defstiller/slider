function Review({image,title,name,quote}) {
    return (<>
        <img src={image} alt={title} />
        <h4>{name.toUpperCase()}</h4>
        <p>{title}</p>
        <p>{quote}</p>
    </>)
}

export default Review