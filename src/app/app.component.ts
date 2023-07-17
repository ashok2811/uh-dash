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

 activeButton = 'content1';

 toggleContent(contentId: string) {
   const contentSections = document.getElementsByClassName('dropdown-content');
   for (let i = 0; i < contentSections.length; i++) {
     contentSections[i].setAttribute('style', 'display: none');
   }
   const buttons = document.getElementsByTagName('button');
   for (let i = 0; i < buttons.length; i++) {
     buttons[i].classList.remove('active');
   }
   const content = document.getElementById(contentId);
   content?.setAttribute('style', 'display: block');

   const button = document.getElementById('btn' + contentId.slice(-1));
   button?.classList.add('active');
   this.activeButton = contentId;
 }
 

}
