import React from "react";

import Header from "../src/components/Header/Header";

import MembersTable from "@/domains/members/components/MembersTable";

const members = () => {
  return (
    <>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounder 3xl">
        <Header category="Team" title="Members" />
        <MembersTable />
      </div>
    </>
  );
};

export default members;
