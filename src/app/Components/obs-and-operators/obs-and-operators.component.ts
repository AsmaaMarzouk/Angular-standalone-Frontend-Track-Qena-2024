import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  merge,
  Observable,
  of,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-obs-and-operators',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-operators.component.html',
  styleUrl: './obs-and-operators.component.scss',
})
export class ObsAndOperatorsComponent implements OnInit, OnDestroy {
  // ! => non null assertion operator
  // sub!:Subscription;
  // // ? => safe navigation operator
  // // need condition
  // // sub?:Subscription;
  // // sub:Subscription|undefined=undefined;
  // // sub:Subscription|null=null;
  //   // create observer
  //   obs = new Observable((observer) => {

  //     // 3 cases => next ,error,complete
  //     // next func

  //     setTimeout(()=>{
  //       observer.next('1')
  //     },1000);
  //     setTimeout(()=>{
  //       observer.next('2')

  //     },2000);

  //     // setTimeout(()=>{
  //     //   observer.error("error in values")
  //     // },2500)
  //     setTimeout(()=>{
  //       observer.next('3')

  //     },3000);
  //     setTimeout(()=>{
  //       observer.next('4')

  //     },4000);
  //     setTimeout(()=>{
  //       observer.next('5')

  //     },5000);

  //     setTimeout(()=>{
  //       observer.complete();
  //     },5500)
  //   });

  ngOnInit(): void {
    //  this.sub= this.obs.subscribe({
    //     next:(val)=>{
    //       console.log(val);

    //     },
    //     error:(err)=>{
    //       console.log(err);

    //     },
    //     complete:()=>{

    //       console.log("compleeeeteeed");

    //     }
    //   })

    // operators

    //   var obs1=new Observable(obs=>{
    //     // console.log("Observable one");
    //     obs.next("Observable one")

    //   })
    //   var obs2=new Observable(obs=>{
    //     // console.log("Observable two");
    //     obs.next("Observable two")
    //   })

    //   var result=merge(obs1,obs2);
    // // console.log(result);
    // result.subscribe({
    //   next:(value)=>{
    //     console.log(value);

    //   },
    //   error:()=>{
    //     console.log("error in get values");

    //   }
    // })

    // of  || from
    // of(1,2,3).subscribe(data=>{
    //   console.log(data);

    // })
    // from(["1","2","3"]).subscribe(data=>{
    //   console.log(data);

    // })
    // from(["1","2","3"]).subscribe({
    //   next: (value)=>{
    //     console.log(value);

    //   },error:()=>{
    //     console.log("error");

    //   },
    //   complete:()=>{

    //   }
    // })

    // var obs3 = fromEvent(document, 'click');
    // // obs3.subscribe(data=>{
    // //   console.log("you clicked document");

    // // })

    // obs3.pipe(take(2)).subscribe({
    //   next: (data) => {
    //     console.log('you clicked documnet');
    //   },
    // });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe()
  }
}
