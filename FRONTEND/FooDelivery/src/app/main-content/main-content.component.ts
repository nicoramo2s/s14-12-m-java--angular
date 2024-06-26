import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProductDTO } from '../admin-dashboard/interfaces/product.interface';
import { MainContentService } from './services/main-content.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  imports: [RouterModule],
})
export class MainContentComponent implements OnInit{
  mainService = inject(MainContentService);
  products: IProductDTO[] = [];

  ngOnInit(): void {
    this.mainService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error al obtener productos', error);
      }
    })
  }
}
