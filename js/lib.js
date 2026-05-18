const productlist = [
    {id:"1", name:"Dao nhật", price: 100000, image:"../assets/images/dao-nhat.jpg", productLink:"product-detail.html"},
    {id:"2", name:"Dao thái", price: 150000, image:"../assets/images/dao-thai.jpg", productLink:"product-detail.html"},
    {id:"3", name:"Dao đa năng", price: 200000, image:"../assets/images/dao-da-nang.jpg", productLink:"product-detail.html"},
    {id:"4", name:"Dao bếp", price: 250000, image:"../assets/images/dao-bep.jpg", productLink:"product-detail.html"},
    {id:"5", name:"Dao cắt", price: 300000, image:"../assets/images/dao-cat.jpg", productLink:"product-detail.html"},
    {id:"6", name:"Dao gọt", price: 350000, image:"../assets/images/dao-got.jpg", productLink:"product-detail.html"},
    {id:"7", name:"Dao chặt", price: 400000, image:"../assets/images/dao-chat.jpg", productLink:"product-detail.html"},
]
function loadProduct(products)
{
    for(let i = 0; i < products.length; i++)
    {
        addProduct(products[i].id, products[i].name, products[i].price, products[i].image, products[i].productLink);
    }
}
function addProduct(id, name, price, image, hyperLink)
{
    const productitem = document.createElement("div");
    productitem.setAttribute("class", "product-item");
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    productImage.appendChild(Image);
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price + "/con");
    productPrice.appendChild(productPriceText);
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink + "?id=" + id);
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);
    productitem.appendChild(productImage);
    productitem.appendChild(productInfo);
    document.getElementById("product-list").appendChild(productitem);
}  
loadProduct(productlist);