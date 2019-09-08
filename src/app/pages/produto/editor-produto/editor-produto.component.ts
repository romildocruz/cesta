import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Produto } from 'src/app/models/produto.model';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-editor-produto',
  templateUrl: './editor-produto.component.html',
  styleUrls: ['./editor-produto.component.css']
})
export class EditorProdutoComponent implements OnInit {
  public form: FormGroup;
  @Input() produto: Produto = new Produto();
  @Input() produtos: Produto[];
  @Input() mode: string = 'create';
  Categorias: any[];


  constructor(
    private fb: FormBuilder,
    private service: DataService
  ) {
    this.form = fb.group({
      id: [this.produto.id],
      descricao: [this.produto.descricao],
      titulo: [this.produto.titulo],
      preco: [this.produto.preco],
      qtde: [this.produto.qtde],
      categoria: [this.produto.categoria],
    });
  }

  ngOnInit() {
    this.loadCategorias();
  }

  ngOnChanges(chances: SimpleChange) {
    this.form.controls['id'].setValue(this.produto.id);
    this.form.controls['titulo'].setValue(this.produto.titulo);
    this.form.controls['descricao'].setValue(this.produto.descricao);
    this.form.controls['preco'].setValue(this.produto.preco);
    this.form.controls['qtde'].setValue(this.produto.qtde);
    this.form.controls['categoria'].setValue(this.produto.categoria);
  }
  create() {
    this.service
      .post(this.form.value)
      .subscribe(
        (res: Result) => {
          this.produtos.push(this.form.value);
          console.log(res.message);
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          console.log('Finalizou');
        }
      );
  }

  update() {
    this.service
      .put(this.form.value)
      .subscribe(
        (res: Result) => {
          this.produtos[this.produtos.indexOf(this.produto)] = this.form.value;
          console.log(res.message);
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          console.log('Finalizou');
        }
      );
  }

  delete() {
    this.service
      .delete(this.form.value)
      .subscribe(
        (res: Result) => {
          this.produtos.splice(this.produtos.indexOf(this.produto), 1);
          console.log(res.message);
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          console.log('Finalizou');
        }
      );

  }

  loadCategorias() {
    this.Categorias = [];
    this.Categorias.push({ id: '10', descricao: 'Mouses' });
    this.Categorias.push({ id: '11', descricao: 'Teclados' });
    this.Categorias.push({ id: '12', descricao: 'Monitores' });
  }
}