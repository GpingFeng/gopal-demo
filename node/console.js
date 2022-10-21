const person = {
  username: "Gopal",
  meta: {
    firstName: "Gopal",
    lastName: "Feng",
    profile: {
      address: { street: "baoan", city: "Shenzhen" },
    },
  },
};

// console.log(JSON.stringify(person, null, 2));
console.dir(person, {depth: null});
