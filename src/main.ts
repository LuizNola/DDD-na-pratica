import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("123", "José Luiz");
const address = new Address("Rua Dois", 124, "123-145", "Praia Grande");
customer.Address = address;

customer.activate();

const item1 = new OrderItem("1", "item 1", 10);
const item2 = new OrderItem("2", "item 2", 15);

const order = new Order("1", "123", [item1, item2])