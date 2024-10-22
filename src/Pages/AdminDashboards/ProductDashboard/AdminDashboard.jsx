import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductTable from "./ProductTable";
import UserTable from "./UserTable";
const AdminDashboard = () => {
  const [selected, setSelected] = useState("products");

  return (
    <div className="flex">
      <Sidebar onSelect={setSelected} />
      <div className="flex-1 p-4">
        {selected === "products" ? <ProductTable /> : <UserTable />}{" "}
      </div>
    </div>
  );
};

export default AdminDashboard;
