import React, { useEffect, useRef, useState } from "react";
import { YMaps, Map, Circle } from "react-yandex-maps";

const POINTS = [
    {
        type: "Point",
        coordinates: [55.73, 37.75]
    },
    {
        type: "Point",
        coordinates: [55.1, 37.45]
    },
    {
        type: "Point",
        coordinates: [55.25, 37.35]
    }
];

export default function App() {
    const map = useRef(null);
    const circle = useRef(null);
    const [ymaps, setYmaps] = useState(null);
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        if (ymaps && map.current) {
            const objs = ymaps.geoQuery(POINTS).addToMap(map.current);
            setObjects(objs);
        }
    }, [ymaps, map]);

    return (
        <div className="App">
            <YMaps>
                <Map
                    instanceRef={map => {
                        if(map) {
                            console.log(map)

                        }
                    }}
                    modules={["geoQuery"]}
                    state={{
                        center: [55.43, 37.75],
                        zoom: 8
                    }}
                    onLoad={(ymapsInstance) => {
                        setYmaps(ymapsInstance);
                    }}
                    options={{ searchControlProvider: "yandex#search" }}
                >
                    <Circle
                        instanceRef={circle}
                        onDrag={() => {
                            const objectsInsideCircle = objects.searchInside(circle.current);
                            objectsInsideCircle.setOptions("preset", "islands#redIcon");
                            objects
                                .remove(objectsInsideCircle)
                                .setOptions("preset", "islands#blueIcon");
                        }}
                        geometry={[[55.43, 37.7], 10000]}
                        options={{ draggable: true }}
                    />
                </Map>
            </YMaps>
        </div>
    );
}