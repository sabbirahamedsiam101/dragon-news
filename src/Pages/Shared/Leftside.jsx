import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Leftside() {
    const [categoris , setCategoris] = useState([])
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(allcategory => setCategoris(allcategory))
    } ,[])
  return (
    <div>
         <h1 className=' text-3xl font-semibold mb-[.7vw]'> All Categoris </h1>
         <div className=" p-3">
            {
                categoris.map((category , idx) => <Link to={`/categoy/${category.id}`}>
                <button key={idx} className="btn btn-ghost w-full text-left ">{category.name}</button>
                </Link>)
            }
            
         </div>
    </div>
  )
}
