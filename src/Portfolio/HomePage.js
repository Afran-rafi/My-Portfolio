import React from 'react';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';


import react from '../Images-Svg/css.svg'
import vue from '../Images/vue.png'
import js from '../Images/js.png'
import html from '../Images/html.png'
import css from '../Images/css.png'
import mongodb from '../Images/mongodb.png'
import node from '../Images/node.png'
import amazon from '../Images/amazon.png'
import typescript from '../Images/typescript.png'
import { Particles } from 'react-tsparticles';


const HomePage = () => {
    return (
        <div>
            <Particles
                id="tsparticles"
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "detectRetina": true,
                    "fpsLimit": 60,
                    "interactivity": {
                        "events": {
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "onDiv": {
                                "elementId": "repulse-div",
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onHover": {
                                "enable": true,
                                "mode": "bubble",
                                "parallax": {
                                    "enable": false,
                                    "force": 60,
                                    "smooth": 10
                                }
                            },
                            "resize": true
                        },
                        "modes": {
                            "bubble": {
                                "distance": 400,
                                "duration": 2,
                                "opacity": 0.8,
                                "size": 2,
                            },
                            "connect": {
                                "distance": 80,
                                "lineLinked": {
                                    "opacity": 0.5
                                },
                                "radius": 60
                            },
                            "grab": {
                                "distance": 400,
                                "lineLinked": {
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "quantity": 2
                            },
                            "remove": {
                                "quantity": 2
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            }
                        }
                    },
                    "particles": {
                        "color": {
                            "value": "#ffffff"
                        },
                        "lineLinked": {
                            "blink": false,
                            "color": "#000",
                            "consent": false,
                            "distance": 150,
                            "enable": false,
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "attract": {
                                "enable": false,
                                "rotate": {
                                    "x": 600,
                                    "y": 1200
                                }
                            },
                            "bounce": false,
                            "direction": "none",
                            "enable": true,
                            "outMode": "out",
                            "random": false,
                            "speed": 2,
                            "straight": false
                        },
                        "number": {
                            "density": {
                                "enable": true,
                                "area": 800
                            },
                            "limit": 20,
                            "value": 15,
                        },
                        "opacity": {
                            "animation": {
                                "enable": true,
                                "minimumValue": 0.2,
                                "speed": 1,
                                "sync": false
                            },
                            "random": true,
                            "value": 1
                        },
                        "rotate": {
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            },
                            "direction": "random",
                            "random": true,
                            "value": 0
                        },
                        "shape": {
                            "character": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                            },
                            "image": [
                                {
                                    "src": react,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": vue,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": html,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": js,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": css,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": { node },
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": react,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": mongodb,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": amazon,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": typescript,
                                    "width": 20,
                                    "height": 20
                                },
                                {
                                    "src": amazon,
                                    "width": 20,
                                    "height": 20
                                },

                            ],
                            "polygon": {
                                "sides": 5
                            },
                            "stroke": {
                                "color": "#000000",
                                "width": 0
                            },
                            "type": "image"
                        },
                        "size": {
                            "animation": {
                                "enable": false,
                                "minimumValue": 0.1,
                                "speed": 40,
                                "sync": false
                            },
                            "random": false,
                            "value": 16
                        }
                    },
                    "polygon": {
                        "draw": {
                            "enable": false,
                            "lineColor": "#ffffff",
                            "lineWidth": 0.5
                        },
                        "move": {
                            "radius": 10
                        },
                        "scale": 1,
                        "url": ""
                    },
                    "background": {
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }}
            />
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;