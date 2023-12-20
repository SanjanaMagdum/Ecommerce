import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Data from "../Data"
import Card from "./Card"
import "./Home.css"

const Home = ({search,handleClick,data}) => {
  return (
    <div className="home">

        <main className="banner">
            <h1 className="bannerhead" style={{fontSize:'100px',color:'white',paddingTop:'120px'}}>Deal is Here</h1>
            <button style={{background:'rgba(0,0,0,0.9)',color:'white'}}>Shop More</button>

        </main>
        


        <Carousel>
            {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <header key={item.id} style={{height:'600px',width:'80%',margin:'auto'}}>
                        <div className="desc"> 
                            <img src={item.image} />
                            <p className="legend">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>{item.price}Rs</p>
                                <p>{item.rating.rate}⭐</p>
                                <button onClick={()=> handleClick(item)}>Add Cart</button>


                            </p>
                        </div>

                    </header>
                )
            })}
        </Carousel>

        <section className="sec">
        {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
            return(
                <Card key={item.id} item={item} handleClick={handleClick} />
            )
        })}
        </section>
      
    </div>
  )
}

export default Home
