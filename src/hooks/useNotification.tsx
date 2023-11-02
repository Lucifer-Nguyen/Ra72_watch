import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, notification, Space } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const useNoti = () => {
  const [api, contextHolder] = notification.useNotification();
  const [openNoti, setOpenNoti] = useState<any>(null);

  useEffect(() => {
    const openNotificationWithIcon: any = (type: NotificationType, title: string, description: string) => {
      api[type]({
        message: title,
        description: description,
      });
    };
    setOpenNoti(openNotificationWithIcon);
  }, [api]);
  return [openNoti, contextHolder];
};

export default useNoti;
