var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.z = 10


var light = new THREE.AmbientLight( 0x404040 , 2); // soft white light


var geometry = new THREE.BoxGeometry( 3,3,3 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );

init = function(){
    scene.add(camera);
    scene.add( cube );
    scene.add( light );
    renderer.render(scene,camera)
}
init()
