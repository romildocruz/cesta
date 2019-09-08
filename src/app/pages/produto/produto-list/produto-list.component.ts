import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  public produtos: Produto[];
  public produto: Produto = new Produto();
  public mode: string = 'create';
  public Categorias: any[] = []

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service
      .get()
      .subscribe(
        (res: any) => {
          this.produtos = res;
        }
      )
  }
  select(produto: Produto) {
    this.mode = 'update';
    this.produto = produto;
  }

  createNew() {
    this.mode = 'create';
    this.produto = new Produto();
  }

}
