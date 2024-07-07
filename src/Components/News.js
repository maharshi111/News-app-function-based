import React from 'react'
import { useState,useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
 // changed 
//   static defaultProps = {
//     country : "in",
//     pageSize: 8
//    }

//    static propTypes = {
//     country: PropTypes.string,
//     pageSize:PropTypes.number
//   }

 const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.title = ` ${capitalizeFirstLetter(props.category)}- News Monkey App` 
  
  const[articles,setArticles]=useState([]);
  const[loading,setLoading] = useState(false);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
  //changed
  // constructor(props){
  //   super(props);
  //   console.log("hello I am a constructor for news component")
  //   //changed
  //   // this.state = {
  //   //   articles : [],
  //   //   loading: false,
  //   //   page:1,
  //   //   totalResults:0
  //   // }
    
  //   document.title = ` ${this.capitalizeFirstLetter(props.category)}- News Monkey App` 
  // }

  const updateNews=async()=>{
    props.setProgress(0)
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e6e56406704b0683af9c57378a50a0&page=${page}&pageSize=${props.pageSize}`;
    //changed
    //this.setState({loading: true})
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles : parsedData.articles,
    //   totalResults : parsedData.totalResults,
    //   loading: false
    // })
    props.setProgress(100)

  }

  useEffect(() => {
    updateNews();
  },[])
  // changed
  // async componentDidMount(){
  //   console.log("cdm");//componentDidMount gets render after the render() so output of it comes after render()
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e6e56406704b0683af9c57378a50a0&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   articles : parsedData.articles,
  //   //   totalResults : parsedData.totalResults,
  //   //   loading: false
  //   // })

  //   this.updateNews();

  // }
// changed handlePrevClick to function based, but anyways they are of no use of now as we are not using next and previous button
//  const handlePrevClick= async()=>{
//    console.log("previous") //here we have to make function using arrow function only , we cannot use function keyword to define a class as the function is inside a class
//   //  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e6e56406704b0683af9c57378a50a0&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//   //  this.setState({loading:true})
//   //  let data = await fetch(url);
//   //  let parsedData = await data.json()
//   //  console.log(parsedData);
//   //  this.setState({
//   //    articles : parsedData.articles,
//   //    loading: false
//   //  })
   
//   //  this.setState({
//   //  page : this.state.page-1
//   // })

//   // changed 
//   // this.setState({
//   //   page : this.state.page-1
//   //  })
//    setPage(page-1)
//    updateNews()

//   }

// changed handleNextClick to function based 
//  const handleNextClick= async() =>{
//     console.log("Next")
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e6e56406704b0683af9c57378a50a0&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//     // this.setState({ loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // console.log(parsedData);
//     // this.setState({
//     //   articles : parsedData.articles,
//     //   loading: false
//     // })
//   //  this.setState({
//   //     page : this.state.page+1
//   //    })
//     // changed 
//     // await this.setState({
//     //       page : this.state.page+1
//     //      })

//     await setPage(page+1) 
    
//      updateNews()

   
//   }

 const fetchMoreData = async() => {
  //changed
   // this.setState({page : this.state.page+1})
   setPage(page+1);// even if we do not write this than also it works all fine as in url we have set page to page+1
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e6e56406704b0683af9c57378a50a0&page=${page + 1}&pageSize=${props.pageSize}`;
    //changed
    // this.setState({ loading:true})
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    //changed 
    // this.setState({
    //   articles : this.state.articles.concat(parsedData.articles),
    //   loading: false
    // })
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)

  };
  
  


    console.log("render")
    return (
      <>
      {/* <div className = "container my-3"> commenting out so as to disappear the horizontal scroll bar coming when using infinite scroll  */}
        <h2 className='text-center' style ={{margin : '85px 0px 10px 0px'}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)} headline </h2>
       {loading&&<Spinner/> } 
       {/* it means is this.state.loading is true than show spinner component . */}
       
       <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length!== totalResults}
              loader={<Spinner/>}
            >
            <div className="container">{/*adding this container so as to remove the horizontal scroll bar that is generated while using infinte scroll*/}
            <div className="row">
              {/* {!this.state.loading &&this.state.articles.map((element)=>{
                return <div className="col-md-4" key = {element.url}>
                  <NewsItem title = {element.title!=null?element.title:""} description = {element.description!=null?element.description:""} imageUrl = {element.urlToImage!=null?element.urlToImage:"https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/23/full/1682249330-2022.jpg"} newsUrl = {element.url} author=  {element.author!=null?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} />
                </div>})} !this.state.loading &&this.state.articles.map((element)=> ; it means if this.state.loading is false them do the mapping function or in other words displaty the news item */}
                {/* now writing code for infinite scroll below*/}
              
                

                {articles.map((element)=>{
                return <div className="col-md-4" key = {element.url}>
                  <NewsItem title = {element.title!=null?element.title:""} description = {element.description!=null?element.description:""} imageUrl = {element.urlToImage!=null?element.urlToImage:"https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/23/full/1682249330-2022.jpg"} newsUrl = {element.url} author=  {element.author!=null?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} />
                </div>})}
            </div>
            </div>
        </InfiniteScroll>
        
        {/* <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>Previous &larr;</button> while using onclick in a class based coponenet donot forget to use this keyword as we are inside a class */}
          {/* <button type="button" disabled={Math.ceil(this.state.totalResults/props.pageSize)<this.state.page +1 }  className="btn btn-dark"onClick={this.handleNextClick}>Next	&rarr;</button>
        </div> */} {/*this code is for next and previous button*/}
        {/* </div> */}
     </>
    )
  
}

News.propTypes = {
  country: PropTypes.string,
    pageSize:PropTypes.number
}

News.defaultProps = {
  country : "in",
  pageSize: 8 
}


export default News
