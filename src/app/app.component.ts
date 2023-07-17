import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { loadItems, selectItems, selectLoading, selectError } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
title(title: any) {
  throw new Error('Method not implemented.');
}
constructor(private store: Store<any>) {this.store.dispatch(loadItems());}
items: any;
error: any;
loading: boolean = true;
data: any;
items$ = this.store.select(selectItems);
loading$ = this.store.select(selectLoading);
error$ = this.store.select(selectError);

ngOnInit() {
   this.store.pipe(select(selectItems)).subscribe((event) => {
     this.data = event;
   });
   this.store.pipe(select(selectLoading)).subscribe((event) => {
     this.loading = event;
   });
   this.store.pipe(select(selectError)).subscribe((event) => {
     this.error = event;
   });
 }
 

}
