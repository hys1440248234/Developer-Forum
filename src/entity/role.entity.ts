import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 权限存储类
 */
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column('varchar', { length: 200 })
  role_name: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updateTime = new Date();
  }
}
