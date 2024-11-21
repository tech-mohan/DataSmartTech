import React from "react";
import "./Details.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { div } from "framer-motion/client";

export default function Details() {
  const { state } = useLocation();
  const [MemberData, setMemberData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state?.Id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/member/${state.Id}`
          );
          const json = await response.json();
          setMemberData(json);
          console.log(MemberData);
          setLoading(false);
        } catch (error) {
          console.log("error is:", error);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [state]);
  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : MemberData ? (
        <div>
          <h1>Details of {MemberData.member_name}</h1>
          <div className="row details">
            <div className="col-lg-6 col-md-12 col-sm-12 det-left">
              <img src={MemberData.image} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 det-right">
              <div className="member-det">
                <h3>Name : {MemberData.member_name}</h3>
                <h3>ID : {MemberData.id}</h3>
                <h3>Role : {MemberData.role}</h3>
                <h3>Deportment : {MemberData.department}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>No Data Found!</h2>
      )}
    </div>
  );
}
