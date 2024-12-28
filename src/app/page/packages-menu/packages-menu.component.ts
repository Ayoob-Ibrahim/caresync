import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packages-menu',
  imports: [],
  templateUrl: './packages-menu.component.html',
  styleUrl: './packages-menu.component.scss'
})
export class PackagesMenuComponent implements OnInit {
  public packageId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.packageId = this.route.snapshot.paramMap.get('id');
    console.log(this.packageId);
  }
}