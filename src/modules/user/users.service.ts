import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async save(user: User): Promise<User> {
    const userEntity = this.usersRepository.create(user);
    return await this.usersRepository.save(userEntity);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
