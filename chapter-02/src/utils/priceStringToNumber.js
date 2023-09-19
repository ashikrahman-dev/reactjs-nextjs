export default function priceStringToNumber(string) {
    const priceString = string.product.price;
    const priceStringWithOutComma = priceString.replace(/,/g, "");
    const currentValue = parseInt(priceStringWithOutComma);

    return currentValue;
}
