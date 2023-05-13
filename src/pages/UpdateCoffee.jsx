import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const loadedCoffee = useLoaderData();

    const {_id, name, chef, supplier, taste, category, details, photo} = loadedCoffee;
    

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(updateCoffee)

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type" : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data.modifiedCount> 0){
            Swal.fire({
                icon: 'success',
                title: 'Coffee Information Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              })
           }
           else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Update Information Before Submission'
              })
           }
        })
    }



    return (
        <form onSubmit={handleUpdateCoffee} className="w-4/5 mx-auto mt-32 bg-[#F4F3F0] p-20 rounded-2xl">
            <div className="flex justify-between items-center gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Coffee</span>
                    </label>
                    <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Chef</span>
                    </label>
                    <input type="text" name="chef" placeholder="Chef" defaultValue={chef} className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="flex justify-between items-center gap-5 mt-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Supplier</span>
                    </label>
                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Taste</span>
                    </label>
                    <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="flex justify-between items-center gap-5 mt-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Category</span>
                    </label>
                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Details</span>
                    </label>
                    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="mt-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="mt-5">
                <div className="form-control w-full">
                    <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C]" />
                </div>
            </div>
        </form>
    );
}

export default UpdateCoffee;