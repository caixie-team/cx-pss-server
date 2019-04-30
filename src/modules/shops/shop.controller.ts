import { Controller, Post, Body } from '@nestjs/common';
import { ShopService } from '@app/modules/shops/shop.service';
import { CreateShopDto } from '@app/modules/shops/dto/create-shop.dto';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {

    }

    @Post('create')
    async create(@Body() createShopDto: CreateShopDto) {
        return this.shopService.create(createShopDto,1);
    }

}