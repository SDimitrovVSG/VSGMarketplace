import { myOrderComponent } from "../components/myOrderComponent.js";
import { loadMyOrders } from "../src/itemsService.js";

const MyOrders = async (): Promise<void> => {
    const main = document.querySelector("main") as HTMLElement;
    main.id = "myOrdersMain";
    main.innerHTML = `
    <div id="headingSection">
        <span class="nameColumn">Name</span>
        <span class="qtyColumn">QTY</span>
        <span class="priceColumn">Price</span>
        <span class="orderDateColumn">Order Date</span>
        <span class="orderStatus">Status</span>
    </div>
    `;

    const user: string | null = sessionStorage.getItem("user");
    const email: string = user
        ? JSON.parse(user).username
        : "eredzhepov@vsgbg.com";

    type Order = {
        id: number;
        quantity: number;
        date: string;
        status: string;
        fullName: string;
        price: number;
    };
    const orders: Order[] = await loadMyOrders(email);
    orders.forEach((p: Order) => {
        myOrderComponent(p);
    });
};

export default MyOrders;
