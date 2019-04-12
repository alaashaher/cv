import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    info = {
        name: 'Alaa Shaher',
        job: 'Front-end Web Develper',
        about: 'I\'am Front-end Develper, have good exprince, keeping learning more tool'
    };
}
