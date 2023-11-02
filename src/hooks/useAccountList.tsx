import React from "react";
import { getAccount } from "../apis/UserApi";

const useAccountList = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const userList = await getAccount({});
    setData(userList.data);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return [data, getData];
};

export default useAccountList;
