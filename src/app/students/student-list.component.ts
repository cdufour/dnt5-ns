import { Component } from "@angular/core";
import { Student } from "./models/student.model";
import { StudentService } from "./services/student.service";

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    message: string = 'Simple message';
    students: Student[] = [];

    // Dependency Injection
    constructor(private studentService: StudentService) {
        this.students = this.studentService.getStudents();
    }

    changeMessage() {
        this.message = 'Message modifié';
    }
}