import { BaseEntity } from '@app/entity/base.entity';
import { Entity, Column, DeepPartial, ManyToOne } from 'typeorm'
import { User } from '@app/entity/users/user.entity';
import { Shop } from '@app/entity/shops/shop.entity';


@Entity('user_shop')
export class UserShop extends BaseEntity {
    constructor(input?: DeepPartial<UserShop>) {
        super(input);
    }

    @ManyToOne(type => User, user => user.userShops)
    user: User;

    @ManyToOne(type => Shop, shop => shop.userShops)
    shop: Shop;

    @Column()
    shopRole: number; //店铺角色 1:店主 0:店员
}