import { Form, Input, Modal, Radio, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../store/reducers/userReducer";
import { useEffect } from "react";
import useNoti from "../hooks/useNotification";

const AccountModal = () => {
  const [form] = Form.useForm();
  const isOpen = useSelector((state: { user: UserState }) => state.user.isOpen);
  const initialValue = useSelector((state: { user: UserState }) => state.user.initValue);
  const dispatch = useDispatch();
  useEffect(() => form.resetFields(), [initialValue]);

  // const [showNoti, contextHolder] = useNoti();

  return (
    <Modal
      forceRender
      open={isOpen}
      title="Create/Edit User"
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
            console.log( values);
            // showNoti("success", "title", "description");
            notification.success({
              message: "ABC",
              description: "DEF",
              duration: 2,
            });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal" initialValues={initialValue}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Username is require!!!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="avatarPath" label="Avatar">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AccountModal;
