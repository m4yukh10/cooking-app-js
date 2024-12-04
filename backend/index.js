const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); 
app.use(express.json());

const recipes = {
  "dishes": [
    {
      "name": "Butter Chicken",
      "ingredients": [
        "Chicken",
        "Tomatoes",
        "Cream",
        "Butter",
        "Onions",
        "Garlic",
        "Ginger",
        "Garam masala",
        "Cumin",
        "Turmeric",
        "Red chili powder",
        "Coriander powder",
        "Kasuri methi (dried fenugreek leaves)",
        "Salt",
        "Sugar"
      ]
    },
    {
      "name": "Biryani",
      "ingredients": [
        "Basmati rice",
        "Chicken (or mutton/vegetables)",
        "Yogurt",
        "Onions",
        "Garlic",
        "Ginger",
        "Tomatoes",
        "Biryani masala",
        "Cloves",
        "Cardamom",
        "Cinnamon",
        "Bay leaves",
        "Saffron",
        "Milk",
        "Mint leaves",
        "Coriander leaves",
        "Ghee",
        "Salt"
      ]
    },
    {
      "name": "Paneer Tikka",
      "ingredients": [
        "Paneer (Indian cottage cheese)",
        "Yogurt",
        "Ginger garlic paste",
        "Red chili powder",
        "Turmeric",
        "Cumin powder",
        "Coriander powder",
        "Garam masala",
        "Lemon juice",
        "Bell peppers",
        "Onions",
        "Skewers",
        "Oil"
      ]
    },
    {
      "name": "Chole Bhature",
      "ingredients": [
        "Chickpeas",
        "Onions",
        "Tomatoes",
        "Garlic",
        "Ginger",
        "Chole masala",
        "Turmeric",
        "Cumin seeds",
        "Coriander powder",
        "Amchur (dry mango powder)",
        "Green chilies",
        "Flour",
        "Yogurt",
        "Baking powder",
        "Salt",
        "Oil"
      ]
    },
    {
      "name": "Masala Dosa",
      "ingredients": [
        "Rice",
        "Urad dal (black gram)",
        "Fenugreek seeds",
        "Potatoes",
        "Onions",
        "Green chilies",
        "Turmeric",
        "Curry leaves",
        "Mustard seeds",
        "Salt",
        "Oil"
      ]
    },
    {
      "name": "Samosa",
      "ingredients": [
        "All-purpose flour",
        "Potatoes",
        "Peas",
        "Green chilies",
        "Cumin seeds",
        "Coriander powder",
        "Garam masala",
        "Amchur (dry mango powder)",
        "Salt",
        "Oil for frying",
        "Water"
      ]
    },
    {
      "name": "Rogan Josh",
      "ingredients": [
        "Mutton",
        "Yogurt",
        "Onions",
        "Garlic",
        "Ginger",
        "Kashmiri red chili powder",
        "Fennel powder",
        "Coriander powder",
        "Turmeric",
        "Cloves",
        "Cardamom",
        "Cinnamon",
        "Bay leaves",
        "Mustard oil",
        "Salt"
      ]
    },
    {
      "name": "Palak Paneer",
      "ingredients": [
        "Spinach",
        "Paneer (Indian cottage cheese)",
        "Onions",
        "Garlic",
        "Ginger",
        "Tomatoes",
        "Green chilies",
        "Cumin",
        "Coriander powder",
        "Garam masala",
        "Cream",
        "Salt",
        "Oil"
      ]
    },
    {
      "name": "Pani Puri",
      "ingredients": [
        "Semolina (sooji)",
        "All-purpose flour",
        "Boiled potatoes",
        "Chickpeas",
        "Tamarind",
        "Jaggery",
        "Mint leaves",
        "Green chilies",
        "Black salt",
        "Chaat masala",
        "Cumin powder",
        "Salt",
        "Oil for frying"
      ]
    },
    {
      "name": "Aloo Paratha",
      "ingredients": [
        "Wheat flour",
        "Boiled potatoes",
        "Green chilies",
        "Coriander leaves",
        "Cumin powder",
        "Amchur (dry mango powder)",
        "Salt",
        "Butter or ghee",
        "Water"
      ]
    },
    {
      "name": "Tandoori Chicken",
      "ingredients": [
        "Chicken",
        "Yogurt",
        "Lemon juice",
        "Ginger garlic paste",
        "Turmeric",
        "Red chili powder",
        "Coriander powder",
        "Cumin powder",
        "Garam masala",
        "Salt",
        "Mustard oil"
      ]
    },
    {
      "name": "Dal Makhani",
      "ingredients": [
        "Whole black lentils (urad dal)",
        "Kidney beans (rajma)",
        "Butter",
        "Cream",
        "Tomatoes",
        "Ginger",
        "Garlic",
        "Onions",
        "Cumin",
        "Red chili powder",
        "Garam masala",
        "Salt"
      ]
    },
    {
      "name": "Vada Pav",
      "ingredients": [
        "Potatoes",
        "Green chilies",
        "Garlic",
        "Coriander leaves",
        "Cumin seeds",
        "Turmeric",
        "Besan (gram flour)",
        "Pav (bread rolls)",
        "Tamarind chutney",
        "Green chutney",
        "Oil for frying",
        "Salt"
      ]
    },
    {
      "name": "Hyderabadi Haleem",
      "ingredients": [
        "Mutton",
        "Wheat",
        "Lentils (moong dal, masoor dal, chana dal)",
        "Onions",
        "Ginger garlic paste",
        "Ghee",
        "Green chilies",
        "Cinnamon",
        "Cloves",
        "Cardamom",
        "Bay leaves",
        "Turmeric",
        "Coriander powder",
        "Mint leaves",
        "Salt"
      ]
    },
    {
      "name": "Pav Bhaji",
      "ingredients": [
        "Potatoes",
        "Cauliflower",
        "Green peas",
        "Capsicum",
        "Onions",
        "Tomatoes",
        "Garlic",
        "Butter",
        "Pav bhaji masala",
        "Turmeric",
        "Red chili powder",
        "Pav (bread rolls)",
        "Lemon wedges",
        "Salt"
      ]
    },
    {
      "name": "Gulab Jamun",
      "ingredients": [
        "Khoya (reduced milk)",
        "All-purpose flour",
        "Sugar",
        "Cardamom",
        "Rose water",
        "Baking powder",
        "Ghee or oil for frying"
      ]
    },
    {
      "name": "Dhokla",
      "ingredients": [
        "Gram flour (besan)",
        "Yogurt",
        "Green chilies",
        "Ginger",
        "Mustard seeds",
        "Curry leaves",
        "Eno fruit salt",
        "Sugar",
        "Salt",
        "Oil"
      ]
    },
    {
      "name": "Kheer",
      "ingredients": [
        "Rice",
        "Milk",
        "Sugar",
        "Cardamom",
        "Cashews",
        "Almonds",
        "Raisins",
        "Saffron"
      ]
    },
    {
      "name": "Bhindi Masala",
      "ingredients": [
        "Okra (bhindi)",
        "Onions",
        "Tomatoes",
        "Green chilies",
        "Garlic",
        "Ginger",
        "Coriander powder",
        "Turmeric",
        "Red chili powder",
        "Garam masala",
        "Salt",
        "Oil"
      ]
    },
    {
      "name": "Rasgulla",
      "ingredients": [
        "Milk",
        "Lemon juice",
        "Sugar",
        "Cardamom",
        "Water"
      ]
    }
  ]
}
const procedure = {
  "dishes": [
    {
      "name": "Butter Chicken",
      "procedure": [
        "Marinate the chicken with yogurt, turmeric, chili powder, and salt for 30 minutes.",
        "Sauté onions, garlic, and ginger in butter until golden brown.",
        "Add tomatoes and spices (garam masala, cumin, coriander) and cook until it forms a thick paste.",
        "Add marinated chicken and cook thoroughly.",
        "Stir in cream and kasuri methi.",
        "Cook for 5 minutes and serve hot with naan or rice."
      ]
    },
    {
      "name": "Biryani",
      "procedure": [
        "Wash and soak basmati rice for 30 minutes.",
        "Cook the rice with whole spices (cloves, cardamom, cinnamon, bay leaves) until 70% cooked.",
        "Marinate the chicken with yogurt, ginger garlic paste, and biryani masala.",
        "Fry onions until golden brown, then set aside some for garnishing.",
        "Cook the marinated chicken with tomatoes until tender.",
        "Layer the partially cooked rice and chicken in a pot.",
        "Top with fried onions, saffron milk, mint, and coriander leaves.",
        "Seal the pot with dough and cook on low heat for 20-30 minutes."
      ]
    },
    {
      "name": "Paneer Tikka",
      "procedure": [
        "Marinate the paneer with yogurt, ginger garlic paste, red chili powder, turmeric, cumin, coriander powder, and lemon juice.",
        "Thread the marinated paneer onto skewers along with bell peppers and onions.",
        "Grill the skewers in a preheated oven or on a grill pan for about 10-15 minutes, basting with oil or butter.",
        "Serve hot with green chutney."
      ]
    },
    {
      "name": "Chole Bhature",
      "procedure": [
        "Soak chickpeas overnight and cook them with onions, tomatoes, garlic, ginger, and spices (chole masala, cumin, turmeric).",
        "Prepare the dough for bhature by mixing flour, yogurt, baking powder, and water.",
        "Knead the dough and let it rest for at least 30 minutes.",
        "Roll out the dough into small rounds and deep fry them until golden and puffed.",
        "Serve the chole with hot bhature, garnished with onions, coriander, and lemon wedges."
      ]
    },
    {
      "name": "Masala Dosa",
      "procedure": [
        "Soak rice and urad dal overnight and grind to a smooth batter.",
        "Ferment the batter for 12-24 hours.",
        "For the filling, sauté onions, green chilies, and mustard seeds in oil.",
        "Add boiled and mashed potatoes, turmeric, curry leaves, and salt.",
        "Heat a non-stick pan, pour the batter to form a thin crepe, and cook until golden.",
        "Place the potato filling in the center, fold, and serve with chutney."
      ]
    },
    {
      "name": "Samosa",
      "procedure": [
        "Prepare the filling by boiling potatoes, then sauté them with peas, green chilies, cumin, coriander powder, and garam masala.",
        "Roll out the dough and cut it into circles, then fold them into cones.",
        "Stuff the cones with the potato filling and seal the edges.",
        "Heat oil in a pan and deep fry the samosas until golden brown.",
        "Serve with mint chutney."
      ]
    },
    {
      "name": "Rogan Josh",
      "procedure": [
        "Marinate mutton with yogurt, Kashmiri red chili powder, fennel powder, and salt.",
        "Sauté onions, garlic, and ginger in mustard oil until golden.",
        "Add the marinated mutton and cook until browned.",
        "Add water, cinnamon, cloves, cardamom, and bay leaves.",
        "Simmer until the mutton is tender, and the gravy thickens.",
        "Serve with steamed rice or naan."
      ]
    },
    {
      "name": "Palak Paneer",
      "procedure": [
        "Blanch spinach leaves in boiling water and then blend them into a smooth puree.",
        "Sauté onions, garlic, ginger, and green chilies in oil until golden.",
        "Add tomatoes, cumin, coriander powder, and garam masala.",
        "Stir in the spinach puree and cook for a few minutes.",
        "Add paneer cubes and cook until heated through.",
        "Serve with roti or rice."
      ]
    },
    {
      "name": "Pani Puri",
      "procedure": [
        "Prepare the puris by deep frying the semolina dough into crisp, hollow shells.",
        "Boil the potatoes and chickpeas, then mash and mix with spices and chopped onions.",
        "Prepare the pani (spiced water) with mint leaves, tamarind, black salt, and green chilies.",
        "Stuff the puris with the potato mixture and dip them in the pani before eating."
      ]
    },
    {
      "name": "Aloo Paratha",
      "procedure": [
        "Knead the dough using wheat flour, water, and salt.",
        "For the filling, mash boiled potatoes and mix with green chilies, coriander leaves, cumin powder, and salt.",
        "Divide the dough into small balls and roll them out.",
        "Stuff each ball with the potato filling and roll out into a flatbread.",
        "Cook on a griddle, adding ghee or butter until both sides are golden and crispy.",
        "Serve hot with yogurt or pickle."
      ]
    },
    {
      "name": "Tandoori Chicken",
      "procedure": [
        "Marinate the chicken with yogurt, lemon juice, ginger garlic paste, and tandoori spices.",
        "Allow the chicken to marinate for at least 4 hours.",
        "Preheat the oven or tandoor to a high temperature.",
        "Skewer the marinated chicken and cook for about 25-30 minutes, basting with butter or oil.",
        "Serve hot with naan and salad."
      ]
    },
    {
      "name": "Dal Makhani",
      "procedure": [
        "Soak black lentils and kidney beans overnight.",
        "Pressure cook the lentils and beans with water and salt until soft.",
        "In a pan, sauté onions, garlic, and ginger in butter.",
        "Add tomatoes, cumin, and garam masala, and cook until the tomatoes soften.",
        "Add the cooked lentils and beans, stir well, and simmer for 15-20 minutes.",
        "Finish with a dollop of cream and serve hot with rice or naan."
      ]
    },
    {
      "name": "Vada Pav",
      "procedure": [
        "Prepare the vada filling by boiling potatoes, then sautéing them with green chilies, garlic, and spices.",
        "Shape the mixture into round balls and coat them in a chickpea flour batter.",
        "Deep fry the vadas until golden and crisp.",
        "Serve the vadas in pav (bread rolls) with chutneys and fried green chilies."
      ]
    },
    {
      "name": "Hyderabadi Haleem",
      "procedure": [
        "Soak wheat and lentils overnight.",
        "Cook mutton with onions, ginger garlic paste, and spices until tender.",
        "Blend the wheat and lentils into a smooth paste.",
        "Mix the cooked mutton and the paste together, simmering on low heat.",
        "Add ghee, coriander, and mint leaves, and cook for an additional 15-20 minutes.",
        "Serve hot with fried onions and lemon wedges."
      ]
    },
    {
      "name": "Pav Bhaji",
      "procedure": [
        "Boil the potatoes, cauliflower, and peas until soft.",
        "Mash them together and cook with onions, tomatoes, garlic, and pav bhaji masala.",
        "Simmer for 10-15 minutes to blend the flavors.",
        "Serve the bhaji with buttered pav (bread rolls) and lemon wedges."
      ]
    },
    {
      "name": "Gulab Jamun",
      "procedure": [
        "Mix khoya, flour, and baking powder to form a smooth dough.",
        "Shape the dough into small balls and fry in ghee or oil until golden brown.",
        "Prepare a sugar syrup by boiling sugar and water with cardamom and rose water.",
        "Soak the fried gulab jamuns in the warm sugar syrup for 30 minutes.",
        "Serve warm."
      ]
    },
    {
      "name": "Dhokla",
      "procedure": [
        "Mix gram flour, yogurt, green chilies, and ginger to form a smooth batter.",
        "Add Eno fruit salt and pour the batter into a greased steaming tray.",
        "Steam for 15-20 minutes until the dhokla is cooked.",
        "Temper with mustard seeds, curry leaves, and green chilies.",
        "Serve with chutney."
      ]
    },
    {
      "name": "Kheer",
      "procedure": [
        "Wash and soak rice for 15 minutes.",
        "Boil milk in a heavy pan and add the soaked rice.",
        "Simmer on low heat until the rice softens and the milk thickens.",
        "Add sugar, cardamom, and dried fruits.",
        "Cook for another 10-15 minutes and serve chilled or warm."
      ]
    },
    {
      "name": "Bhindi Masala",
      "procedure": [
        "Wash and slice the okra (bhindi) into small pieces.",
        "Sauté onions, garlic, and ginger in oil until golden.",
        "Add tomatoes, cumin, coriander powder, and garam masala.",
        "Add the okra and cook until tender and slightly crispy.",
        "Serve with roti or rice."
      ]
    },
    {
      "name": "Rasgulla",
      "procedure": [
        "Boil milk and curdle it with lemon juice to form chhena (cottage cheese).",
        "Knead the chhena into a smooth dough and form small balls.",
        "Boil the balls in a sugar syrup made with water, sugar, and cardamom.",
        "Simmer until the rasgullas double in size.",
        "Serve chilled."
      ]
    }
  ]
}

let currentChoice = "";

const john = {"name":"John", "age":30, "car":null}

app.get("/api/procedure", (req,res) => {
  const cook = procedure.dishes.find((dish) => dish.name === currentChoice);
  if (cook) {
    res.send(cook.procedure);
  }
  else {
    res.status(404).json({error: "recipe not found, tere mu mein moot du!"});
  }
  currentChoice = ""
})

app.get('/api/processed', (req, res) => {

  const recipe = recipes.dishes.find((dish) => dish.name === currentChoice);

  if (recipe) {
    res.send(recipe.ingredients); // Send only the matching recipe
  } else {
    res.status(404).json({ error: 'Recipe not found!' });
  }
  
  
})

app.post('/kya-khana-hai/request', (req,res) => {
  const { data } = req.body;
  currentChoice = data;
  console.log(`Data received: ${data}`);
  res.json({ success: true, received: data });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})