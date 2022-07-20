import React, { useMemo, useState } from "react";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import Image from "next/image";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
} from "@syncfusion/ej2-react-grids";

export function getAbsoluteDate(date: Date) {
  if (date == null) {
    return "-";
  }
  return format(new Date(date), "dd MMM yyyy");
}

import { ListMembersRequest, useMember } from "../api/listMembers";
import { Member } from "../types/member";
import { Group } from "@mantine/core";

interface MemberProps {
  params?: Omit<ListMembersRequest, "page" | "page_size">;
}

const MembersTable = ({ params }: MemberProps) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const editing = { allowDeleting: true, allowEditing: true };
  const { data: response } = useMember({
    params: {
      ...params,
      page,
      page_size: pageSize,
    },
  });
  const members = useMemo(() => response?.data || [], [response]);

  const EmployeeProfile = (props: Member) => (
    <Group spacing={10}>
      {props?.avatar ? (
        <Image
          className="rounded-full"
          width={30}
          height={30}
          src={props?.avatar}
          alt="employee"
        />
      ) : null}
      <p>{props?.name}</p>
    </Group>
  );

  const DateTemplate = (props: Member) => (
    <p>{getAbsoluteDate(props.hireDate)}</p>
  );

  return (
    <>
      <link
        href="https://cdn.syncfusion.com/ej2/material.css"
        rel="stylesheet"
        type="text/css"
      />
      <GridComponent
        dataSource={members}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ColumnDirective
            width="100"
            headerText="Member"
            template={EmployeeProfile}
          />

          <ColumnDirective field="jobRole" width="100" headerText="Job Role" />
          <ColumnDirective
            template={DateTemplate}
            width="100"
            headerText="Hire Date"
          />
          <ColumnDirective field="boss" width="100" headerText="Reports To" />
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </>
  );
};

export default MembersTable;
