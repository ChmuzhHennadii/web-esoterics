import { IEntity } from "../ientity";

export class Good implements IEntity {
    Id: number = Good.idGen++;
    Title: string = "Title of good";
    Category: string = "Category of good";
    ImageUrl: string = "https://st4.depositphotos.com/6344220/27826/i/1600/depositphotos_278264228-stock-photo-mandala-india-astral-esoterics.jpg";
    Price: number = 99;
    Description: string = 'Some long long long long long long long long description';

    static idGen: number = 1;
}