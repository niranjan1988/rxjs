import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, map, shareReplay } from 'rxjs/operators';
import { Observable, observable, of} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  a = 1;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {


    // a0    
    // b0
    // c0    
    // a1
    // b1
    // c1


    //  fromEvent(document, 'click').pipe(
    //    delayWhen(()=>interval(Math.random() * 3000))
    //    ).subscribe(x => console.log(x));


    // fromEvent(document, 'click').pipe(scan(count => count + 1, 0)).subscribe(count => console.log(`Clicked ${count} times`));
  }


  getResponse() {
  this.getObservable().subscribe(console.log);
       
     
  }

  getObservable () {
    
   return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
      shareReplay(1,5000)      
    );


    
  }

}
