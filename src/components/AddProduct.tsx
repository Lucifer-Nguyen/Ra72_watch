import React, { useState } from "react";
import { Modal, Select, Input, notification } from "antd";
import { addProduct } from "../apis/ProductApi";
// import { toast } from "react-toastify";

function AddChainsawModal(props: { open: boolean; handleClose: () => void }) {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [productManufacturing, setProductManufacturing] = React.useState("");
  const [image, setImage] = React.useState("");
  const [productType, setProductType] = React.useState("");
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
  const handleOk = async () => {
    const response = await addProduct(
      name,
      gender,
      productManufacturing,
      image,
      productType,
      price
    );
    console.log(response);
    if (response.data.id) {
      notification.success({
        message: "Success",
        description: "Create new product successfully",
        duration: 3,
      });
      props.handleClose();
    } else {
      notification.error({
        message: "Fail",
        description: "Failed to create new product",
        duration: 3,
      });
    }
  };
  const handleCancel = () => {
    props.handleClose();
  };

  return (
    <>
      <Modal
        title="Add new product"
        open={props.open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ width: "100%" }}>
          <span>Product Name:</span>
          <Input
            title="product name"
            type="text"
            value={name}
            onChange={(event: any) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span>image:</span>
          <Input
            title="product name"
            type="text"
            value={image}
            onChange={(event: any) => {
              setImage(event.target.value);
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span>gender:</span>
          <Input
            title="product name"
            type="text"
            value={image}
            onChange={(event: any) => {
              setImage(event.target.value);
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span>manufacturing:</span>
          <Input
            title="product name"
            type="text"
            value={image}
            onChange={(event: any) => {
              setImage(event.target.value);
            }}
          />
        </div>

        <div>Product Type</div>

        <div style={{ width: "100%" }}>
          <span>Price:</span>
          <Input
            title="product name"
            type="number"
            value={price}
            onChange={(event: any) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
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
      </Modal>
    </>
  );
}

export default AddChainsawModal;
