import {Module} from '../core/module'
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
    constructor(type = 'backgroundModule', text = 'Случайный фон') {
        super(type,text);
    }

    #changeBackground() {       
        document.body.style.backgroundColor = getRandomColor()
        setTimeout( function() { 
            document.body.style.backgroundColor = '#ffffff'
        }, 5000);
    }

    trigger() {
        this.#changeBackground()
    }
}