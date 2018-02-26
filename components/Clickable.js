/* global AFRAME */ 

AFRAME.registerComponent('folddumpling',{
  
  init: function (){
    var el = this.el;
    var scene = document.querySelector('a-scene');
    el.addEventListener('mouseenter',function(){
      el.setAttribute('scale', {x:1.5, y:1, z:1.5});
    });
    el.addEventListener('mouseleave',function(){
      el.setAttribute('scale', {x:1, y:1, z:1});
    });
    el.addEventListener('click', function(){

      
      el.setAttribute('obj-model', 'obj', '#dumplingobj');
      el.setAttribute('obj-mtl', 'mtl', '#dumplingmtl'); 
      el.setAttribute('class', 'dumpling');
      
      var bloop = scene.querySelector('#bloop');
      bloop.components.sound.playSound(); 
      
      
      setTimeout(function () {
        
        var peel = document.createElement('a-entity'); 
        var randx = 4 * (2 * (Math.random() - 0.5)); // [-4,4]
        var randz = Math.random() * 8 - 1; // [-1,7]
        let attrs = {
            ['class']: "peel",
            folddumpling: '',
            ['dynamic-body']: "mass: 2",
            ['obj-model']: "obj:#peelobj",
            material: "color:#FEF8E1",
            position: `${randx} 14 ${randz}`,
            rotation: "0 45 0",
            sound: "#bloop"
        };
        
        for (var k in attrs) {
          peel.setAttribute(k, attrs[k]);
        } 
        scene.appendChild(peel);
      } , 3000);
    }.bind(this));
  },   
});

AFRAME.registerComponent('openbook',{
  
  init: function(){
    
    var el = this.el;
    this.showingImage = false;
    var scene = document.querySelector('a-scene');
    
    el.addEventListener('mouseenter',function(){
      el.setAttribute('scale', {x:1.2, y:1, z:1.2});
    });
    el.addEventListener('mouseleave',function(){
      el.setAttribute('scale', {x:1, y:1, z:1});
    });
    el.addEventListener('click', (function(e){
      
      var page = scene.querySelector('#page');
      page.components.sound.playSound(); 
      
      if (this.showingImage == false){
        
        
        //grandpa
        var img_1 = document.createElement('a-image');
        img_1.setAttribute('src', 'https://cdn.glitch.com/0ecd20b7-1836-4a3c-9a89-0929ee917e78%2Fgrandpa.jpg?1518598010061');    
        img_1.setAttribute('position', '-8.120 14.780 4.420');
        img_1.setAttribute('rotation','-0.688 89.668 2.177');
        img_1.setAttribute('scale', '3 3 3');
        scene.appendChild(img_1);
        this.img_1 = img_1;
        
        //grandma
        var img_2 = document.createElement('a-image');
        img_2.setAttribute('src', 'https://cdn.glitch.com/0ecd20b7-1836-4a3c-9a89-0929ee917e78%2Flaolao.jpeg?1518561636513');    
        img_2.setAttribute('position', '-6.247 14.780 2.092');
        img_2.setAttribute('rotation','2.349 16.387 -94.825');
        img_2.setAttribute('scale', '3 3 3');
        scene.appendChild(img_2);
        this.img_2 = img_2;
        
         //child
        var img_3 = document.createElement('a-image');
        img_3.setAttribute('src', 'https://cdn.glitch.com/0ecd20b7-1836-4a3c-9a89-0929ee917e78%2Flittletet.jpg?1518598627958');    
        img_3.setAttribute('position', '-7.644 18.259 2.959');
        img_3.setAttribute('rotation','0.859 47.613 -0.516');
        img_3.setAttribute('scale', '3 3 3');
        scene.appendChild(img_3);
        this.img_3 = img_3;

        
        
        this.showingImage = true;
        console.log("showing image");

      } else {

        console.log('hiding image');
        
        let img_1 = this.img_1;
        img_1.parentNode.removeChild(img_1);
        
        
        let img_2 = this.img_2;
        img_2.parentNode.removeChild(img_2);
        
        let img_3 = this.img_3;
        img_3.parentNode.removeChild(img_3);

        this.showingImage = false;
      }
    }).bind(this));
  }
});
