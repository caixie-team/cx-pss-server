import { BaseEntity } from '@app/entity/base.entity';
import { DeepPartial, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Column } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

  constructor(input?: DeepPartial<User>) {
    super(input);
  }

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  nickName: string;

  @Column()
  gender: number;

  @Column({type: 'varchar'})
  openId: string;

  @Column({ type: 'varchar',nullable:true,length:256 })
  avatarUrl?: string;

  @Column({ type: 'varchar',nullable:true,length:50 })
  country?: string;

  @Column({ type: 'varchar',nullable:true,length:50 })
  province?: string;

  @Column({ type: 'varchar',nullable:true,length:50 })
  city?: string;

  @Column({ type: 'varchar',nullable:true,length:20 })
  phoneNumber?: string;
  
  @Column()
  status: number;
  
  // @OneToMany(type => Comment, comment => comment.user, {
  //   cascade: true,
  // })
  // comments?: Comment[];
}
