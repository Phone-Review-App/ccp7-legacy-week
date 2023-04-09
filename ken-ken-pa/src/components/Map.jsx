import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import prefectures from "../data/japan_prefectural_borders.json";

export default function Map(props) {
    const { setSelectedPrefecture, handlePopupMenu } = props;
    return (
            <ComposableMap
                className="map-svg"
                projection="geoMercator"
                projectionConfig={{
                    center: [135, 35],
                    // scale: 1200
                    scale: 1200
                }}>
                <Geographies
                    className="map-nation"
                    geography={prefectures}>
                    {
                        ({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    onClick={(event) => {
                                        setSelectedPrefecture(geo["id"]);
                                        handlePopupMenu(event);
                                    }}
                                    title={`${geo.properties.name_ja} - ${geo.properties.name_en}`}
                                    className="map-prefecture"
                                    key={geo.rsmKey}
                                    geography={geo} />
                            ))
                    }
                </Geographies>
            </ComposableMap>
    );
};
