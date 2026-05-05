const productlist = [
    {id:"1", name:"Dao nhật", price: 100000, image:"../assets/images/dao-nhat.jpg", productLink:"product-detail.html"},
    {id:"2", name:"Dao thái", price: 150000, image:"../assets/images/dao-thai.jpg", productLink:"product-detail.html"},
    {id:"3", name:"Dao đa năng", price: 200000, image:"../assets/images/dao-da-nang.jpg", productLink:"product-detail.html"},
    {id:"4", name:"Dao bếp", price: 250000, image:"../assets/images/dao-bep.jpg", productLink:"product-detail.html"},
    {id:"5", name:"Dao cắt", price: 300000, image:"../assets/images/dao-cat.jpg", productLink:"product-detail.html"},
    {id:"6", name:"Dao gọt", price: 350000, image:"../assets/images/dao-got.jpg", productLink:"product-detail.html"},
    {id:"7", name:"Dao chặt", price: 400000, image:"../assets/images/dao-chat.jpg", productLink:"product-detail.html"},
]
function addProduct(id, name, price, image, hyperLink)
{
    //tạo khung chứa 1 item
    const productitem = document.createElement("div");
    productitem.setAttribute("class", "product-item");
    //tạo khung chứa hình
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");
    //tạo đối tượng hình ảnh
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    //gắn hình vào khung
    productImage.appendChild(Image);
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");
    //tạo paragraph 1
    const productName = document.createElement("p");
    productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);
    //tạo paragraph 2
    const productPrice = document.createElement("p");
    productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);
    //hyperLink
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);
    //thêm vào khung chứa thông tin
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);
    //thêm vào khung chứa 1 item
    productitem.appendChild(productImage);
    productitem.appendChild(productInfo);
    document.getElementById("product-list").appendChild(productitem);
}  
