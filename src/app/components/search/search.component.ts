import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  isSearchBoxActive: boolean = false;

  @HostListener('window:popstate')
  onPopState() {
    this.searchTerm = '';
    this.resetChartHolders();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.searchTerm?.length<2) {
      this.resetChartHolders();
    }
  }

  resetChartHolders(): void {
    const chartHolders = document.getElementsByTagName('app-chart-holder');

    for (let i = 0; i < chartHolders.length; i++) {
      const chartHolder = chartHolders[i] as HTMLElement;
      chartHolder.style.display = 'block';
      chartHolder.style.border = 'none';
      chartHolder.style.boxShadow = 'none';
    }
  }

  search(): void {
    const chartHolders = document.getElementsByTagName('app-chart-holder');
    const searchTermLowerCase = this.searchTerm.toLowerCase();

    for (let i = 0; i < chartHolders.length; i++) {
      const chartHolder = chartHolders[i] as HTMLElement;
      const chartHolderText = chartHolder.innerText.toLowerCase();

      if (!chartHolderText.includes(searchTermLowerCase)) {
        chartHolder.style.display = 'none';
        chartHolder.style.boxShadow = 'none';
      } 
    }
  }

  toggleSearchBox(): void {
    this.isSearchBoxActive = !this.isSearchBoxActive;
  }
  
}
