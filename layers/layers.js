var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_Ortofotomapastandardowa_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotomapastandardowa_1 = projection_Ortofotomapastandardowa_1.getExtent();
    var size_Ortofotomapastandardowa_1 = ol.extent.getWidth(projectionExtent_Ortofotomapastandardowa_1) / 256;
    var resolutions_Ortofotomapastandardowa_1 = new Array(14);
    var matrixIds_Ortofotomapastandardowa_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotomapastandardowa_1[z] = size_Ortofotomapastandardowa_1 / Math.pow(2, z);
        matrixIds_Ortofotomapastandardowa_1[z] = z;
    }
    var lyr_Ortofotomapastandardowa_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?service=WMTS&request=getCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotomapastandardowa_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotomapastandardowa_1),
                resolutions: resolutions_Ortofotomapastandardowa_1,
                matrixIds: matrixIds_Ortofotomapastandardowa_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.0,
                            
                            
                          });
var lyr_studium_kierunki_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_kierunki",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_kierunki',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_kierunki_2, 1]);
var lyr_studium_dod_info_pow_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_pow',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_pow_3, 1]);
var lyr_studium_dod_info_pkt_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_pkt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_pkt_4, 1]);
var lyr_studium_dod_info_lin_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_lin',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_lin_5, 1]);
var lyr_mpzp_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'mpzp',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mpzp_6, 0]);
var lyr_dod_info_pow_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_pow',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_pow_7, 0]);
var lyr_dod_info_pkt_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_pkt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_pkt_8, 0]);
var lyr_dod_info_lin_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_zgorzelec",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_lin',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_lin_9, 0]);
var format_wnioski_10 = new ol.format.GeoJSON();
var features_wnioski_10 = format_wnioski_10.readFeatures(json_wnioski_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_10.addFeatures(features_wnioski_10);
var lyr_wnioski_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_10, 
                style: style_wnioski_10,
                popuplayertitle: 'wnioski',
                interactive: true,
                title: '<img src="styles/legend/wnioski_10.png" /> wnioski'
            });
var format_budynki_wfs_Zgorzelec_11 = new ol.format.GeoJSON();
var features_budynki_wfs_Zgorzelec_11 = format_budynki_wfs_Zgorzelec_11.readFeatures(json_budynki_wfs_Zgorzelec_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynki_wfs_Zgorzelec_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynki_wfs_Zgorzelec_11.addFeatures(features_budynki_wfs_Zgorzelec_11);
var lyr_budynki_wfs_Zgorzelec_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_budynki_wfs_Zgorzelec_11, 
                style: style_budynki_wfs_Zgorzelec_11,
                popuplayertitle: 'budynki_wfs_Zgorzelec',
                interactive: false,
                title: '<img src="styles/legend/budynki_wfs_Zgorzelec_11.png" /> budynki_wfs_Zgorzelec'
            });
var format_dzialki_wfs_Zgorzelec_12 = new ol.format.GeoJSON();
var features_dzialki_wfs_Zgorzelec_12 = format_dzialki_wfs_Zgorzelec_12.readFeatures(json_dzialki_wfs_Zgorzelec_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dzialki_wfs_Zgorzelec_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dzialki_wfs_Zgorzelec_12.addFeatures(features_dzialki_wfs_Zgorzelec_12);
var lyr_dzialki_wfs_Zgorzelec_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dzialki_wfs_Zgorzelec_12, 
                style: style_dzialki_wfs_Zgorzelec_12,
                popuplayertitle: 'dzialki_wfs_Zgorzelec',
                interactive: false,
                title: '<img src="styles/legend/dzialki_wfs_Zgorzelec_12.png" /> dzialki_wfs_Zgorzelec'
            });
var format_granica_wfs_13 = new ol.format.GeoJSON();
var features_granica_wfs_13 = format_granica_wfs_13.readFeatures(json_granica_wfs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granica_wfs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granica_wfs_13.addFeatures(features_granica_wfs_13);
var lyr_granica_wfs_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granica_wfs_13, 
                style: style_granica_wfs_13,
                popuplayertitle: 'granica_wfs',
                interactive: false,
                title: '<img src="styles/legend/granica_wfs_13.png" /> granica_wfs'
            });
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_mpzp_6,lyr_dod_info_pow_7,lyr_dod_info_pkt_8,lyr_dod_info_lin_9,],
                                fold: "open",
                                title: 'MPZP'});
