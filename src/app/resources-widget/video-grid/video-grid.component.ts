import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-video-grid',
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './video-grid.component.html',
  styleUrl: './video-grid.component.scss',
})
export class VideoGridComponent {
  @Input() data = [];
  @Input() filter = [];
  selectedFilter = 0;
  itemsPerPage = 12;
  currentPage = 1;
  setFiltessr(data) {
    this.selectedFilter = data;
  }
  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get currentItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
