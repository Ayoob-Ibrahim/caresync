import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchDropdown',
    standalone: true
})
export class SearchDropdownPipe implements PipeTransform {
    transform(items: string[], searchText: string): string[] {
        if (!items || !searchText) {
            return items ?? [];
        }
        const lowerSearch = searchText.toLowerCase();
        return items.filter(item => item.toLowerCase().includes(lowerSearch));
    }
}
