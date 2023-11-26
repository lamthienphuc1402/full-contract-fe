import React from "react";

const ContractCard = ({
  full_contract_code,
  customer_name,
  year_of_birth,
  ssn,
  customer_address,
  mobile,
  property_id,
  date_of_contract,
  price,
  deposit,
  remain,
  status,
}) => {
  return (
    <div className="h-fit border border-subColor p-2">
      <h1>
        Contract Code: <span className="font-bold">{full_contract_code}</span>
      </h1>
      <h2>
        Customer Name: <span className="font-bold">{customer_name}</span>
      </h2>
      <p>Address: {customer_address}</p>
      <div className="grid grid-cols-2">
        <div></div>
      </div>
    </div>
  );
};

export default ContractCard;
