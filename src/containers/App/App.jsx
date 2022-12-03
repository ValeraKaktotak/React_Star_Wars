import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

import {Route, Routes} from "react-router-dom";
import Header from "../../components/Header";
import routesConfig from "../../routes/routesConfig";
import style from './App.module.css'


const App = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div>
            <div className={style.App}>
                <Header/>
                <Routes>
                    {routesConfig.map((element, index) => (
                        <Route
                            key={index}
                            path={element.path}
                            element={<element.component />}
                        />
                    ))}
                </ Routes>
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 360,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 2,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 4,
                                "size_min": 0.3,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 150,
                                "size": 0,
                                "duration": 2,
                                "opacity": 0,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 300,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    // "background": {
                    //     "color": "#232741",
                    //     "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
                    //     "position": "50% 50%",
                    //     "repeat": "no-repeat",
                    //     "size": "20%"
                    // }
                }}
            />
        </div>
    );
}

export default App;
