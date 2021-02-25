import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

/**
 * @class UserService
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(user: User) {
    const result: User = await this.usersRepository.create(user);
    return result;
  }

  async findAll() {
    const allUser: User[] = await this.usersRepository.find();
    return allUser;
  }

  async findOne(user_id: number): Promise<User> {
    // fix Repository Bug 'into undefined return first User'
    if (user_id == undefined) return undefined;
    const user: User = await this.usersRepository.findOne(user_id);
    return user;
  }

  async update(user_id: number, user: User) {
    const result = await this.usersRepository.update(user_id, user);
    return result;
  }

  async remove(user_id: number) {
    const user: User = await this.findOne(user_id);
    const result = await this.usersRepository.remove(user);
    return result;
  }
}
