import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { Article } from './article.entity';

/**
 * 用户存储类
 */
@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  user_id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 30, unique: true })
  username: string;

  @ApiProperty()
  @Column('text')
  password: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 200, default: '' })
  avatar: string;

  @ApiProperty()
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @ApiProperty()
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @ApiProperty()
  @Column({ type: 'boolean', default: () => false })
  isAdmin: boolean;

  @BeforeUpdate()
  updateTimestamp() {
    this.updateTime = new Date();
  }

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[];
}
