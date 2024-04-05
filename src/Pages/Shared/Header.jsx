import logo from '../../assets/logo.png'
import moment from 'moment';
export default function Header() {
  return (
    <div> 
         <img src={logo} className=' mx-auto pt-[1.5vw] max-w-[40vw]' />
         <h1 className="text-[1.2vw] font-normal text-center mt-[0.4vw]"> Journalism Without Fear or Favour</h1>
         <h1 className="text-[1.2vw] font-normal text-center mt-[0.2vw]">
           <span className=' font-medium text-black'>{moment().format("dddd ,")} </span>
           {moment().format(" MMMM D YYYY")}
           </h1>
    </div>
  )
}
