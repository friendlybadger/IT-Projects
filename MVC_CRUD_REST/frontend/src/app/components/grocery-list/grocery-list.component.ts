import { AfterViewChecked, Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { GroceryListCrudService } from "src/app/services/grocery-list-crud.service";

import { Grocery } from "src/app/models/Grocery";
import { tap } from "rxjs/operators";

import { ChangeDetectionStrategy } from "@angular/core";  

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit/*, AfterViewChecked*/ {
  groceries$!: Observable<Grocery[]>;
  
  loading=true;

  constructor(private groceryListCrudService: GroceryListCrudService ) {}
  // ngAfterViewChecked() {
  //   this.groceryListCrudService.detectChanges();
  // }

  ngOnInit(): void {
    this.groceries$ = this.fetchAll();
    
  } 
  
  fetchAll(): Observable<Grocery[]>{
    return this.groceryListCrudService.fetchAll();
  }

  post(groceryItem: Partial<Grocery>): void {
    
    const item =(<string>groceryItem).trim();
    if(!item) return;
    // console.log(item);
    this.groceries$ = this.groceryListCrudService
      .post({ item })
      .pipe(tap(()=> (this.groceries$=this.fetchAll())));
  }
  update(id: number, newItem: Partial<Grocery>): void{
    const item = (<string>newItem).trim();
    if(!item) return;

    const newGrocery:Grocery={
      id,
      item,
    };
    this.groceries$ = this.groceryListCrudService
      .update(newGrocery)
      .pipe(tap(()=> (this.groceries$=this.fetchAll())));

    
  }
  delete(id:number): void{
    this.groceries$ = this.groceryListCrudService
      .delete(id)
      .pipe(tap(()=> (this.groceries$=this.fetchAll())));

  }

} 
