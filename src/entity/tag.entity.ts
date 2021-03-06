import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from './article.entity';

@Entity()
/**
 *标签存储类
 */
export class Tag {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  tag_id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 30, unique: true })
  tagname: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 30, unique: true })
  nickname: string;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Article, (article) => article.tag)
  articles: Article[];
}
