import users from '../data/user.json';

export class User {
  constructor() {}

  //Get all users
  getUsers = () => {
    return users ?? [];
  };

  //Get user by id
  getUserById = (id: number) => {
    const result = users.find((user) => {
      return user.id === id;
    });
    return result;
  };
}
