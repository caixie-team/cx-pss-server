export class CreateUserDto {
    readonly nickName: string;
    readonly gender: number;
    readonly openId: string;
    readonly avatarUrl: string;
    readonly country: string;
    readonly province: string;
    readonly city: string;
    readonly phoneNumber: string;
    readonly status: number;
}
