export default function generate() {
    let items = [];

    for (let i = 0; i < 20; i++) {
        let item = {
            id: i,
            name: "Product "  + i,
            price: Math.ceil( Math.random() * 1000),
            quantity: 0
        }

        items.push(item);
    }

    return items;
}