import React from 'react'
import {Placemark, YMaps, Map} from "react-yandex-maps";

const loadSuggest = ymaps => {
    const suggestView = new ymaps.SuggestView("suggest");
    console.log(suggestView)
};


export const About = () => (

    <YMaps //обертка для карты
        query={{ // для подключения апи ключа. load: 'package.full' - используем все пакеты
            ns: 'use-load-option',
            apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',
            load: 'package.full'
        }}
    >
        <div>
            My awesome application with maps!
            <Map
                onLoad={ymaps => loadSuggest(ymaps)}
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            />
        </div>
        <input type="text" id='suggest' />
    </YMaps>
)