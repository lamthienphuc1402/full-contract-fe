import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/u569.png"
const CreateContract = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = formRef.current;
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/create_contract`,
      {
        customer_name: formData.customerName.value,
        year_of_birth: formData.yearOfBirth.value,
        ssn: formData.ssn.value,
        customer_address: formData.address.value,
        mobile: formData.mobile.value,
        property_id: formData.propertyId.value,
        price: formData.price.value,
        deposit: formData.deposit.value,
        remain: formData.remain.value,
      }
    );
    console.log(response.data);
    if (response.data.status) {
      alert("Add successfully");
      navigate("/contracts");
      return;
    }
    alert("Can't add this data");
    return;
  };

  return (
    <div style={{backgroundImage: `url(${Image})`}} className="h-screen w-full ">
      <h1 className="text-center pt-5 text-white  font-bold text-3xl mb-5">
        Create New Contract
      </h1>
      <div className="flex justify-center items-center w-full">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-mainColor w-fit p-4 space-y-4"
        >
          <div>
            <label className="font-bold mr-2">Customer Name: </label>
            <input
              name="customerName"
              className="mb-3 border border-black px-3 py-1.5"
              type="text"
              placeholder="Input your name"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">Year Of Birth: </label>
            <input
              name="yearOfBirth"
              className="mb-3 border border-black px-3 py-1.5"
              type="number"
              placeholder="Input your year of birth"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">SSN: </label>
            <input
              name="ssn"
              className="mb-3 border border-black px-3 py-1.5"
              type="text"
              placeholder="Input your ssn"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">Mobile: </label>
            <input
              name="mobile"
              className="mb-3 border border-black px-3 py-1.5"
              type="text"
              placeholder="Input your mobile"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">Property Id: </label>
            <input
              name="propertyId"
              className="mb-3 border border-black px-3 py-1.5"
              type="number"
              placeholder="Input your property id"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold">Address: </label>
            <textarea
              name="address"
              className="mb-3 w-full"
              type="text"
              placeholder="Input your address"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">Price: </label>
            <input
              name="price"
              className="mb-3 border border-black px-3 py-1.5"
              type="number"
              placeholder="Input your price"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">Deposit: </label>
            <input
              name="deposit"
              className="mb-3 border border-black px-3 py-1.5"
              type="number"
              placeholder="Input your deposit"
              required
            />
            <hr />
          </div>
          <div>
            <label className="font-bold mr-2">Remain: </label>
            <input
              name="remain"
              className="mb-3 border border-black px-3 py-1.5"
              type="number"
              placeholder="Input your remain"
              required
            />
            <hr />
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <input
              type="submit"
              value="LUU"
              className="bg-black p-5 text-white font-bold rounded-md hover:bg-gray-500 hover:cursor-pointer"
            />
            <input
              type="submit"
              value="HUY"
              className="bg-red-500 p-5 text-white font-bold rounded-md hover:bg-red-300 hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContract;
