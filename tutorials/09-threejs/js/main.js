// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

let scene, camera, renderer, cube, capsule;

function init() {

// ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//perspectiveCamera(field of view, near plane, farplane )


 renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//directionallight (color, strength)
const directionalLight = new THREE.DirectionalLight( 0xf5832c, 5 );
directionalLight.position.set(100,10,15);
scene.add( directionalLight );

const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
scene.add( helper );

const light = new THREE.HemisphereLight( 0x1fe08d, 0x080820, 0.7 );
scene.add( light );

// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models

loader.load('assets/test.gltf', function(gltf){
    const model = gltf.scene;
    scene.add(model);
    model.scale.set(2,2,2);
})

const geometry = new THREE.CapsuleGeometry( 0.25, 0.25, 4, 8 );
const geometry2 = new THREE.BoxGeometry( 1, 1, 1);

const texture = new THREE.TextureLoader().load('assets/FloorsCheckerboard_S_Diffuse.jpg');
const texture2 = new THREE.TextureLoader().load('assets/FloorsCheckerboard_S_Diffuse2.jpg');

//MeshBasicMaterial = no lighting effects
//MeshStandardMaterial = lighting affects it
const material = new THREE.MeshStandardMaterial( { map: texture } );
const material2 = new THREE.MeshStandardMaterial( { map: texture2 } );

capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );
capsule.position.set(1,0,1);

cube = new THREE.Mesh( geometry2, material2 );
scene.add( cube );
cube.position.set(2,2,1);

camera.position.z = 5;

}

function animate() {

    //default is 60fps 
      requestAnimationFrame(animate);

  capsule.rotation.x += 0.01;
  capsule.rotation.y += 0.01;

  renderer.render( scene, camera );

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);
init();
animate();