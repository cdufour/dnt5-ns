import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'student-detail',
    templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent implements OnInit{
    lastname: string = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.lastname = this.route.snapshot.params.lastname;
    }

}