import './style.css';

import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({color: 0x0091ff, wireframe: true});
const material = new THREE.MeshStandardMaterial({color: 0xffffff, wireframe: false});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffff55);
pointLight.position.set(0, 50, 0);
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0x5555ff);
scene.add(ambientLight)

let time = 0

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.01;
  time += 0.05;
  pointLight.position.set(Math.cos(time)*50, Math.sin(time)*50, 0);

  renderer.render(scene, camera);
}

animate()