var group_STUDIUM = new ol.layer.Group({
                                layers: [lyr_studium_kierunki_2,lyr_studium_dod_info_pow_3,lyr_studium_dod_info_pkt_4,lyr_studium_dod_info_lin_5,],
                                fold: "open",
                                title: 'STUDIUM'});

lyr_OSMStandard_0.setVisible(true);lyr_Ortofotomapastandardowa_1.setVisible(true);lyr_studium_kierunki_2.setVisible(true);lyr_studium_dod_info_pow_3.setVisible(true);lyr_studium_dod_info_pkt_4.setVisible(true);lyr_studium_dod_info_lin_5.setVisible(true);lyr_mpzp_6.setVisible(true);lyr_dod_info_pow_7.setVisible(true);lyr_dod_info_pkt_8.setVisible(true);lyr_dod_info_lin_9.setVisible(true);lyr_wnioski_10.setVisible(true);lyr_budynki_wfs_Zgorzelec_11.setVisible(true);lyr_dzialki_wfs_Zgorzelec_12.setVisible(true);lyr_granica_wfs_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortofotomapastandardowa_1,group_STUDIUM,group_MPZP,lyr_wnioski_10,lyr_budynki_wfs_Zgorzelec_11,lyr_dzialki_wfs_Zgorzelec_12,lyr_granica_wfs_13];
lyr_wnioski_10.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'wnioski_of': 'wnioski_of', 'ZLACZONE': 'ZLACZONE', '1': '1', '2': '2', '3': '3', '3a': '3a', 'Scalone': 'Scalone', '4.3': '4.3', '4.4': '4.4', '5': '5', '6': '6', '7': '7', 'numer': 'numer', });
lyr_budynki_wfs_Zgorzelec_11.set('fieldAliases', {'ID_BUDYNKU': 'ID_BUDYNKU', 'RODZAJ': 'RODZAJ', 'KONDYGNACJ': 'KONDYGNACJ', 'KONDYGNA_1': 'KONDYGNA_1', });
lyr_dzialki_wfs_Zgorzelec_12.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'laczone': 'laczone', 'dzialki_decyzja': 'dzialki_decyzja', });
lyr_granica_wfs_13.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', });
lyr_wnioski_10.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'wnioski_of': 'TextEdit', 'ZLACZONE': 'TextEdit', '1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '3a': 'TextEdit', 'Scalone': 'TextEdit', '4.3': 'TextEdit', '4.4': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', 'numer': 'TextEdit', });
lyr_budynki_wfs_Zgorzelec_11.set('fieldImages', {'ID_BUDYNKU': 'TextEdit', 'RODZAJ': 'TextEdit', 'KONDYGNACJ': 'TextEdit', 'KONDYGNA_1': 'TextEdit', });
lyr_dzialki_wfs_Zgorzelec_12.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'laczone': 'TextEdit', 'dzialki_decyzja': 'TextEdit', });
lyr_granica_wfs_13.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', });
lyr_wnioski_10.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'hidden field', 'NUMER_JEDN': 'hidden field', 'NAZWA_OBRE': 'hidden field', 'NAZWA_GMIN': 'hidden field', 'POLE_EWIDE': 'hidden field', 'KLASOUZYTK': 'hidden field', 'GRUPA_REJE': 'hidden field', 'DATA': 'hidden field', 'wnioski_of': 'hidden field', 'ZLACZONE': 'hidden field', '1': 'no label', '2': 'hidden field', '3': 'hidden field', '3a': 'hidden field', 'Scalone': 'hidden field', '4.3': 'hidden field', '4.4': 'hidden field', '5': 'hidden field', '6': 'inline label - visible with data', '7': 'no label', 'numer': 'hidden field', });
lyr_budynki_wfs_Zgorzelec_11.set('fieldLabels', {'ID_BUDYNKU': 'no label', 'RODZAJ': 'no label', 'KONDYGNACJ': 'no label', 'KONDYGNA_1': 'no label', });
lyr_dzialki_wfs_Zgorzelec_12.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', 'laczone': 'no label', 'dzialki_decyzja': 'no label', });
lyr_granica_wfs_13.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', });
lyr_granica_wfs_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});