import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from '@app/modules/shops/dto/create-shop.dto';
import { Shop } from '@app/entity/shops/shop.entity';
import { UserShop } from '@app/entity/shops/user-shop.entity';
import { User } from '@app/entity/users/user.entity';


@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Shop) private readonly shopRepository: Repository<Shop>,
        @InjectRepository(UserShop) private readonly userShopRepository: Repository<UserShop>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {

    }

    /**
     * create shop
     * @param dto
     * @param userId 
     */
    async create(dto: CreateShopDto, userId: number) {
        const newShop = new Shop();
        newShop.shopName = dto.shopName;
        newShop.address = dto.address;
        newShop.contacts = dto.contacts;
        newShop.phoneNumber = dto.phoneNumber;
        newShop.expiredAt = 0;
        newShop.createdAt = new Date();
        newShop.updatedAt = new Date();
        const shopData = await this.shopRepository.save(newShop);
        const userData = await this.userRepository.findOne(userId);

        const newUserShop = new UserShop();
        newUserShop.user = userData;
        newUserShop.shop = shopData;
        newUserShop.shopRole = 1;
        newUserShop.createdAt = new Date();
        newUserShop.updatedAt = new Date();
        await this.userShopRepository.save(newUserShop);

        return true;
    }
}