import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop, UserShop, User } from '@app/entity';

import { ShopController } from '@app/modules/shops/shop.controller';

import { ShopService } from '@app/modules/shops/shop.service';
import { UserModule } from '@app/modules/users/user.module';

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forFeature([
            Shop, UserShop, User
        ]),
    ],
    controllers: [ShopController],
    providers: [ShopService],
    exports: [ShopService],

})
export class ShopModule {

}