import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCart = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, details, chef, photo } = coffee;

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/coffees/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = coffees.filter(cof => cof._id !== id);
                                setCoffees(remaining)
                            }
                        })
                }
            })
    }

    return (
        <div className="bg-base-100 shadow-xl flex mb-5 p-10 justify-around items-center gap-10">
            <figure><img src={photo} alt="Album" className="h-36" /></figure>
            <div className="text-start">
                <h2 className="font-bold text-2xl">{name}</h2>
                <p className="font-semibold text-xl mt-4">Chef: {chef}</p>
                <p>{details}</p>
            </div>
            <div className="btn-group btn-group-vertical space-y-2">
                <button className="btn">View</button>
                <Link to={`/update-coffee/${_id}`}><button className="btn">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCart;