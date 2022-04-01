import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(values: any[], filter: string, args: any): any {
    if (!values || !values.length) {
      return [];
    }
    if (!filter) {
      return values;
    }

    filter = filter.toLowerCase();

    if (filter && Array.isArray(values)) {
      // const keys = Object.keys(values[0]);
      // return values.filter(v => v && keys.some(k => v[k].toLowerCase().indexOf(filter) >= 0));
      if (args.multiple) {
        return values.filter(item => {
          return args.keys.some(function(k: string | number) {
            return item[k].toLowerCase().includes(filter);
          });
        });
        //return values.filter(item => args.keys.reduce((key, v) => c[v] || {}, item).indexOf(filter) >= 0);
        //return values.filter(o => Object.keys(o).some(k => args.keys.includes(k) && o[k].toLowerCase().includes(values)));
      } else {
        return values.filter(v => v && v[args.key].toLowerCase().indexOf(filter) >= 0);
      }
    }
  }
}
