AFRAME .registerComponent(tour(
    schema(
        createPlace:function(){
            const details={
                garden:{
                    position:{x:20,y:-4.5,z:-5.5},
                    rotation:{x:0,y:-90,z:0},
                    src:"./assets/thumbnails/garden.png",
                    title:"garden",
                    id:"garden",

                },
            }   main_gate:{
                    position:{x:4.6,y:5.5,z:25},
                    rotation:{x:100,y:0,z:0},
                    src: "./assets/thumbnails/main_gate.png",
                    title:"main_gate",
                    id:"main_gate"
                }
                home:{
                    position:{x:-9,y:34,z:100},
                    rotation:{x:0,y:0,z:0},
                    src:"./assets/thumbnails/home.png",
                    title:"My Home",
                    id:"home"
                    }
                    }:
                    
                    for (var key in details)(
                        const item:details{key};
                        //thumbnail Element
                        const thumbnail=this.createThumbnail/home.png
                    )
        }   
        )
))