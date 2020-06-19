class Humano{
    caminar(distancia:Number):void {
        console.log(`se mueve ${distancia} metros`)
    }
}


class niño extends Humano{

    gatea():void{
        console.log("esta gateando")
    }

}

let juan = new niño()
juan.gatea()
juan.caminar(30)