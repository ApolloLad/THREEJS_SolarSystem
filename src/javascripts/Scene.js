import * as THREE from 'three'
window.THREE = THREE
let OrbitControls = require("threejs-controls/OrbitControls")
import * as dat from 'dat.gui'
import { maxHeaderSize } from 'http';

function getRandomStarField(numberOfStars, width, height) {
    var canvas = document.createElement('CANVAS');

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');

	ctx.fillStyle="black";
	ctx.fillRect(0, 0, width, height);

	for (var i = 0; i < numberOfStars; ++i) {
		var radius = Math.random() * 2;
		var x = Math.floor(Math.random() * width);
		var y = Math.floor(Math.random() * height);

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'white';
		ctx.fill();
	}

	var texture = new THREE.Texture(canvas);
	texture.needsUpdate = true;
	return texture;
};

export function displayScene()
{


    let canvas = document.querySelector("#webgl-scene")
    let scene = new THREE.Scene()
    let renderer = new THREE.WebGLRenderer()
    let camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, .1, 100000)
    camera.position.set(550, 530, 550)
    scene.add(camera)
    

    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    //Texture loader for loading textures on objects
    let texLoader = new THREE.TextureLoader()
  
    //Add Objects: 

 

    //StarField 
    let starGeometry = new THREE.BoxGeometry(100000, 100000, 100000);
    let starMaterial = new THREE.MeshBasicMaterial({
    map: getRandomStarField(1000, 2048, 2048),
	side: THREE.BackSide
    });
    let sky = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(sky);

    //Sun
     let geometry = new THREE.SphereGeometry(432, 60, 60)
     let material = new THREE.MeshBasicMaterial({map: texLoader.load("./images/Sun.jpg")})
     let sun = new THREE.Mesh(geometry, material)
     sun.name = 'sun'

     scene.add(sun)

     //Mercury
     geometry = new THREE.SphereGeometry(25, 60, 60)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Mercury.jpg")})
     let Mercury = new THREE.Mesh(geometry, material)
     Mercury.name = 'Mercury'
     //Mercury.position.set(430,0,0)
     let MercuryR = 1062
     Mercury.castShadow = true;
     Mercury.recieveShadow = true;
     scene.add(Mercury)

     //Venus
     geometry = new THREE.SphereGeometry(60, 60, 60)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Venus.jpg")})
     let Venus = new THREE.Mesh(geometry, material)
     Venus.name = 'Venus'
     //Venus.position.set(680,0,0)
     let VenusR = 2112
     Venus.castShadow = true;
     Venus.recieveShadow = true;
     scene.add(Venus)


    //Moon
    geometry = new THREE.SphereGeometry(12, 60, 60)
    material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Mercury.jpg")})
    let Moon = new THREE.Mesh(geometry, material)
    Moon.name = 'Moon'
    let MoonR = 250
    Moon.castShadow = true;
    Moon.recieveShadow = true;
    //Earth.add(Moon)

     //Earth
     geometry = new THREE.SphereGeometry(65, 60, 60)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Earth.jpg")})
     let Earth = new THREE.Mesh(geometry, material)
     Earth.name = 'Earth'
     let EarthR = 2342
     //Earth.position.set(910, 0, 0)
     //Earth.position.x = r * 
     Earth.castShadow = true;
     Earth.recieveShadow = true;
     Earth.add(Moon)
     scene.add(Earth)

     //Mars
     geometry = new THREE.SphereGeometry(33, 60, 60)
     material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Mars.jpg")})
     let Mars = new THREE.Mesh(geometry, material)
     Mars.name = 'Mars'
     //Mars.position.set(1270,0,0)
     let MarsR = 2702
     Mars.castShadow = true;
     Mars.recieveShadow = true;
     scene.add(Mars)


     //Jupiter
     geometry = new THREE.SphereGeometry(715, 60, 60)
     material = new THREE.MeshPhongMaterial({map: texLoader.load("./images/Jupiter.jpg")})
     let Jupiter = new THREE.Mesh(geometry, material)
     Jupiter.name = 'Jupiter'
     //Jupiter.position.set(5080,0,0)
     let JupiterR = 7512
     Jupiter.castShadow = true;
     Jupiter.recieveShadow = true;
     scene.add(Jupiter)

     geometry = new THREE.RingGeometry(1015, 1030, 60, 60)
     material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
     let JupRing = new THREE.Mesh(geometry, material)
     JupRing.castShadow = true;
     JupRing.rotation.x = 1.5
     Jupiter.add(JupRing)

     //////////////Jupiters Moons//////////////
     
    //IO
    geometry = new THREE.SphereGeometry(11, 60, 60)
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
    geometry = new THREE.SphereGeometry(18, 60, 60)
    material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load('./images/Europa.PNG')
        })
    let Europa= new THREE.Mesh(geometry, material)
    Europa.name = 'Europa'
    let EuropaR = 1130
    Europa.castShadow = true;
    Jupiter.add(Europa)

    //Ganymede
    geometry = new THREE.SphereGeometry(26, 60, 60)
    material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load('./images/Ganymede.PNG')
        })
    let Ganymede = new THREE.Mesh(geometry, material)
    Ganymede.name = 'Ganymede'
    let GanymedeR = 1380
    Ganymede.castShadow = true;
    Jupiter.add(Ganymede)

    //Callisto
    geometry = new THREE.SphereGeometry(25, 60, 60)
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
    geometry = new THREE.RingGeometry(803, 1403, 60, 60)
    material = new THREE.MeshLambertMaterial({color: 0xBBBBBB, side: THREE.DoubleSide})
    let Satring = new THREE.Mesh(geometry, material)
    Satring.castShadow = true;
    Satring.recieveShadow = true;
    Satring.rotation.x = 1.9
    
      //Saturn
      geometry = new THREE.SphereGeometry(603, 60, 60)
      material = new THREE.MeshLambertMaterial({map:texLoader.load("./images/Saturn.jpg")})
      let Saturn = new THREE.Mesh(geometry, material)
      Saturn.name = 'Saturn'
      //Saturn.position.set(9380,0,0)
      let SaturnR = 10812
      Saturn.castShadow = true;
      Saturn.recieveShadow = true;
      Saturn.add(Satring)
      scene.add(Saturn)

      //Saturns Moons
      //Enceladus
      geometry = new THREE.SphereGeometry(3.1, 60, 60)
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
      geometry = new THREE.SphereGeometry(26, 60, 60)
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
      geometry = new THREE.RingGeometry(560, 600, 60)
      material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
      let UrRing1 = new THREE.Mesh(geometry, material)
      UrRing1.castShadow = true;
      UrRing1.recieveShadow = true;

      geometry = new THREE.RingGeometry(580, 620, 60)
      material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
      let UrRing2 = new THREE.Mesh(geometry, material)
      UrRing2.castShadow = true;
      UrRing2.recieveShadow = true
      

      //Uranus
      geometry = new THREE.SphereGeometry(260, 60, 60)
      material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Uranus.jpeg")})
      let Uranus = new THREE.Mesh(geometry, material)
      Uranus.name = 'Uranus'
      let UranusR = 19432
      Uranus.castShadow = true
      Uranus.recieveShadow = true
      Uranus.add(UrRing1)
      Uranus.add(UrRing2)
      scene.add(Uranus)

      //Neptune
      geometry = new THREE.SphereGeometry(250, 60, 60)
      material = new THREE.MeshLambertMaterial({map:texLoader.load("./images/Neptune.jpg")})
      let Neptune = new THREE.Mesh(geometry, material)
      Neptune.name = 'Neptune'
      //Neptune.position.set(28300,0,0)
      let NeptuneR = 29732
      Neptune.castShadow = true
      Neptune.recieveShadow = true
      scene.add(Neptune)

      //Triton
      geometry = new THREE.SphereGeometry(9, 60, 60)
      material = new THREE.MeshLambertMaterial({
              map: new THREE.TextureLoader().load('./images/Enceladus.PNG')
          })
      let Triton = new THREE.Mesh(geometry, material)
      Triton.name = 'Triton'
      let TritonR = 1353
      Triton.castShadow = true;
      Neptune.add(Triton)

      //Pluto
      geometry = new THREE.SphereGeometry(19, 60, 60)
      material = new THREE.MeshLambertMaterial({map: texLoader.load("./images/Pluto.jpg")})
      let Pluto = new THREE.Mesh(geometry, material)
      Pluto.name = 'Pluto'
      //Pluto.position.set(50000,0,0)
      let PlutoR = 51432
      Pluto.castShadow = true
      scene.add(Pluto)

      //Orbit Paths

      let orbits = new THREE.Group()

      //Mercury Orbit
      geometry = new THREE.RingGeometry(MercuryR - 5, MercuryR, 60)
      material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
      let MercuryOrbit = new THREE.Mesh(geometry, material)
      MercuryOrbit.rotation.x = 1.57
      orbits.add(MercuryOrbit)

        //Venus Orbit
        geometry = new THREE.RingGeometry(VenusR - 5, VenusR, 60)
        material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
        let VenusOrbit = new THREE.Mesh(geometry, material)
        VenusOrbit.rotation.x = 1.57
        orbits.add(VenusOrbit)

        //Earth Orbit
        geometry = new THREE.RingGeometry(EarthR - 5, EarthR, 60)
        material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
        let EarthOrbit = new THREE.Mesh(geometry, material)
        EarthOrbit.rotation.x = 1.57
        orbits.add(EarthOrbit)

    //Mars Orbit
      geometry = new THREE.RingGeometry(MarsR - 5, MarsR, 60)
      material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
      let MarsOrbit = new THREE.Mesh(geometry, material)
      MarsOrbit.rotation.x = 1.57
      orbits.add(MarsOrbit)

    //Jupiter Orbit
    geometry = new THREE.RingGeometry(JupiterR - 15, JupiterR, 60)
    material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
    let JupiterOrbit = new THREE.Mesh(geometry, material)
    JupiterOrbit.rotation.x = 1.57
    orbits.add(JupiterOrbit)

    //Saturn Orbit
    geometry = new THREE.RingGeometry(SaturnR - 30, SaturnR, 100)
    material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
    let SaturnOrbit = new THREE.Mesh(geometry, material)
    SaturnOrbit.rotation.x = 1.57
    orbits.add(SaturnOrbit)

    //Uranus Orbit
    geometry = new THREE.RingGeometry(UranusR - 50, UranusR, 100)
    material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
    let UranusOrbit = new THREE.Mesh(geometry, material)
    UranusOrbit.rotation.x = 1.57
    orbits.add(UranusOrbit)

    //Neptune Orbit
    geometry = new THREE.RingGeometry(NeptuneR - 50, NeptuneR, 100)
    material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
    let NeptuneOrbit = new THREE.Mesh(geometry, material)
    NeptuneOrbit.rotation.x = 1.57
    orbits.add(NeptuneOrbit)

    //Pluto Orbit
    geometry = new THREE.RingGeometry(PlutoR - 50, PlutoR, 1000)
    material = new THREE.MeshBasicMaterial({color: 0x00FF00, side: THREE.DoubleSide})
    let PlutoOrbit = new THREE.Mesh(geometry, material)
    PlutoOrbit.rotation.x = 1.57
    orbits.add(PlutoOrbit)


     // Light sources
     let pointLight = new THREE.PointLight(0xFFFFFF, 2, 0, 2)
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

    let theta = 0;
    let orbitSpeed = 3
    let dTheta = 2 * Math.PI / 6000;
    

    let controls = {
        orbit: true,
        rings: false
    }
    function animate()
    {
       
        camera.lookAt(scene.position)
    
        if(controls.rings == true)
        {
            scene.add(orbits)
        }
        else
        {
            scene.remove(orbits)
        }

        if(controls.orbit == true)
        {
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
        }

        
        renderer.render(scene, camera)
        cameraControls.update()
        requestAnimationFrame(animate)
    }

    animate();

    let gui = new dat.GUI()
    let f = gui.addFolder("Orbit")
    f.add(controls, 'orbit').onChange(animate)
    f = gui.addFolder("Paths")
    f.add(controls, 'rings').onChange(animate)
    f.open()
}