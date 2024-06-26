type Address = {
  street1: string;
  street2: string;
};

interface Business {
  name: string;
  phoneNumber: string;
  locations: {
    address: Address;
    primaryLocation: boolean;
  };
  menu: {
    [key: string]: {
      name: string;
      ingredients: string[];
    };
  };
}
