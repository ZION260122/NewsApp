
export default function News(props) {
    console.log(props)

    return(
        <div className="news">
          
            
            <div className="news-img">
                <img src={props.article.urlToImage}/>
                
            </div>
            <h2>{props.article.title}</h2>
 
            <p>{props.article.description?.substring(0,100).concat("...")}</p><a href={props.article.url} target="blank">Read More</a>
            <div className ='source'>
            <p>Author: {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>
        
    )
}