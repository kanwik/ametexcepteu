interface Address {
  street: string;
}

const address: Address = {
  street: "Kulas Light"
};

function displayAddress(addr: Address): void {
  console.log(`The address is: ${addr.street}`);
}

displayAddress(address);
