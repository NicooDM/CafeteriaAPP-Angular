import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost =[]
    for (const post of value){
       if(post.titulo.indexOf(args)){
        resultPost.push(post)
       }
    }
    return resultPost;
  }

}
