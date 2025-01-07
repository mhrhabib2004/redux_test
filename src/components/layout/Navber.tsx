import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <h1 className="font-bold "> TaskMaster</h1>
            </div>

            <Link to={"/"}>Task</Link>
            <Link to={"users"}>Users</Link>

            <div className="ml-auto">
                <ModeToggle />
            </div>

        </nav>
    );
};

export default Navbar;


// export default function Navber() {
//   return (
//     <div>Navber</div>
//   )
// }
