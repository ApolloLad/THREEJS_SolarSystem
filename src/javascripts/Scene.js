import * as THREE from 'three'
window.THREE = THREE
let OrbitControls = require("threejs-controls/OrbitControls")
import * as dat from 'dat.gui'
import { maxHeaderSize } from 'http';

export function displayScene()
{


    let canvas = document.querySelector("#webgl-scene")
    let scene = new THREE.Scene()
    let renderer = new THREE.WebGLRenderer()
    let camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, .1, 80000)
    camera.position.set(550, 530, 550)
    //camera.lookAt(scene.position)
    scene.add(camera)
    

    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    //renderer.setClearColor(0x000000)

    //Setting background texture
    scene.background = new THREE.TextureLoader().load('./images/MilkyWay.png')

    //Texture loader for loading textures on objects
    let texLoader = new THREE.TextureLoader()
  
    //Add Objects: 

 

    //StarField 
   // let starGeometry = new THREE.SphereGeometry(10000, 50, 50)
  //  let starMaterial = new THREE.MeshPhongMaterial({
    //    map: texLoader.load('./images/starfield.jpg', function(texture){
  //          texture.wrapS = THREE.RepeatWrapping
  //          texture.wrapT = THREE.RepeatWrapping
    //        texture.repeat.set(3,3)
  //          renderer.render(scene,camera)
  ////      }),
    //    side: THREE.DoubleSide,
   //     shininess: 0
   // })
   // let starField = new THREE.Mesh(starGeometry, starMaterial)
  //  scene.add(starField)
    //Sun
     let geometry = new THREE.SphereGeometry(432, 40, 40)
     let material = new THREE.MeshBasicMaterial({map: texLoader.load("./images/Sun.jpg")})
     let sun = new THREE.Mesh(geometry, material)
     sun.name = 'sun'

     scene.add(sun)

     //Mercury
     geometry = new THREE.SphereGeometry(25, 40, 40)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Mercury.jpg")})
     let Mercury = new THREE.Mesh(geometry, material)
     Mercury.name = 'Mercury'
     //Mercury.position.set(430,0,0)
     let MercuryR = 862
     Mercury.castShadow = true;
     Mercury.recieveShadow = true;
     scene.add(Mercury)

     //Venus
     geometry = new THREE.SphereGeometry(60, 40, 40)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Venus.jpg")})
     let Venus = new THREE.Mesh(geometry, material)
     Venus.name = 'Venus'
     //Venus.position.set(680,0,0)
     let VenusR = 1112
     Venus.castShadow = true;
     Venus.recieveShadow = true;
     scene.add(Venus)


    //Moon
    geometry = new THREE.SphereGeometry(12, 40, 40)
    material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Mercury.jpg")})
    let Moon = new THREE.Mesh(geometry, material)
    Moon.name = 'Moon'
    let MoonR = 150
    Moon.castShadow = true;
    Moon.recieveShadow = true;
    //Earth.add(Moon)

     //Earth
     geometry = new THREE.SphereGeometry(65, 40, 40)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Earth.jpg")})
     let Earth = new THREE.Mesh(geometry, material)
     Earth.name = 'Earth'
     let EarthR = 1342
     //Earth.position.set(910, 0, 0)
     //Earth.position.x = r * 
     Earth.castShadow = true;
     Earth.recieveShadow = true;
     Earth.add(Moon)
     scene.add(Earth)

     //Mars
     geometry = new THREE.SphereGeometry(33, 40, 40)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Mars.jpg")})
     let Mars = new THREE.Mesh(geometry, material)
     Mars.name = 'Mars'
     //Mars.position.set(1270,0,0)
     let MarsR = 1702
     Mars.castShadow = true;
     Mars.recieveShadow = true;
     scene.add(Mars)


     //Jupiter
     geometry = new THREE.SphereGeometry(715, 40, 40)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Jupiter.jpg")})
     let Jupiter = new THREE.Mesh(geometry, material)
     Jupiter.name = 'Jupiter'
     //Jupiter.position.set(5080,0,0)
     let JupiterR = 6512
     Jupiter.castShadow = true;
     Jupiter.recieveShadow = true;
     scene.add(Jupiter)

     geometry = new THREE.RingGeometry(1015, 1030, 40)
     material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
     let JupRing = new THREE.Mesh(geometry, material)
     JupRing.castShadow = true;
     JupRing.rotation.x = 1.5
     Jupiter.add(JupRing)

     //////////////Jupiters Moons//////////////
     
    //IO
    geometry = new THREE.SphereGeometry(11, 40, 40)
    material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load('./images/IO.PNG')
        })
    let IO = new THREE.Mesh(geometry, material)
    IO.name = 'IO'
    let IOR = 977
    IO.castShadow = true;
    IO.recieveShadow = true;
    Jupiter.add(IO)

    //Europa
    geometry = new THREE.SphereGeometry(18, 40, 40)
    material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load('./images/Europa.PNG')
        })
    let Europa= new THREE.Mesh(geometry, material)
    Europa.name = 'Europa'
    let EuropaR = 1130
    Europa.castShadow = true;
    Jupiter.add(Europa)

    //Ganymede
    geometry = new THREE.SphereGeometry(26, 40, 40)
    material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load('./images/Ganymede.PNG')
        })
    let Ganymede = new THREE.Mesh(geometry, material)
    Ganymede.name = 'Ganymede'
    let GanymedeR = 1380
    Ganymede.castShadow = true;
    Jupiter.add(Ganymede)

    //Callisto
    geometry = new THREE.SphereGeometry(25, 40, 40)
    material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load('./images/Callisto.PNG')
        })
    let Callisto = new THREE.Mesh(geometry, material)
    Callisto.name = 'Callisto'
    let CallistoR = 1915
    Callisto.castShadow = true;
    Jupiter.add(Callisto)

    //////////////////////////////////////////

    //Saturns rings
    geometry = new THREE.RingGeometry(803, 1403, 40)
    material = new THREE.MeshLambertMaterial({color: 0xBBBBBB, side: THREE.DoubleSide})
    let Satring = new THREE.Mesh(geometry, material)
    Satring.castShadow = true;
    Satring.recieveShadow = true;
    Satring.rotation.x = 1.9
    
      //Saturn
      geometry = new THREE.SphereGeometry(603, 40, 40)
      material = new THREE.MeshLambertMaterial({map:texLoader.load("./images/Saturn.jpg")})
      let Saturn = new THREE.Mesh(geometry, material)
      Saturn.name = 'Saturn'
      //Saturn.position.set(9380,0,0)
      let SaturnR = 9812
      Saturn.castShadow = true;
      Saturn.recieveShadow = true;
      Saturn.add(Satring)
      scene.add(Saturn)

      //Saturns Moons
      //Enceladus
      geometry = new THREE.SphereGeometry(3.1, 40, 40)
      material = new THREE.MeshLambertMaterial({
              map: new THREE.TextureLoader().load('./images/Enceladus.PNG')
          })
      let Enceladus = new THREE.Mesh(geometry, material)
      Enceladus.name = 'Enceladus'
      let EnceladusR = 746
      Enceladus.castShadow = true;
      Enceladus.recieveShadow = true
      Saturn.add(Enceladus)

      //Titan
      geometry = new THREE.SphereGeometry(26, 40, 40)
      material = new THREE.MeshLambertMaterial({
              map: new THREE.TextureLoader().load('./images/Enceladus.PNG')
          })
      let Titan = new THREE.Mesh(geometry, material)
      Titan.name = 'Titan'
      let TitanR = 1353
      Titan.castShadow = true;
      Titan.recieveShadow = true
      Saturn.add(Titan)

      //Uranus Rings
      geometry = new THREE.RingGeometry(560, 600, 40)
      material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
      let UrRing1 = new THREE.Mesh(geometry, material)
      UrRing1.castShadow = true;
      UrRing1.recieveShadow = true;

      geometry = new THREE.RingGeometry(580, 620, 40)
      material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
      let UrRing2 = new THREE.Mesh(geometry, material)
      UrRing2.castShadow = true;
      UrRing2.recieveShadow = true
      

      //Uranus
      geometry = new THREE.SphereGeometry(260, 40, 40)
      material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Uranus.jpeg")})
      let Uranus = new THREE.Mesh(geometry, material)
      Uranus.name = 'Uranus'
      let UranusR = 18432
      Uranus.castShadow = true
      Uranus.recieveShadow = true
      Uranus.add(UrRing1)
      Uranus.add(UrRing2)
      scene.add(Uranus)

      //Neptune
      geometry = new THREE.SphereGeometry(250, 40, 40)
      material = new THREE.MeshLambertMaterial({map:texLoader.load("./images/Neptune.jpg")})
      let Neptune = new THREE.Mesh(geometry, material)
      Neptune.name = 'Neptune'
      //Neptune.position.set(28300,0,0)
      let NeptuneR = 28732
      Neptune.castShadow = true
      Neptune.recieveShadow = true
      scene.add(Neptune)

      //Triton
      geometry = new THREE.SphereGeometry(9, 40, 40)
      material = new THREE.MeshLambertMaterial({
              map: new THREE.TextureLoader().load('./images/Enceladus.PNG')
          })
      let Triton = new THREE.Mesh(geometry, material)
      Triton.name = 'Triton'
      let TritonR = 1353
      Triton.castShadow = true;
      Neptune.add(Triton)

      //Pluto
      geometry = new THREE.SphereGeometry(19, 40, 40)
      material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Pluto.jpg")})
      let Pluto = new THREE.Mesh(geometry, material)
      Pluto.name = 'Pluto'
      //Pluto.position.set(50000,0,0)
      let PlutoR = 50432
      Pluto.castShadow = true
      scene.add(Pluto)


     // Light sources
     let pointLight = new THREE.PointLight(0xFFFFFF, 1.5, 0, 2)
     renderer.shadowMap.enabled = true;
     pointLight.position.set(0, 100, 0)
     pointLight.castShadow = true;
     pointLight.shadowDarkness = 1
     
     scene.add(pointLight);
    
    
    canvas.appendChild(renderer.domElement)

    let cameraControls = new OrbitControls(camera, renderer.domElement)
    cameraControls.addEventListener("change", function(){
        renderer.render(scene, camera)
    })

    let r = 100
    let theta = 0;
    let orbitSpeed = 3
    let dTheta = 2 * Math.PI / 6000;

    function animate()
    {
        //requestAnimationFrame(animate)
        camera.lookAt(scene.position)
        //camera.lookAt(Pluto.position)
        Earth.rotation.y += -.0009
        Moon.rotation.y += -.0009
        Mars.rotation.y += -.0009
        Jupiter.rotation.y += -.0009
        Saturn.rotation.y += -.0009
        Uranus.rotation.y += -.0009
        Neptune.rotation.y += -.0009
        Pluto.rotation.y += -.0009

       
        //Mercury
        theta -= dTheta;
        Mercury.position.x = MercuryR * Math.cos(theta * 2)
        Mercury.position.z = MercuryR * Math.sin(theta * 2)
        //Venus
        orbitSpeed = 2
        Venus.position.x = (VenusR * Math.cos((theta * orbitSpeed) + 2)) 
        Venus.position.z = (VenusR * Math.sin((theta * orbitSpeed) + 2))
        //Earth
        orbitSpeed = 1.7
        Earth.position.x = EarthR * Math.cos((theta * orbitSpeed) + 3)
        Earth.position.z = EarthR * Math.sin((theta * orbitSpeed) + 3)

        //Moon
        orbitSpeed = 5
        Moon.position.x = MoonR * Math.cos(theta * orbitSpeed)
        Moon.position.z = MoonR * Math.sin(theta * orbitSpeed)
        //Mars
        orbitSpeed = 1.4
        Mars.position.x = MarsR * Math.cos(theta * orbitSpeed);
        Mars.position.z = MarsR * Math.sin(theta * orbitSpeed);
        //Jupiter
        orbitSpeed = 1
        Jupiter.position.x = JupiterR * Math.cos((theta * orbitSpeed) + 1)
        Jupiter.position.z = JupiterR * Math.sin((theta * orbitSpeed) + 1)

        orbitSpeed = 3
        IO.position.x = IOR * Math.cos((theta * orbitSpeed) + 2)
        IO.position.z = IOR * Math.sin((theta * orbitSpeed) + 2)

        Europa.position.x = EuropaR * Math.cos((theta * orbitSpeed) + 1)
        Europa.position.z = EuropaR * Math.sin((theta * orbitSpeed) + 1)

        Ganymede.position.x = GanymedeR * Math.cos((theta * orbitSpeed) + 5)
        Ganymede.position.z = GanymedeR * Math.sin((theta * orbitSpeed) + 5)

        Callisto.position.x = CallistoR * Math.cos(theta * orbitSpeed) 
        Callisto.position.z = CallistoR * Math.sin(theta * orbitSpeed) 
        //Saturn
        orbitSpeed = .7
        Saturn.position.x = SaturnR * Math.cos((theta * orbitSpeed) + 3)
        Saturn.position.z = SaturnR * Math.sin((theta * orbitSpeed) + 3)

        orbitSpeed = 3
        //Enceladus
        Enceladus.position.x = EnceladusR * Math.cos(theta * orbitSpeed)
        Enceladus.position.z = EnceladusR * Math.sin(theta * orbitSpeed)

        //Titan
        Titan.position.x = TitanR * Math.cos((theta * orbitSpeed) + 2)
        Titan.position.z = TitanR * Math.sin((theta * orbitSpeed) + 2)
        //Uranus
        orbitSpeed = .5
        Uranus.position.x = UranusR * Math.cos(theta * orbitSpeed) + 2
        Uranus.position.z = UranusR * Math.sin(theta * orbitSpeed) + 2
        //Neptune
        orbitSpeed = .4
        Neptune.position.x = NeptuneR * Math.cos((theta * orbitSpeed) + 5)
        Neptune.position.z = NeptuneR * Math.sin((theta * orbitSpeed) + 5)

        orbitSpeed = 3 
        Triton.position.x = TritonR * Math.cos(theta * orbitSpeed)
        Triton.position.z = TritonR * Math.sin(theta * orbitSpeed)

        //Pluto
        orbitSpeed = .1
        Pluto.position.x = PlutoR * Math.cos(theta * orbitSpeed)
        Pluto.position.z = PlutoR * Math.sin(theta * orbitSpeed)

        //Earth.rotation.x += -.0005
        renderer.render(scene, camera)
        cameraControls.update()
        requestAnimationFrame(animate)
    }

    animate();

}