import * as THREE from "three";

const canvas = document.getElementById("canvas");

// 1. scene

const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

// 2.camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
