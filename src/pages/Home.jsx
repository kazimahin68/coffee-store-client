import { useLoaderData } from "react-router-dom";
import CoffeeCart from "./CoffeeCart";
import { useState } from "react";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div className="mt-32">
            {
                coffees.map(coffee => <CoffeeCart key={coffee._id}
                     coffee={coffee}
                     coffees = {coffees}
                     setCoffees= {setCoffees}
                     ></CoffeeCart>)
            }
        </div>
    );
};

export default Home;