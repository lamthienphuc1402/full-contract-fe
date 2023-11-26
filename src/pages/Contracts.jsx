import axios from "axios";
import { useEffect, useState } from "react";
import ContractCard from "../components/ContractCard";
import { Link } from "react-router-dom";
import CreateContract from "./CreateContract";

const Contracts = () => {
  const [listContracts, setListContracts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const getContracts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/contracts`,
        {
          signal: controller.signal,
        }
      );

      console.log(response.status);
      if (response.status === 200 && response.data)
        setListContracts(response.data.contracts);
    };
    getContracts();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className="h-screen space-y-5 px-4">
      <h1 className="text-center text-3xl font-bold mt-5">List of Contracts</h1>
 
        <table className="w-full ">
          <thead className="text-center">

            <th>Mã Hợp Đồng</th>
            <th>Họ tên người mua</th>
            <th>Sinh năm</th>
            <th>CMND</th>
            <th>Địa chỉ</th>
            <th>SĐT</th>
            <th>Mã Bất Động Sản</th>
            <th>Ngày lập</th>
            <th>Giá trị</th>
            <th>Số tiền cọc</th>
            <th>Số tiền còn lại</th>
            <th>Trạng thái</th>
            <th>Actions</th>

          </thead>
          <tbody>
              {listContracts.map((contract) => (
                <tr className="text-center" key={contract.id}>
                  {console.log("status: " + contract.status)}
                  <td>{contract.full_contract_code}</td>
                  <td>{contract.customer_name}</td>
                  <td>{contract.year_of_birth}</td>
                  <td>{contract.ssn}</td>
                  <td>{contract.customer_address}</td>
                  <td>{contract.mobile}</td>
                  <td>{contract.property_id}</td>
                  <td>{contract.date_of_contract}</td>
                  <td>{contract.price}</td>
                  <td>{contract.deposit}</td>
                  <td>{contract.remain}</td>
                  <td>{contract.status ? "Hoan thanh" : "Chua hoan thanh"}</td>
                  <td>nuts</td>


                
                </tr>
              ))}
          </tbody>
        
        </table>

      <div className="flex h-fit justify-center items-center">
        <Link
          className="bg-subColor font-bold text-lg px-5 py-3 rounded-lg hover:bg-mainColor"
          to="/create"
        >
          Create New Contract
        </Link>
      </div>
    </main>
  );
};

export default Contracts;
