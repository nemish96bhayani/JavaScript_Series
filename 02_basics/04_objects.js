// const tinderUser = new Object();  // singleton object

const tinderUser = {}; // non single ton object

tinderUser.id = "123abc";
tinderUser.name = "Nemish";
tinderUser.loggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstName: "Nemish",
      lastname: "Bhayani",
    },
  },
};

console.log(regularUser.fullname.userFullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "Nemish",
    email: "n@gmail.com",
  },
  {
    id: 1,
    name: "Nemish",
    email: "n@gmail.com",
  },
  {
    id: 1,
    name: "Nemish",
    email: "n@gmail.com",
  },
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("loggedin"));

// const mobile = {
//     brand: "Apple",
//     model: "iPhone 12",
//     color: "Black",
//     price: 80000,
//     isInsured: true,
//     purchaseDate: "2021-12-25",
//     warranty: 1,
//     accessories: ["Charger", "Earphones", "Case"],
//     calculatePrice: function () {
//         return this.price - this.price * 0.1;
//     },
// }

// console.log(mobile.calculatePrice());

const course = {
  courseName: "JavaScript",
  price: "999",
  courseInstructor: "Nemish Bhayani",
};

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

{
  "name": "Nemish",
  "course": "JavaScript",
  "price": "free",
}