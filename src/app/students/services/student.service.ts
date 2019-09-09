import { Student } from "../models/student.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root" // provider for service
})
export class StudentService {
    students: Student[] = [
        new Student('Francesco', 'Totti'),
        new Student('François', 'Tout'),
        new Student('Frances', 'Todo'),
    ];

    getStudents(): Student[] {
        return this.students;
    }
}