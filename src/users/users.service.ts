import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      userName: 'John',
      password: 'changeme',
    },
    {
      userId: 2,
      userName: 'Robson',
      password: 'guess',
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === userName);
  }
}
