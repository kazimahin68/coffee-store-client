import swal from 'sweetalert';


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        // console.log(newCoffee)

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal({
                    title: "Success",
                    text: "Coffee Information added successfully",
                    icon: "success",
                });
                form.reset();

            })
    }


    return (
        <form onSubmit={handleAddCoffee} className="w-4/5 mx-auto mt-32 bg-[#F4F3F0] p-20 rounded-2xl">
            <div className="flex justify-between items-center gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Coffee</span>
                    </label>
                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Chef</span>
                    </label>
                    <input type="text" name="chef" placeholder="Chef" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="flex justify-between items-center gap-5 mt-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Supplier</span>
                    </label>
                    <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Taste</span>
                    </label>
                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="flex justify-between items-center gap-5 mt-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Details</span>
                    </label>
                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="mt-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="mt-5">
                <div className="form-control w-full">
                    <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C]" />
                </div>
            </div>
        </form>
    );
};

export default AddCoffee;