import {Injectable} from '@angular/core';
import {Person} from "../interfaces/costumers.interface";

@Injectable()
export class SearchService{

  constructor(){ }

  getList(list: Person[], param: string){
    return list ? list.filter(item => item.name === param) : list;
  }
}
