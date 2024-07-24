import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountNum:number=20): number {


    // value=500   ,, //discountNum = 50
    let disDiv=discountNum/100; //50/100=.5
    let mul=value*disDiv; //500 * .5 = 250
    let result=value-mul; // 500 - 250 = 250
    return result;
  }

}
