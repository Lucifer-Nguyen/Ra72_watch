const initialState = {
  isOpen: false,
  initValue: {},
};
export type UserState = {
  isOpen: boolean;
  initValue: {
    id?: string;
    name?: string;
    avatarPath?: string;
  };
};
type MyAction = {
  type: "create" | "edit" | "close";
  payload: {
    isOpen: boolean;
    initValue: {
      id?: string;
      name?: string;
      avatarPath?: string;
    };
  };
};
export const userReducer = (state = initialState, action: MyAction) => {
  console.log( action.payload);
  switch (action.type) {
    case "create":
    case "edit":
      return {
        isOpen: action.payload.isOpen,
        initValue: action.payload.initValue,
      };
    case "close":
      return {
        ...initialState,
      };
    default: {
      return state;
    }
  }
};
