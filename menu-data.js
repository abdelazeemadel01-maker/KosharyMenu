
const menuData = [
  {
    id: "section-1",
    category: "الكشري",
    categoryEn: "Koshari",
    items: [
      { name: "علبة ميني", nameEn: "Mini Koshari Box", price: 20, image: "koshary.jpg" },
      { name: "علبة كرتون صغيرة", nameEn: "Small Koshari Box", price: 25, image: "koshary.jpg" },
      { name: "علبة كرتون وسط", nameEn: "Medium Koshari Box", price: 30, image: "koshary.jpg" },
      { name: "علبة كرتون", nameEn: "Regular Koshari Box", price: 35, image: "koshary.jpg" },
      { name: "علبة كرتون كبيرة", nameEn: "Large Koshari Box", price: 40, image: "koshary.jpg" },
      { name: "علبة العدوي", nameEn: "El Adawy Special Box", price: 45, image: "koshary.jpg" },
      { name: "علبة جامبو", nameEn: "Jumbo Koshari Box", price: 50, image: "koshary.jpg" },
      { name: "فويل كبير", nameEn: "Large Foil Tray", price: 50, image: "koshary.jpg" },
      { name: "فويل أمي في القلب", nameEn: "Ommy Fel Alb Foil Tray", price: 55, image: "koshary.jpg" }
    ]
  },
  {
    id: "section-2",
    category: "الطواجن",
    categoryEn: "Tagines",
    items: [
      { name: "طاجن لحمة", nameEn: "Meat Tagine", price: 45, image: "tagine.jpg" },
      { name: "طاجن فراخ", nameEn: "Chicken Tagine", price: 50, image: "tagine.jpg" },
      { name: "ميكس لحمة", nameEn: "Mixed Meat Tagine", price: 65, image: "tagine.jpg" },
      { name: "ميكس فراخ", nameEn: "Mixed Chicken Tagine", price: 70, image: "tagine.jpg" },
      { name: "طاجن فراخ موتزاريلا", nameEn: "Chicken Mozzarella Tagine", price: 70, image: "tagine.jpg" },
      { name: "طاجن لحمة موتزاريلا", nameEn: "Meat Mozzarella Tagine", price: 65, image: "tagine.jpg" }
    ]
  },
  {
    id: "section-3",
    category: "بيتزا حواوشي",
    categoryEn: "Hawawshi Pizza",
    items: [
      { name: "بيتزا حواوشي", nameEn: "Hawawshi Pizza", price: 50, image: "pizza.jpg" },
      { name: "بيتزا حواوشي وسط", nameEn: "Medium Hawawshi Pizza", price: 60, image: "pizza.jpg" },
      { name: "بيتزا حواوشي كبير", nameEn: "Large Hawawshi Pizza", price: 70, image: "pizza.jpg" },
      { name: "بيتزا حواوشي العدوي", nameEn: "El Adawy Special Hawawshi Pizza", price: 90, image: "pizza.jpg" },
      { name: "إضافة جبنة موتزاريلا", nameEn: "Extra Mozzarella Cheese", price: 25, image: "pizza.jpg" }
    ]
  },
  {
    id: "section-4",
    category: "كريب العدوي",
    categoryEn: "El Adawy Crepes",
    items: [
      { name: "كريب بطاطس", nameEn: "Potato Crepe", price: 35, image: "crepe.jpg" },
      { name: "كريب بانيه", nameEn: "Breaded Chicken Crepe", price: 65, image: "crepe.jpg" },
      { name: "كريب زنجر", nameEn: "Zinger Crepe", price: 70, image: "crepe.jpg" },
      { name: "كريب لحوم", nameEn: "Meat Crepe", price: 100, image: "crepe.jpg" },
      { name: "كريب ميكس فراخ", nameEn: "Mixed Chicken Crepe", price: 100, image: "crepe.jpg" },
      { name: "كريب شيش", nameEn: "Shish Tawook Crepe", price: 70, image: "crepe.jpg" },
      { name: "كريب كفتة", nameEn: "Kofta Crepe", price: 70, image: "crepe.jpg" },
      { name: "كريب شاورمة", nameEn: "Shawarma Crepe", price: 70, image: "crepe.jpg" }
    ]
  },
  {
    id: "section-5",
    category: "حواوشي إسكندراني",
    categoryEn: "Alexandrian Hawawshi",
    items: [
      { name: "حواوشي صغير", nameEn: "Small Hawawshi", price: 30, image: "hawawshi.jpg" },
      { name: "حواوشي وسط", nameEn: "Medium Hawawshi", price: 40, image: "hawawshi.jpg" },
      { name: "حواوشي كبير", nameEn: "Large Hawawshi", price: 50, image: "hawawshi.jpg" },
      { name: "حواوشي العدوي", nameEn: "El Adawy Special Hawawshi", price: 60, image: "hawawshi.jpg" }
    ]
  },
  {
    id: "section-6",
    category: "الحلو",
    categoryEn: "Desserts",
    items: [
      { name: "أرز باللبن", nameEn: "Rice Pudding", price: 15, image: "dessert.jpg" },
      { name: "أرز باللبن فرن", nameEn: "Baked Rice Pudding", price: 20, image: "dessert.jpg" },
      { name: "أرز باللبن بالكنافة", nameEn: "Rice Pudding with Kunafa", price: 30, image: "dessert.jpg" },
      { name: "أرز باللبن بالمكسرات", nameEn: "Rice Pudding with Nuts", price: 30, image: "dessert.jpg" },
      { name: "قنبلة", nameEn: "Kunafa Bomb Dessert", price: 30, image: "dessert.jpg" },
      { name: "كريم كراميل", nameEn: "Creme Caramel", price: 30, image: "dessert.jpg" },
      { name: "مهلبية", nameEn: "Muhallabia", price: 30, image: "dessert.jpg" },
      { name: "قرع عسل", nameEn: "Sweet Pumpkin Dessert", price: 30, image: "dessert.jpg" },
      { name: "أم علي", nameEn: "Om Ali", price: 30, image: "dessert.jpg" },
      { name: "كب كيك", nameEn: "Cupcake", price: 30, image: "dessert.jpg" },
      { name: "ديسباسيتو", nameEn: "Despacito Dessert", price: 30, image: "dessert.jpg" }
    ]
  },
  {
    id: "section-7",
    category: "الإضافات",
    categoryEn: "Extras",
    items: [
      { name: "تقلية", nameEn: "Fried Onion Topping", price: 10, image: "sides.jpg" },
      { name: "عيش توست", nameEn: "Toasted Bread", price: 10, image: "sides.jpg" },
      { name: "مخللة - شطة زيت", nameEn: "Pickles - Chili Oil", price: 10, image: "sides.jpg" },
      { name: "سلطة خضراء", nameEn: "Green Salad", price: 10, image: "sides.jpg" },
      { name: "خيار مخلل طماطم", nameEn: "Pickled Cucumber and Tomato", price: 10, image: "sides.jpg" }
    ]
  },
  {
    id: "section-8",
    category: "المشروبات",
    categoryEn: "Drinks",
    items: [
      { name: "مياه معدنية", nameEn: "Mineral Water", price: 5, image: "drinks.jpg" },
      { name: "كانز كبير", nameEn: "Large Can", price: 20, image: "drinks.jpg" },
      { name: "لتر", nameEn: "1 Liter Drink", price: 40, image: "drinks.jpg" },
      { name: "2 لتر", nameEn: "2 Liter Drink", price: 45, image: "drinks.jpg" }
    ]
  }
];
