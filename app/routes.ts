
import { Routes } from '@angular/router';
import { CourseListCompnent } from './courses/courselist.component';
import { CourseDetails } from './courses/course-details/courseDetails.component';
import {CreateCourseComponent} from './courses/create-course.component'
export const appRoutes: Routes = [

    { path: 'course/new', component: CreateCourseComponent},
    { path: 'course', component: CourseListCompnent },
    { path: 'course/:id', component: CourseDetails },
    { path: '', redirectTo: 'course', pathMatch: 'full' }
]

