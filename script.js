// 1

//2
const capitalizeWord = (string) => {
  return string.map((word) => {
    return word
      .split("_")
      .map((s) => {
        return s[0].toUpperCase() + s.slice(1);
      })
      .join(" ");
  });
};

console.log(capitalizeWord(["hello_world", "i_ want", "learn_react"]));
// 3
const users = [
  { name: "Lasha", age: 30 },
  { name: "Giorgi", age: 18 },
  { name: "Saba", age: 20 },
  { name: "Shota", age: 40 },
  { name: "Ilia", age: 33 },
];

users.sort(function (a, b) {
  return a.age - b.age;
});

console.log(users);
