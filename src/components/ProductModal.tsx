import { Form, Input, Modal, Radio, Select, notification } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../store/reducers/ProductReducer";
import { useEffect } from "react";
import { addProduct, updateProduct } from "../apis/ProductApi";

const ProductModal = (props: { getData: () => void }) => {
  const [form] = Form.useForm();
  const [productType, setProductType] = React.useState("");

  const isOpen = useSelector(
    (state: { product: UserState }) => state.product.isOpen
  );
  const initialValue = useSelector(
    (state: { product: UserState }) => state.product.initValue
  );
  const onChange = (value: string) => {
    setProductType(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const dispatch = useDispatch();
  useEffect(() => form.resetFields(), [initialValue]);
  const handleCreateNewProduct = async (values: any) => {
    const response = await addProduct(
      values.name,
      values.image,
      values.gender,
      values.productManufacturing,
      values.productType,
      values.price
    );
    if (response.data.id) {
      notification.success({
        message: "Success",
        description: "Create new product successfully",
        duration: 3,
        placement: "bottomRight",
      });
      props.getData();
    } else {
      notification.error({
        message: "Fail",
        description: "Failed to create new product",
        duration: 3,
        placement: "bottomRight",
      });
    }
  };
  const handleUpdateProduct = async (values: any) => {
    const response = await updateProduct(
      initialValue.id,
      values.name,
      values.image,
      values.gender,
      values.productManufacturing,
      values.productType,
      values.price
    );
    if (response.data.id) {
      notification.success({
        message: "Success",
        description: "Update product successfully",
        duration: 3,
        placement: "bottomRight",
      });
      props.getData();
    } else {
      notification.error({
        message: "Fail",
        description: "Failed to update product",
        duration: 3,
        placement: "bottomRight",
      });
    }
  };
  return (
    <Modal
      forceRender
      open={isOpen}
      title={initialValue.id ? "Edit" : "Create"}
      okText={initialValue.id ? "Edit" : "Create"}
      cancelText="Cancel"
      onCancel={() => {
        form.resetFields();
        dispatch({ type: "close" });
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log(values);
            {
              initialValue.id
                ? handleUpdateProduct(values)
                : handleCreateNewProduct(values);
            }
            dispatch({ type: "close" });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={initialValue}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Username is require!!!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="image" label="Image">
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Input />
        </Form.Item>
        <Form.Item name="productManufacturing" label="Manufacturing">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input type="number" />
        </Form.Item>
        <Form.Item name="productType" label="Product Type">
          <Select
            showSearch
            placeholder="Select "
            optionFilterProp="children"
            // onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            value={initialValue.id ? initialValue.productType : ""}
            options={[
              {
                value: "CHAINSAWS",
                label: "CHAINSAWS",
              },
              {
                value: "BRUSHCUTTERS",
                label: "BRUSHCUTTERS",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;
