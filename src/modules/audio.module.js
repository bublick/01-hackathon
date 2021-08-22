import {Module} from '../core/module'
import {sounds} from '../assets/sounds/';
import { getRandom } from '../utils';

export class AudioModule extends Module {
    constructor(type = 'audioModule', text = 'Случайный звук') {
        super(type,text);
    }

    trigger() {
        const audioObj = new Audio(sounds[getRandom(0, sounds.length)]);
        audioObj.play()
    }
}