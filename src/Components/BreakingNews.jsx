import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function BreakingNews() {
    return (
        <div className=" flex w-[80%]  rounded-md mx-auto p-[.7vw] mt-[1vw]">
            <button className="btn-sm btn btn-secondary mr-[1vw]">Leatest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to={"/"} className=" mr-10">
                   1. I can be a React component, multiple React components, or just some text......
                </Link>
                <Link to={"/"} className=" mr-10">
                  2.  I can be a React component, multiple React components, or just some text......
                </Link>
                <Link to={"/"} className=" mr-10">
                   3.  I can be a React component, multiple React components, or just some text......
                </Link>
                <Link to={"/"} className=" mr-10">
                  4.  I can be a React component, multiple React components, or just some text......
                </Link>
            </Marquee>
        </div>
    )
}
