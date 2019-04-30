import { BaseEntity } from '@app/entity/base.entity';
import { Entity, Column, DeepPartial, OneToMany } from 'typeorm'
import { UserShop } from '@app/entity/shops/user-shop.entity';

@Entity('shops')
export class Shop extends BaseEntity {
    constructor(input?: DeepPartial<Shop>) {
        super(input);
    }

    @Column({
        type: 'varchar',
        length: 100
    })
    shopName: string; //店铺名称

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true
    })
    address: string; //店铺地址

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })
    contacts: string; //联系人

    @Column({
        type: 'varchar',
        length: 20,
        nullable: true
    })
    phoneNumber: string; //联系电话

    @Column()
    expiredAt: number;     //过期时间

    @OneToMany(type => UserShop, userShop => userShop.shop)
    userShops?: UserShop[];
}