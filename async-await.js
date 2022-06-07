****************************** promises **************************** */

console.log("person1: shows ticket ");
console.log("person2: shows ticket");
const promiseWifeBringingTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 1000);
});
const getPopcorn = promiseWifeBringingTicket.then((t) => {
  console.log(`husband: Lets go in`);
  console.log(`wife:No, I am hungry`);
  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});
const getButter = getPopcorn.then((t) => {
  console.log("Wife: I want extra butter ");
  return new Promise((resolve, reject) => {
    resolve(`${t} butter`);
  });
});

getColdDrinks = getButter.then((t) => {
  console.log(`I want Cold drinks`);
  return new Promise((resolve, reject) => {
    resolve(` Cold drinks`);
  });
});

getColdDrinks.then((t) => console.log(t));

console.log("person4: shows ticket");
console.log("person5: shows ticket");

/*************************** Async await   */
console.log("person1: shows ticket ");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const getButter = new Promise((resolve, reject) => resolve("Butter"));

  const getColdDrinks = new Promise((resolve, reject) => resolve("coldrinks"));

  //If we want to call all Promises at once
  // let [pop, butt, cold] = await Promise.all([
  //   getPopcorn,
  //   getButter,
  //   getColdDrinks,
  // ]);
  // console.log(`${pop} , ${butt}, ${cold}`);

  let ticket = await promiseWifeBringingTicket;

  console.log(`Husband:I have ${ticket} We should go in`);
  console.log(`Wife: No, I am hungry`);

  let popcorn = await getPopcorn;
  console.log(`Husband:I got ${popcorn}`);
  console.log(`Wife: I need extra butter`);

  let butter = await getButter;
  console.log(`Husband:I got ${butter}`);
  console.log(`Wife: Lets go!, we are getting late`);

  let coldDrinks = await getColdDrinks;
  console.log(`Had a good ${coldDrinks}`);

  return ticket;
};

preMovie().then((m) => console.log(m));

console.log("person4: shows ticket");
console.log("person5: shows ticket");

