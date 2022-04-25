import React from 'react';
import ReactDOM from "react-dom";
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';
import { points, gradientColors } from "../context/data";

const mapState = {
    center: [59.97058051325999,30.516916863015755],
    zoom: 8,
    behaviors: ["default", "scrollZoom"]
};

class MapBasics extends React.Component {
    state = {width: '100%', height: '100%'};

    render() {
        const { showMap } = this.state;
        const style = {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        };
        return (
            <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
                <Map
                    // style={style}
                    defaultState={mapState}
                >
                    <Clusterer
                        options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false,
                            balloonPanelMaxMapArea: Infinity
                        }}
                    >

                        <Placemark
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            key={1}
                            geometry={[55.684758, 37.738521]}

                            properties={{
                                item: 1,
                                balloonContentHeader: "Заголовок элемента X",
                                balloonContentBody: "Тело элемента",
                                balloonContentFooter: `<input type="button" onclick="window.myFunc(${1});"value="Считать кроликов!"/>`
                            }}
                            options={{
                                balloonPanelMaxMapArea: Infinity
                            }}
                        />

                    </Clusterer>
                </Map>
            </YMaps>
        );
    }
}

export default MapBasics;
