import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
export default function RightsideNav() {
    return (
        <div>
            <div className=" space-y-2 mb-7 border-2  border-black rounded-2xl p-3">
                <h1 className=' text-[2vw]'> Login with</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Button
                </button>
                <button className="btn btn-outline btn-info w-full">
                    <FaFacebookSquare />
                    Info
                </button>
            </div>
            <div className=" space-y-2 border-2 border-black rounded-2xl p-3">
                <h1 className=' text-[2vw]'> Fine us</h1>
                <button className="btn  w-full">
                    <FaGoogle />
                    Button
                </button>
                <button className="btn  btn-info w-full">
                    <FaFacebookSquare />
                    Info
                </button>
            </div>
            {/* q zone */}
            <div className=" mt-[1vw] space-y-3">
                <h1 className=" text-[2vw]  font-semibold">Q Zone</h1>
                <div>
                    <img src={qZone1} alt="" />
                </div>
                <div>
                    <img src={qZone2} alt="" />
                </div>
                <div>
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    )
}
