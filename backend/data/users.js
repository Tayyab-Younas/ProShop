import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "John@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },

  {
    name: "Herry",
    email: "Herry@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
