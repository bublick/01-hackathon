import {Module} from '../core/module'
import { preparePlayground } from '../utils';

export class RandomGifModule extends Module {
    constructor(type = 'randomGifModule', text = 'Случайная гифка', stackable = false) {
        super(type,text);
    }
    
    #toggleLoader( location ) {
        const loaderSpan = document.querySelector("span#loader")
        if ( loaderSpan === null ){
            const loader = document.createElement("span")
            loader.id = "loader"
            loader.textContent = "Загрузка.."
            location.append( loader )
        } else {
            loaderSpan.setAttribute('hidden', '')
        }
    }

    async #getGif(holderNode) {
        const loaderNode = holderNode
        this.#toggleLoader(loaderNode)
        const giphy  = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            apiKey: "b8XotZjP2DgGNvh8lGZ5Id7JFPcBcwjF",
            tag: "fail",
            type: "random",
            rating: "pg-13"
        };
        
        const URL = encodeURI(
            giphy.baseURL +
                giphy.type +
                "?api_key=" +
                giphy.apiKey +
                "&tag=" +
                giphy.tag +
                "&rating=" +
                giphy.rating
        );

        try{
            const response = await fetch(URL)
            const result = await response.json()
            return result.data.images.original.url
            
        } catch(error) {
            console.log('error', error)
        } finally {
            this.#toggleLoader(loaderNode)
        }
    }

    async #renderMessage(){
        const playground = preparePlayground()
        const gif = document.createElement('img')
        gif.src = await this.#getGif(playground)
        playground.append( gif )
    }

    trigger() {
        this.#renderMessage()
    }
}