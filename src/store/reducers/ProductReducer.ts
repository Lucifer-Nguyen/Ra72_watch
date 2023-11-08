const initialState = {
    isOpen: false,
    initValue: {},
    data: {},
  };
  export type UserState = {
    isOpen: boolean;
    initValue: {
      id: number;
      name?: string;
      image?: string;
      gender?: string;
      productManufacturing?: string;
      productType?: string;
      price?: number;
    };
  };
  type MyAction = {
    type: "edit" | "create" | "close";
    payload: {
      isOpen: boolean;
      initValue: {
        id?: number;
        name?: string;
        image?: string;
        gender?: string;
        productManufacturing?: string;
        productType?: string;
        price?: number;
      };
    };
  };
  export const productReducer = (state = initialState, action: MyAction) => {
    switch (action.type) {
      case "edit":
      case "create":
        return {
          isOpen: action.payload.isOpen,
          initValue: action.payload.initValue,
        };
      case "close":
        return {
          isOpen: false,
          initValue: {},
        };
      default: {
        return state;
      }
    }
  };
  