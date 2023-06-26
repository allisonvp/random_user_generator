import { User } from "@/interfaces/User";

const userData = {
  gender: "male",
  name: { first: "Allison", last: "Velarde" },
  email: "max.farias@example.com",
  dob: {
    age: 34,
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/74.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
  },
  nat: "BR",
  location: {
    country: "Brazil",
    state: "Espírito Santo",
    city: "Duque de Caxias",
  },
  login: {
    uuid: "a6a04441-e128-4de1-8539-ac1b8fe618fb",
    username: "brownlion673",
  },
};

it('has a languageName of "TypeScript"', () => {
  const user: User = userData;
  expect(user.gender).toEqual("male");
});

it('has a languageName of "TypeScript"', () => {
  const user: User = userData;
  expect(user.dob.age).toEqual(34);
});
