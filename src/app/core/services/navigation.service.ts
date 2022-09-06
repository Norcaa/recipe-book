import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    onSelectedScreen: string = 'recipes'

    constructor() { }

    setScreen(screenName: string) {
        if (this.onSelectedScreen != screenName) {
            this.onSelectedScreen = screenName
        } else console.log('Values are the same!')
    }

    getScreen(): string {
        return this.onSelectedScreen
    }
}
