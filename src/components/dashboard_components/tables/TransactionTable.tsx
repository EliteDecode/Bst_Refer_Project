import { TransactionProps } from "@/types/majorTypes";
import { SearchOutlined } from "@ant-design/icons";
import { Box } from "@mui/material";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { Minus } from "lucide-react";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { LuPartyPopper } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";

type DataIndex = keyof TransactionProps;

const TransactionTable: React.FC = () => {
  const { wallets } = useSelector((state: any) => state.wallet);
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
  ): TableColumnType<TransactionProps> => ({
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

  const columns: TableColumnsType<TransactionProps> = [
    {
      title: "Referral Name",
      dataIndex: "referralName",
      key: "referralName",
      ...getColumnSearchProps("referralName"),
      render: (_, record) => (
        <span className="text-[12px]">{record?.referralName}</span>
      ),
    },
    {
      title: "Referral Number",
      dataIndex: "",
      key: "referralPhone",
      ...getColumnSearchProps("referralPhone"),
      render: (_, record) => (
        <span className="text-[12px]">{record?.referralPhone}</span>
      ),
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      ...getColumnSearchProps("amount"),
      render: (_, record) => (
        <span className="text-[12px]">{record?.amount.toLocaleString()}</span>
      ),
    },

    {
      title: "Transaction Type",
      render: (_, record) => (
        <Box>
          {record.type === "credit" ? (
            <div className="text-green-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-green-50 rounded-lg py-0.5 px-1 ">
              <LuPartyPopper /> <span className="text-[9px]">Credit</span>
            </div>
          ) : (
            <div className="text-red-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-red-50 rounded-lg py-0.5 px-1 ">
              <Minus /> <span className="text-[9px]">Debit</span>
            </div>
          )}
        </Box>
      ),
    },
    {
      title: "Date",
      render: (_, record) => (
        <Box>
          <div className="text-purple-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-purple-50 rounded-lg py-0.5 px-1 ">
            <SlCalender />{" "}
            <span className="text-[9px]">
              {new Date(record.date).toLocaleString("en", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </Box>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={wallets?.transactions} size="small" />
  );
};

export default TransactionTable;
