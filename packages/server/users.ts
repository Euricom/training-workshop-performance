import { faker } from "@faker-js/faker";

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUsersFromDb = async () => {
  const users = [] as any[];
  const numberOfUsers = 3000;
  for (let i = 0; i < numberOfUsers; i++) {
    users.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      imageUrl: `https://xsgames.co/randomusers/assets/avatars/male/${randomNumber(1, 70)}.jpg`,
    });
  }
  await new Promise((resolve) => setTimeout(resolve, numberOfUsers));
  return users;
};