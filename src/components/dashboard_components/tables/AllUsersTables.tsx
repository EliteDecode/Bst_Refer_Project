import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import { UserProps } from "@/types/majorTypes";
import { usersData } from "@/utils/dashboardContents";
import { Box } from "@mui/material";
import { LuPartyPopper } from "react-icons/lu";
import { MdInfoOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

type DataIndex = keyof UserProps;

const AllUsersTables: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<UserProps> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}>
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}>
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<UserProps> = [
    {
      title: "Name",
      dataIndex: "fullname",
      key: "fullname",
      ...getColumnSearchProps("fullname"),
      render: (_, record) => (
        <span className="text-[12px]">{record?.fullname}</span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
      render: (_, record) => (
        <span className="text-[12px]">{record?.email}</span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",

      ...getColumnSearchProps("phone"),
      render: (_, record) => (
        <span className="text-[12px]">{record?.phone}</span>
      ),
    },

    {
      title: "Status",
      render: (_, record) => (
        <Box>
          {record.status === "successful" ? (
            <div className="text-green-500 flex items-center space-x-1  w-full m-auto justify-center capitalize border text-[11px]  bg-green-50 rounded-lg cursor-pointer py-1 px-1 ">
              <LuPartyPopper /> <span className="text-[9px]">Successful</span>
            </div>
          ) : (
            <div className="text-orange-500 flex items-center space-x-1  w-full m-auto justify-center capitalize border text-[11px]  bg-orange-50 rounded-lg cursor-pointer py-1 px-1 ">
              <MdInfoOutline /> <span className="text-[9px]">Pending</span>
            </div>
          )}
        </Box>
      ),
    },
    {
      title: "Action",

      key: "action",
      fixed: "right",
      render: () => (
        <div className="text-blue-500 flex items-center space-x-1   w-full m-auto justify-center capitalize border text-[11px]  bg-blue-50 rounded-lg cursor-pointer py-1 px-1 ">
          <FaRegEye /> <span className="text-[9px]">View User</span>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={usersData} size="small" />;
};

export default AllUsersTables;
