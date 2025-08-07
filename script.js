const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 800;
const posArray = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 10;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({ size: 0.05, color: 0xFFD700 });
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);

let logo;
const loader = new THREE.GLTFLoader();
loader.load('assets/stykion_logo_final.glb', gltf => {
  logo = gltf.scene;
  logo.scale.set(1.8, 1.8, 1.8);
  logo.position.set(0, 0, 0);
  scene.add(logo);
}, undefined, err => {
  console.error('❌ Error loading logo:', err);
});

function animate() {
  requestAnimationFrame(animate);
  particlesMesh.rotation.y += 0.0008;
  particlesMesh.rotation.x += 0.0005;
  if (logo) {
    logo.rotation.y += 0.005;
    logo.position.y = Math.sin(Date.now() * 0.001) * 0.1;
  }
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
