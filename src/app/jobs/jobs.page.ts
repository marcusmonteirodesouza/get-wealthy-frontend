import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Job } from './job';
import 'firebase/firestore';

@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.page.html',
  styleUrls: ['jobs.page.scss']
})
export class JobsPage {
  jobs: Observable<Job[]>;
  constructor(firestore: AngularFirestore) {
    this.jobs = firestore.collection<Job>('jobs').valueChanges();
    console.log(this.jobs);
  }
}
