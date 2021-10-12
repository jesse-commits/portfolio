let paper = require('paper')
let jquery = require('jquery')

class Canvas {
    constructor(){
        this.drawCanvas()
        this.events()
    }


drawCanvas(){
    paper.install(window)
    paper.setup(document.getElementById('mainCanvas'))
    
    let c = Shape.Circle(200, 200, 80)
    c.fillColor = 'black'
    let text = new PointText(200, 200)
    text.justification = 'center'
    text.fillColor = 'white'
    text.fontSize = 20;
    text.content = 'Hello World'

    paper.view.draw()
}

events() {
    let tool = new Tool()

    tool.onMouseDown = function(event) {
        let d = Shape.Circle(event.point, 20)
        d.fillColor = 'blue'
    }
}

}


export default Canvas