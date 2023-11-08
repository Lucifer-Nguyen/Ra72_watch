import React, { useState } from "react";
import { Space, Table, Tag, Modal, Button, Flex, notification } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import {
  deleteProduct,
  getProduct,
  getProductPaging,
} from "../apis/ProductApi";
import ProductModal from "./ProductModal";
import { useDispatch } from "react-redux";

interface DataType {
  id: number;
  name: string;
  image: string;
  gender: string;
  productManufacturing: string;
  price: number;
  productType: string;
}

const ProductList: React.FC = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const handleClose = () => {};
  const showModal = () => {
    dispatch({
      type: "create",
      payload: {
        isOpen: true,
        initValue: {},
      },
    });
  };
  const { confirm } = Modal;
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (url) => (
        <img
          src={url}
          alt=""
          style={{ width: "120px", height: "100px", backgroundSize: "cover" }}
        />
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Manufacturing",
      dataIndex: "productManufacturing",
      key: "productManufacturing",
    },
    {
      title: "Type",
      dataIndex: "productType",
      key: "productType",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
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
            <EditOutlined style={{ color: "orange" }} /> Update
          </a>
          <a
            onClick={(event: any) => {
              event.preventDefault();
              confirm({
                title: "Confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure",
                okText: "Ok",
                cancelText: "Cancel",
                onOk: async () => {
                  console.log(record);
                  await deleteProduct(record.id);
                  notification.warning({
                    message: "Deleted",
                    description: "Product has been removed",
                    duration: 3,
                    placement: "bottomRight",
                  });
                  getData();
                },
                onCancel: () => {},
              });
            }}
          >
            <DeleteOutlined style={{ color: "red" }} /> Delete
          </a>
        </Space>
      ),
    },
  ];
  const [total, setTotal] = React.useState(0);
  const getData = async (page: number = 1) => {
    const { data, total } = await getProductPaging({
      productTypes: ["Products"],
      pageSize: 2,
      pageNumber: page,
    });
    setData(data);
    setTotal(total);
  };
  React.useEffect(() => {
    getData(1);
  }, []);
  const token = localStorage.getItem("accesstoken");
  const handleChangePage = async (page: number) => {
    await getData(page);
  };
  return token ? (
    <>
      <ProductModal getData={getData} />
      <Flex justify="flex-end" style={{ marginBottom: "20px" }}>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        >
          Add
        </Button>
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{
          pageSize: 2,
          total: total,
          onChange: handleChangePage,
        }}
      />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProductList;
