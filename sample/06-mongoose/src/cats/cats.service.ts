import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  //CatsService에도  @InjectModel(Cat.name)을 넣음. 어떤 catModel을 넣을것인가 
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,//CatDocument도 필요함. 
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> { // Promise<Cat> 인 이유는 디비에 들어가는게 Promise이기 때문임. 
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save(); //저장. 
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec(); //가져옥. 
  }
}
