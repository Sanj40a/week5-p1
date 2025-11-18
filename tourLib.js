<<<<<<< HEAD
// Updated data model
/*
{
  "name": "Adventures in Tokyo - 5 Day Tour",
  "info": "Discover the vibrant mix of tradition and modernity in Tokyo. Visit ancient temples like Senso-ji, explore futuristic districts such as Shibuya and Akihabara, and enjoy authentic Japanese cuisine from sushi to ramen. Guided tours will take you through bustling markets, serene gardens, and hidden alleyways filled with local charm.",
  "image": "https://tx00-web-en.github.io/resources/img/tours/tour-2.jpeg",
  "price": "1,450",
  "duration": "5 days",
  "groupSize": "Max 12 people",
  "rating": 4.8,
  "availability": true
}
*/

=======
// data model
/*
{
  "name": "Best of Paris in 7 Days Tour",
  "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
  "price": "1,995"
}
*/
 
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
let tourArray = [];
let nextId = 1;

const getAll = () => {
  return tourArray;
};

<<<<<<< HEAD
const addOne = (name, info, image, price, duration, groupSize, rating, availability) => {
  if (!name || !info || !image || !price || !duration || !groupSize || rating === undefined || availability === undefined) {
=======
const addOne = (name, info, image, price) => {
  if (!name || !info || !image || !price) {
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
    return false;
  }
  const newTour = {
    id: nextId++,
<<<<<<< HEAD
    name,
    info,
    image,
    price,
    duration,
    groupSize,
    rating,
    availability,
=======
    name: name,
    info: info,
    image: image,
    price: price,
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
  };
  tourArray.push(newTour);
  return newTour;
};

const findById = (id) => {
  const tour = tourArray.find((tour) => tour.id === Number(id));
<<<<<<< HEAD
  return tour || false;
=======
  if (tour) {
    return tour;
  } else return false;
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
};

const updateOneById = (id, updatedData) => {
  const tour = findById(id);
  if (tour) {
<<<<<<< HEAD
    if (updatedData.name) tour.name = updatedData.name;
    if (updatedData.info) tour.info = updatedData.info;
    if (updatedData.image) tour.image = updatedData.image;
    if (updatedData.price) tour.price = updatedData.price;
    if (updatedData.duration) tour.duration = updatedData.duration;
    if (updatedData.groupSize) tour.groupSize = updatedData.groupSize;
    if (updatedData.rating !== undefined) tour.rating = updatedData.rating;
    if (updatedData.availability !== undefined) tour.availability = updatedData.availability;
=======
    if (updatedData.name) {
      tour.name = updatedData.name;
    }
    if (updatedData.info) {
      tour.info = updatedData.info;
    }
    if (updatedData.image) {
      tour.image = updatedData.image;
    }
    if (updatedData.price) {
      tour.price = updatedData.price;
    }
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
    return tour;
  }
  return false;
};

const deleteOneById = (id) => {
  const tour = findById(id);
  if (tour) {
<<<<<<< HEAD
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((tour) => tour.id !== Number(id));
    return tourArray.length < initialLength;
  }
  return false;
};

if (require.main === module) {
  let result = addOne(
    "Adventures in Tokyo - 5 Day Tour",
    "Discover the vibrant mix of tradition and modernity in Tokyo.",
    "https://tx00-web-en.github.io/resources/img/tours/tour-2.jpeg",
    "1,450",
    "5 days",
    "Max 12 people",
    4.8,
    true
  );
  console.log(result);
  result = addOne(
    "Finland in 7 Days Tour",
    "Finland is synonymous.",
    "https://www.course-api.com/images/tours/tour-2.jpeg",
    800,
    "7 days",
    "Max 10 people",
    4.5,
    true
  );
=======
    const initialLenght = tourArray.length;
    tourArray = tourArray.filter((tour) => tour.id !== Number(id));
    return tourArray.length < initialLenght;
  } else return false;
};
if (require.main === module) {
  let result = addOne("Paris in 7 Days Tour", "Paris is synonymous.", "https://www.course-api.com/images/tours/tour-1.jpeg", 500);
  console.log(result);
  result = addOne("Finland in 7 Days Tour", "Finland is synonymous.", "https://www.course-api.com/images/tours/tour-2.jpeg", 800);
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(2));
  console.log(
<<<<<<< HEAD
    "updateById called:",
    updateOneById(2, {
      name: "Italy in 7 Days Tour",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/tours/tour-2.jpeg",
      price: 800,
      duration: "7 days",
      groupSize: "Max 8 people",
      rating: 4.7,
      availability: false,
=======
    "updateById called:", updateOneById(2, {
      name: "Italy in 7 Days Tour",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/tours/tour-2.jpeg",
      price: 800
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
    })
  );
  console.log("findById called after item updated:", findById(2));
  console.log("deleteById called:", deleteOneById(2));
  console.log("findById called after item deleted:", findById(2));
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
