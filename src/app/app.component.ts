import { Component } from '@angular/core';
import { NavigationService } from './core/services/navigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'coding-world-tutorial'
    selectedScreen!: string; 

    constructor(private navigationService: NavigationService) {}

    ngDoCheck() {
        this.selectedScreen = this.navigationService.getScreen()
    }
}
