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
    logging: string = '';

    // Dependency Injection
    constructor(private studentService: StudentService) {
        this.students = this.studentService.getStudents();
    }

    changeMessage() {
        this.message = 'Message modifié';
    }

    deleteStudent(lastname: string) {
        // Altération de la source de données (copiée au niveau du composant)
        // this.students = 
        //     this.students.filter(student => student.lastname != lastname);

        // Altération de la source de données (au niveau du service)
        this.studentService.deleteStudent(lastname);
        // Mise à jour de la copie côté composant
        this.students = this.studentService.getStudents();
    }

    goToDetails(lastname: string) {
        //this.logging = lastname;
    }
}