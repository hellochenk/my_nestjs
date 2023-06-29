import { ApiProperty } from '@nestjs/swagger';
import { Photo } from '@src/photo/photo.entities';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
