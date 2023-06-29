import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from '../photo/photo.entities';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column({ default: true })
  @ApiProperty()
  isActive: boolean;

  @OneToMany(() => Photo, (photo) => photo.user)
  @ApiProperty()
  photos: Photo[];
}
