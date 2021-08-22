import {Module} from '../core/module'
import {sounds} from '../assets/sounds/';

export class AudioModule extends Module {
    constructor(type = 'audioModule', text = 'Случайный звук') {
        super(type,text);
    }

    trigger() {
        const getRandom = (min, max)=>{
            return Math.floor(Math.random() * (max - min) + min)
        }
        const audioObj = new Audio(sounds[getRandom(0, sounds.length)]);
        audioObj.play()
    }
}