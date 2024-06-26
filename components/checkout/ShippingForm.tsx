import { CheckoutProduct } from "@/typings";
import { useState } from "react";

const ShippingForm = ({ products }: { products: CheckoutProduct[] }) => {
  const [shippingOption, setShippingOption] = useState("flatRate5");
  const [country, setCountry] = useState("Bangladesh");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  console.log(products);
  const handleShippingOptionChange = (e: any) => {
    setShippingOption(e.target.value);
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value);
  };

  const handleStateChange = (e: any) => {
    setState(e.target.value);
  };

  const handleZipcodeChange = (e: any) => {
    setZipcode(e.target.value);
  };

  return (
    <>
      <div className="flex w-auto gap-4 my-12 flex-col pr-4 justify-end">
        <div className="mb-4 flex gap-20">
          <span className="font-bold">Shipping</span>
          <div className="ml-4 flex flex-col gap-6">
            <div className="flex justify-end gap-4">
              <label htmlFor="flatRate5">Flat Rate: $5.00</label>
              <input
                type="radio"
                id="flatRate5"
                value="flatRate5"
                checked={shippingOption === "flatRate5"}
                onChange={(e) => handleShippingOptionChange(e)}
                className="mr-2"
              />
            </div>
            <div className="flex justify-end gap-4">
              <label htmlFor="flatRate5">Free Shipping</label>
              <input
                type="radio"
                id="flatRate5"
                value="flatRate5"
                checked={shippingOption === "flatRate5"}
                onChange={(e) => handleShippingOptionChange(e)}
                className="mr-2"
              />
            </div>
            <div className="flex justify-end gap-4">
              <label htmlFor="flatRate5">Flat Rate: $10.00</label>
              <input
                type="radio"
                id="flatRate5"
                value="flatRate5"
                checked={shippingOption === "flatRate5"}
                onChange={(e) => handleShippingOptionChange(e)}
                className="mr-2"
              />
            </div>
            <div className="flex justify-end gap-4">
              <label htmlFor="flatRate5">Local Delivery: $2.00</label>
              <input
                type="radio"
                id="flatRate5"
                value="flatRate5"
                checked={shippingOption === "flatRate5"}
                onChange={(e) => handleShippingOptionChange(e)}
                className="mr-2"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-4 items-end">
          <label htmlFor="country" className="font-bold">
            Country
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => handleCountryChange(e)}
            className="block w-full border-gray-300 border rounded py-2"
          >
            <option value="Bangladesh">Georgia</option>
            <option value="Bangladesh">Germany</option>
            <option value="Bangladesh">France</option>
            <option value="Bangladesh">Spain</option>
            <option value="Bangladesh">ITaly</option>
          </select>
        </div>

        <div className="mb-4 flex flex-col gap-4 items-end">
          <label htmlFor="state" className="font-bold">
            Region/city
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => handleStateChange(e)}
            className="block w-full border border-gray-300 rounded py-2"
          />
        </div>

        <div className="mb-4 flex flex-col gap-4 items-end">
          <label htmlFor="zipcode" className="font-bold">
            Postcode/Zipcode
          </label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => handleZipcodeChange(e)}
            className="block w-full border  border-gray-300 rounded py-2"
          />
        </div>
        <button className="  bg-[#3b82f6] text-white px-10 md:px-14 py-2 md:py-4 hover:bg-white hover:text-[#ff2020] border duration-500 border-white hover:border-[#3b82f6] rounded-md ">
          Update Details
        </button>
      </div>
    </>
  );
};

export default ShippingForm;
