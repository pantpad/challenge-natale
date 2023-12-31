import mercury from "../assets/images/mercury.webp";
import venus from "../assets/images/venus.webp";
import earth from "../assets/images/rotating_earth.gif";
import mars from "../assets/images/mars.webp";
import jupiter from "../assets/images/jupiter.webp";
import saturn from "../assets/images/saturn.gif";
import uranus from "../assets/images/uranus.webp";
import neptune from "../assets/images/neptune.webp";
import pluto from "../assets/images/pluto.webp";
import ceres from "../assets/images/ceres.webp";

const planetsData = [
  {
    name: "Mercury",
    image: mercury,
    title: "The Swift Planet",
    description: "Mercury is the smallest planet in our solar system and the closest to the Sun.",
    distanceFromSun: "36 million miles (58 million kilometers)",
    diameter: "4,880 kilometers",
    gravity: "3.7 m/s²",
  },
  {
    name: "Venus",
    image: venus,
    title: "The Morning Star",
    description:
      "Venus is the second planet from the Sun and is often called Earth's sister planet due to its similar size and composition.",
    distanceFromSun: "67 million miles (108 million kilometers)",
    diameter: "12,104 kilometers",
    gravity: "8.87 m/s²",
  },
  {
    name: "Earth",
    image: earth,
    title: "The Blue Planet",
    description:
      "Earth is the third planet from the Sun and the only known celestial body to support life.",
    distanceFromSun: "93 million miles (150 million kilometers)",
    diameter: "12,742 kilometers",
    gravity: "9.81 m/s²",
  },
  {
    name: "Mars",
    image: mars,
    title: "The Red Planet",
    description:
      "Mars is the fourth planet from the Sun and is known for its reddish appearance, which is due to iron oxide on its surface.",
    distanceFromSun: "142 million miles (228 million kilometers)",
    diameter: "6,779 kilometers",
    gravity: "3.71 m/s²",
  },
  {
    name: "Jupiter",
    image: jupiter,
    title: "The Giant Planet",
    description:
      "Jupiter is the largest planet in our solar system and is primarily composed of hydrogen and helium.",
    distanceFromSun: "484 million miles (778 million kilometers)",
    diameter: "139,820 kilometers",
    gravity: "24.79 m/s²",
  },
  {
    name: "Saturn",
    image: saturn,
    title: "The Ringed Planet",
    description:
      "Saturn is known for its stunning ring system, which is composed mostly of ice particles with a smaller amount of rocky debris.",
    distanceFromSun: "886 million miles (1.4 billion kilometers)",
    diameter: "116,460 kilometers",
    gravity: "10.44 m/s²",
  },
  {
    name: "Uranus",
    image: uranus,
    title: "The Sideways Planet",
    description:
      "Uranus is unique among the planets because it rotates on its side, likely due to a collision with a massive object in its early history.",
    distanceFromSun: "1.8 billion miles (2.9 billion kilometers)",
    diameter: "50,724 kilometers",
    gravity: "8.69 m/s²",
  },
  {
    name: "Neptune",
    image: neptune,
    title: "The Windy Planet",
    description:
      "Neptune is the eighth and farthest known planet from the Sun. It has strong winds and is often referred to as an ice giant.",
    distanceFromSun: "2.8 billion miles (4.5 billion kilometers)",
    diameter: "49,244 kilometers",
    gravity: "11.15 m/s²",
  },
  {
    name: "Pluto",
    image: pluto,
    title: "The Dwarf Planet",
    description:
      "Pluto, formerly considered the ninth planet, was reclassified as a dwarf planet in 2006. It has a highly elliptical orbit and is composed mostly of ice and rock.",
    distanceFromSun: "3.7 billion miles (5.9 billion kilometers)",
    diameter: "2,377 kilometers",
    gravity: "0.62 m/s²",
  },
  {
    name: "Ceres",
    image: ceres,
    title: "The Asteroid Belt Dwarf",
    description:
      "Ceres is the largest object in the asteroid belt between Mars and Jupiter and is classified as a dwarf planet. It is composed of rock and water-ice.",
    distanceFromSun: "257 million miles (414 million kilometers)",
    diameter: "590 kilometers",
    gravity: "0.28 m/s²",
  },
];

export default planetsData;
