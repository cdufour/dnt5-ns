import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { StudentListComponent } from "./students/student-list.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/students", pathMatch: "full" },
    { path: "students", component: StudentListComponent },
    { path: "students/:lastname", component: StudentDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
