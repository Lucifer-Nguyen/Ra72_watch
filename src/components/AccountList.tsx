import React, { useEffect } from "react";
import { Button, Flex, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ExclamationCircleOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAccount, getAccount } from "../apis/UserApi";
import useAccountList from "../hooks/useAccountList";
import UserModal from "./AccountModal";

interface DataType {
  id: string;
  username: string;
  fullname: string;
  email: string;
  address: string;
}
// delete api/v1/users/12
const AccountList: React.FC = () => {

  const { confirm } = Modal;

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "UserName",
      dataIndex: "username",
    },
    {
      title: "FullName",
      dataIndex: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space size="middle">
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              dispatch({
                type: "edit",
                payload: {
                  isOpen: true,
                  initValue: {
                    id: record.id,
                    username: record.username,
                    fullname: record.fullname,
                    email: record.email,
                    address: record.address,
                  },
                },
              });
            }}
          >
            Edit
          </a>
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              confirm({
                title: "Confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure???",
                okText: "OK",
                cancelText: "Cancel",
                onOk: async () => {
                  await deleteAccount(record.id);
                  await getData();
                },
              });
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const [data, getData]: any = useAccountList();
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch({
      type: "create",
      payload: {
        isOpen: true,
        initValue: {},
      },
    });
  };

  return (
    <>
      <UserModal />
      <Flex justify="flex-end" style={{ marginBottom: 20 }}>
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
          ADD
        </Button>
      </Flex>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </>
  );
};

export default AccountList;
