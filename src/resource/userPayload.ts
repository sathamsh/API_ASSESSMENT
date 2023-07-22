import { faker } from "@faker-js/faker";

export const createUserPayload = (): any => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    first_name: firstName,
    last_name: lastName,
    avatar: faker.image.avatar(),
    id: faker.string.uuid(),
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
      provider: "reqres.in",
    }),
  };
};
