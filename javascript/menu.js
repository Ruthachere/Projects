let foodContainer = document.querySelector('.grid-container');
const fooditem = [
    {
        FoodName: "Pancakes",
        foodimg: 'images/pancakes-2291908_1280.jpg',
        price: "RS 250",
        category: "Breakfast",
        des: "These pancakes make for a wholesome breakfast or brunch. There are many varieties of pancakes made and this is one such tasty pancakes which the kids are going to love."
    },
    {
        FoodName: "Aloo Paratha",
        foodimg: 'images/Aloo Paratha.jpg',
        price: "RS 200",
        category: "Breakfast",
        des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
    },
    {
        FoodName: "Egg Paratha",
        foodimg: 'images/egg.jpg',
        price: "RS 150",
        category: "Breakfast",
        des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
    },
    {
        FoodName: "Fried Rice",
        foodimg: 'images/orig.jpg',
        price: "RS 400",
        category: "Lunch",
        des: "The most fascinating, fabulously fantastic and simple ,lightweight and  most favorite dish. It’s simple, fast and delicious Cameroon's Recipe."
    },
    {
        FoodName: "Chicken",
        foodimg: 'images/0cc225da421b2748f600aa18c9bd8529.jpg',
        price: "RS 400",
        category: "Lunch",
        des: "Chicken is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
    },
    {
        FoodName: "Aloo Ghobi",
        foodimg: 'images/Aloo Ghobi.jpg',
        price: "RS 200",
        category: "Lunch",
        des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
    },
    {
        FoodName: "Pasta",
        foodimg: 'images/OIP (1).jpg',
        price: "RS 200",
        category: "Lunch",
        des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has pasta cooked with lamb or mutton in a thick stew."
    },

    {
        FoodName: "Banana Shakes",
        foodimg: 'images/banana.webp',
        price: "RS 150",
        category: "Shakes",
        des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies."
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'images/mango.jpg',
        price: "RS 150",
        category: "Shakes",
        des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
    },
    {
        FoodName: "Strawberry Shakes",
        foodimg: 'images/strawberry.jpg',
        price: "RS 150",
        category: "Shakes",
        des: "Strawberry shake is a cool and tempting fruit drink prepared by simply blending ripe strawberries pieces, milk and sugar. To keep things simple and easy, this recipe is the best."
    },

    {
        FoodName: "Pasta with shrimp",
        foodimg: 'images/pastashrimp.jpg',
        price: "RS 600",
        category: "Dinner",
        des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
    },
    {
        FoodName: "Fish Salad",
        foodimg: 'images/imag.jpg',
        price: "RS 250",
        category: "Dinner",
        des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe."
    },
    {
        FoodName: "Trophical Fruit salad",
        foodimg: 'images/TROPICAL-FRUIT-SALAD-SQUARE.jpg',
        price: "RS 600",
        category: "Dinner",
        des: "Very good dinner meal made with pinapple, strawberries, mango, orange and lot more. Contains the all the vitamins you need"
    }
];
const foodbox = document.querySelectorAll('.griditem');
const menu = document.querySelectorAll('.btn');
window.addEventListener("DOMContentLoaded", function() {
    displayFood(fooditem);
});
menu.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = fooditem.filter(function(item) {    
           if (item.category === category) {
            return item; 
           }       
        }) ;
        if (category === "all") {
            displayFood(fooditem);
           } else {
            displayFood(menuCategory);
           }
    });
   
});
// function displayFood(item) {
// let food = item.map(function(item) {
//    return ` <div class="griditem">
//        <div class="product-img">
//            <img src="${item.foodimg}" alt="" class="image">
//        </div>
//        <div class="product-des">
//            <h5>${item.FoodName} <span>${item.price}</span> </h5>
   
//            <p>${item.des}</p>
//        </div>
//    </div>`  ;
// });
// food = food.join("");
// foodContainer.innerHTML = food;
// };
function displayFood(item) {
    foodContainer.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
    const listitem = ` <div class="griditem">
    <div class="product-img">
        <img src="${item[i].foodimg}" alt="" class="image">
    </div>
    <div class="product-des">
    <div class="para">
        <h2>${item[i].FoodName}</h2>
        <span>${item[i].price}</span> 
        </div>
        <p>${item[i].des}</p>
    </div>
</div>`
foodContainer.innerHTML += listitem; 
    }  
}

