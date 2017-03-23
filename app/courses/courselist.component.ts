import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/service.component';
import { ToastrService } from '../common/toastr.service';

@Component({
    template: `
    <div>
    <h1> All courses </h1>
    <hr/>
    <div class="row">
        <div class="col-md-5" *ngFor="let course of courses">
            <course-thumb (click)= "showToastrMessage(course.Name)" #thumbnail [course] = "course"> </course-thumb>
        </div>
    </div>

    </div>
    `
})
export class CourseListCompnent implements OnInit {
    //Create local variable on course
    courses:any;
    
    constructor(private course: CourseService, private toastr: ToastrService) {
    }

    //ngOnInit is called right after the directive's data-bound properties have been checked for the first time
    //More like Hooks in NUnit [BeforeTest]
    ngOnInit():void {
        this.courses = this.course.getCourses();
    }
    
    showToastrMessage(message: string) {
        this.toastr.Success(message)
    }
}