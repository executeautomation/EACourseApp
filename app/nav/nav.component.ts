import { Component } from '@angular/core';


@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav.component.html',
    styles: [`.nav.navbar-nav {font-size: 15px}
              #SearchForm {margin-right: 100px}  
            `
    ]
})
export class NavigationComponent { }
