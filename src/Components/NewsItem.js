import React from 'react'
//import PropTypes from 'prop-types'

 function NewsItem(props) {
  
 
let {title,description,imageUrl,newsUrl,author,date,source} = props; //{/* it is the concept of destructuring , it means this.props mai se title aur description fetch kar lo*/}
    return (
      <div className='my-3'>
            <div className="card"> {/*style={{width: "18rem"}} first bracket for js second bracket for making to object */}
             <div style= {{display : 'flex',
              justifyContent:'flex-end',
               position: 'absolute',
              right:'0',
              zIndex:'1'
            }}>
              <span className=" badge rounded-pill bg-danger" > 
                  {source}
              </span>
             </div>
                <img src={imageUrl} className="card-img-top position-relative" alt="..."/>
               
         
              <div className="card-body">
                <h5 className="card-title"> {title.slice(0,44)}...</h5> {/*we can also write {title} instead of {this.props.title} because we have already defined it by let {title,description} = this.props; but while writting {this.props.title} warning will come 'title' is assigned a value but never used     */}
                <p className="card-text">{description.slice(0,88)}...</p>
                <p className="card-text"><small  style={{color:"red"}}>By {author} on this {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
              </div>
            </div>
      </div>
    )
  
}

export default NewsItem
