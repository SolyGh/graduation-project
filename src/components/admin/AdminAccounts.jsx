import React, { useState, useEffect } from "react";
import { useGetAdmins } from "./useGetAdmins";
import axios from "axios";
import { handleAddAdmin } from "./handleAddAdmin";
import Loader from "../Loader/Loader";
import deleteAdmin from "./useDeleteAdmin";

const token = localStorage.getItem("token") || undefined;

const AdminAccounts = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPass, setNewAdminPass] = useState("");

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/admin-users?role=admin`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setAdmins(data.data.users);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const user = JSON.parse(localStorage.getItem("persist:root"));

  const userData = JSON.parse(user.auth);

  return (
    <div className="p-6 border-b-2 rounded-md border-[#BB5CB9]">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-12 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Admins Accounts</h2>
      {loading && !error && <Loader />}
      {error && <p className="mt-24 text-2xl text-red-700">Some Error Occured</p>}
      {!loading && !error && (
        <div>
          <div className="flex items-center gap-2 w-10/12 ml-2 mb-4">
            <div className="w-1/4 text-[#350E5C] text-xl font-bold">Name</div>
            <div className="w-1/3 text-[#350E5C] text-xl font-bold">Email</div>
            <div className="w-1/6  text-[#350E5C] text-xl font-bold">Role</div>
          </div>
          {admins?.map((admin) => (
            <div key={admin._id} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 w-10/12 width-respnsive">
                <div className="w-1/4 mb-2">
                  {/* <label className="text-[#350E5C] text-xl">Name</label> */}
                  <p class="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{admin?.name}</p>
                </div>
                <div className="w-1/3 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Email</label> */}
                  <p class="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{admin?.email}</p>
                </div>
                <div className="w-1/6 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Role</label> */}
                  <p class="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{admin?.role}</p>
                </div>
                {userData?.user?.role === "super-admin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 26"
                    className="w-5 h-6 text-[#350E5C] cursor-pointer"
                    onClick={async () => await deleteAdmin(admin?._id)}
                  >
                    <path
                      fill="currentColor"
                      d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="m-4 flex items-center w-full gap-4">
        <input
          type="text"
          className="w-1/4 py-2 px-4 text-[#350E5C] border-inherit shadow font-semibold"
          onChange={(e) => setNewAdminName(e.target.value)}
          value={newAdminName}
          placeholder="name"
        />
        <input
          type="email"
          className="w-1/4 py-2 px-4 text-[#350E5C] border-inherit shadow font-semibold"
          onChange={(e) => setNewAdminEmail(e.target.value)}
          value={newAdminEmail}
          placeholder="Add email"
        />
        <input
          type="password"
          className="w-1/4 py-2 px-4 text-[#350E5C] border-inherit shadow font-semibold"
          onChange={(e) => setNewAdminPass(e.target.value)}
          value={newAdminPass}
          placeholder="Add passawrd"
        />
        <button
          type="submit"
          className="text-[#350E5C] font-semibold text-base bg-[#D095CF] py-2 px-4 rounded-lg transition-colors hover:bg-[#b963b8]"
          onClick={async () => {
            await handleAddAdmin(newAdminName, newAdminEmail, newAdminPass);
            setNewAdminName("");
            setNewAdminEmail("");
            setNewAdminPass("");
          }}
        >
          Add Admin
        </button>
      </div>
    </div>
  );
};

export default AdminAccounts;
