
// Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, metalness: 0.7, roughness: 0.2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

camera.position.z = 3;

// Animate cube
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "size": { "value": 3 },
    "move": { "speed": 2 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ffff" }
  }
});
