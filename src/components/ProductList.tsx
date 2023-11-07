import React, { useEffect } from "react";
import { Button, Flex, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAccount, getAccount, getProduct } from "../apis/AccountApi";
import UserModal from "./AccountModal";

interface DataType {
  id: string;
  name: string;
  image: string;
  gender: string;
  productManufacturing: string;
  productType: string;
  price: number;
}
// delete api/v1/users/12
const ProductList: React.FC = () => {
  const [data, setData] = React.useState([]);
  const { confirm } = Modal;
  const dispatch = useDispatch();

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (url) => <img src={url} alt="" />,
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Manufacturing",
      dataIndex: "productManufacturing",
    },
    {
      title: "Type",
      dataIndex: "productType",
    },
    {
      title: "Price",
      dataIndex: "price",
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
                    name: record.name,
                    image: record.image,
                    gender: record.gender,
                    productManufacturing: record.productManufacturing,
                    productType: record.productType,
                    price: record.price,
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
  const getData = async () => {
    const response = await getProduct();
    console.log(response);
    setData(response.data);
  };
  React.useEffect(() => {
    getData();
  }, []);
  const token = localStorage.getItem("accesstoken");
  //
  return token ? (
    <>
      <h1 style={{ textAlign: "center" }}>ProductList</h1>
      <Flex justify="flex-end" style={{ marginBottom: "20px" }}>
        <Button type="primary" icon={<PlusCircleOutlined />}>
          Add Product
        </Button>
      </Flex>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProductList;
