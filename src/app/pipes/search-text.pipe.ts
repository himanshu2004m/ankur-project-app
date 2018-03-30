import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(items: any[], textSearch: string): any[] {
    if(!items) return [];
    if(!textSearch) return items;
    textSearch = textSearch.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().includes(textSearch);
    });
   }

}
