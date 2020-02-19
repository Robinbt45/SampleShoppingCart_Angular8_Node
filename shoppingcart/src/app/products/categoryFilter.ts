import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'categoryPipe'
})

export class CategoryPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string ) {
        // convert user input in lowercase
        userInput = userInput ? userInput.toLowerCase() : null;
        // return according to user input
        return userInput ? value.filter( (product) =>
            ((product.category.toLowerCase().indexOf(userInput) !== -1))) : value;
    }
}
