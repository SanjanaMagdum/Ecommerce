import { Link } from "react-router-dom"
import "./Navbar.css"



const Navbar = ({setSearch,size,data,setData,handleSort}) => {
  // const [theme, setTheme] = useState("light");

  const filterResult=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)

  }
  const filterResult2=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    
    setData(result)

  }
  const filterResult3=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)

  }
  const filterResult4=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)

  };
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   document.documentElement.setAttribute("data-theme", newTheme);
  //   setTheme(newTheme);
  // };
  return (
    <div className="navbar">
        <nav className="nav">
            <article className="navart">
                <div className="divnav font-extrabold"><Link style={{color:"white",textDecoration:"none"}} to='/'>Shop😃More</Link></div>
                <div className="divnav"><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search Your Products" /></div>
                <div className="divnav"><Link style={{color:"white",textDecoration:"none"}} to='/cart'>🛒<sup>{size}</sup></Link></div>
            </article>
            <article className="Artbtn">
              <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
              <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
              <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
              <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
              <button onClick={handleSort}>Sort By Price</button>

            </article>
        </nav>
      
    </div>
  )
}

export default Navbar
