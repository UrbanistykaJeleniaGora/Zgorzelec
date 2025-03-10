var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_studium_kierunki_1 = new ol.layer.Tile({
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
              wms_layers.push([lyr_studium_kierunki_1, 1]);
var lyr_studium_dod_info_pow_2 = new ol.layer.Tile({
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
              wms_layers.push([lyr_studium_dod_info_pow_2, 1]);
var lyr_studium_dod_info_lin_3 = new ol.layer.Tile({
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
              wms_layers.push([lyr_studium_dod_info_lin_3, 1]);
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
var lyr_mpzp_5 = new ol.layer.Tile({
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
              wms_layers.push([lyr_mpzp_5, 1]);
var lyr_dod_info_pow_6 = new ol.layer.Tile({
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
              wms_layers.push([lyr_dod_info_pow_6, 1]);
var lyr_dod_info_pkt_7 = new ol.layer.Tile({
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
              wms_layers.push([lyr_dod_info_pkt_7, 1]);
var lyr_dod_info_lin_8 = new ol.layer.Tile({
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
              wms_layers.push([lyr_dod_info_lin_8, 1]);
var format_budynki_wfs_Zgorzelec_9 = new ol.format.GeoJSON();
var features_budynki_wfs_Zgorzelec_9 = format_budynki_wfs_Zgorzelec_9.readFeatures(json_budynki_wfs_Zgorzelec_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynki_wfs_Zgorzelec_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynki_wfs_Zgorzelec_9.addFeatures(features_budynki_wfs_Zgorzelec_9);
var lyr_budynki_wfs_Zgorzelec_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_budynki_wfs_Zgorzelec_9, 
                style: style_budynki_wfs_Zgorzelec_9,
                popuplayertitle: 'budynki_wfs_Zgorzelec',
                interactive: false,
                title: '<img src="styles/legend/budynki_wfs_Zgorzelec_9.png" /> budynki_wfs_Zgorzelec'
            });
var format_dzialki_wfs_Zgorzelec_10 = new ol.format.GeoJSON();
var features_dzialki_wfs_Zgorzelec_10 = format_dzialki_wfs_Zgorzelec_10.readFeatures(json_dzialki_wfs_Zgorzelec_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dzialki_wfs_Zgorzelec_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dzialki_wfs_Zgorzelec_10.addFeatures(features_dzialki_wfs_Zgorzelec_10);
var lyr_dzialki_wfs_Zgorzelec_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dzialki_wfs_Zgorzelec_10, 
                style: style_dzialki_wfs_Zgorzelec_10,
                popuplayertitle: 'dzialki_wfs_Zgorzelec',
                interactive: false,
                title: '<img src="styles/legend/dzialki_wfs_Zgorzelec_10.png" /> dzialki_wfs_Zgorzelec'
            });
var format_granica_wfs_11 = new ol.format.GeoJSON();
var features_granica_wfs_11 = format_granica_wfs_11.readFeatures(json_granica_wfs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granica_wfs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granica_wfs_11.addFeatures(features_granica_wfs_11);
var lyr_granica_wfs_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granica_wfs_11, 
                style: style_granica_wfs_11,
                popuplayertitle: 'granica_wfs',
                interactive: false,
                title: '<img src="styles/legend/granica_wfs_11.png" /> granica_wfs'
            });
var format_NR_WNIOSKU_12 = new ol.format.GeoJSON();
var features_NR_WNIOSKU_12 = format_NR_WNIOSKU_12.readFeatures(json_NR_WNIOSKU_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NR_WNIOSKU_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NR_WNIOSKU_12.addFeatures(features_NR_WNIOSKU_12);
var lyr_NR_WNIOSKU_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NR_WNIOSKU_12, 
                style: style_NR_WNIOSKU_12,
                popuplayertitle: 'NR_WNIOSKU',
                interactive: false,
                title: '<img src="styles/legend/NR_WNIOSKU_12.png" /> NR_WNIOSKU'
            });
var format_wnioski_poza_terminem_13 = new ol.format.GeoJSON();
var features_wnioski_poza_terminem_13 = format_wnioski_poza_terminem_13.readFeatures(json_wnioski_poza_terminem_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_poza_terminem_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_poza_terminem_13.addFeatures(features_wnioski_poza_terminem_13);
var lyr_wnioski_poza_terminem_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_poza_terminem_13, 
                style: style_wnioski_poza_terminem_13,
                popuplayertitle: 'wnioski_poza_terminem',
                interactive: true,
                title: '<img src="styles/legend/wnioski_poza_terminem_13.png" /> wnioski_poza_terminem'
            });
var format_wnioski_14 = new ol.format.GeoJSON();
var features_wnioski_14 = format_wnioski_14.readFeatures(json_wnioski_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_14.addFeatures(features_wnioski_14);
var lyr_wnioski_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_14, 
                style: style_wnioski_14,
                popuplayertitle: 'wnioski',
                interactive: true,
                title: '<img src="styles/legend/wnioski_14.png" /> wnioski'
            });
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_mpzp_5,lyr_dod_info_pow_6,lyr_dod_info_pkt_7,lyr_dod_info_lin_8,],
                                fold: "open",
                                title: 'MPZP'});
var group_STUDIUM = new ol.layer.Group({
                                layers: [lyr_studium_kierunki_1,lyr_studium_dod_info_pow_2,lyr_studium_dod_info_lin_3,lyr_studium_dod_info_pkt_4,],
                                fold: "open",
                                title: 'STUDIUM'});

lyr_OSMStandard_0.setVisible(true);lyr_studium_kierunki_1.setVisible(true);lyr_studium_dod_info_pow_2.setVisible(true);lyr_studium_dod_info_lin_3.setVisible(true);lyr_studium_dod_info_pkt_4.setVisible(true);lyr_mpzp_5.setVisible(true);lyr_dod_info_pow_6.setVisible(true);lyr_dod_info_pkt_7.setVisible(true);lyr_dod_info_lin_8.setVisible(true);lyr_budynki_wfs_Zgorzelec_9.setVisible(true);lyr_dzialki_wfs_Zgorzelec_10.setVisible(true);lyr_granica_wfs_11.setVisible(true);lyr_NR_WNIOSKU_12.setVisible(true);lyr_wnioski_poza_terminem_13.setVisible(true);lyr_wnioski_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_STUDIUM,group_MPZP,lyr_budynki_wfs_Zgorzelec_9,lyr_dzialki_wfs_Zgorzelec_10,lyr_granica_wfs_11,lyr_NR_WNIOSKU_12,lyr_wnioski_poza_terminem_13,lyr_wnioski_14];
lyr_budynki_wfs_Zgorzelec_9.set('fieldAliases', {'ID_BUDYNKU': 'ID_BUDYNKU', 'RODZAJ': 'RODZAJ', 'KONDYGNACJ': 'KONDYGNACJ', 'KONDYGNA_1': 'KONDYGNA_1', });
lyr_dzialki_wfs_Zgorzelec_10.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'laczone': 'laczone', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_1': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_1', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_2': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_2', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3a': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3a', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_5': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_5', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_6': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_6', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_7': 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_7', });
lyr_granica_wfs_11.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', });
lyr_NR_WNIOSKU_12.set('fieldAliases', {'NUMER_DZIA': 'NUMER_DZIA', 'NAZWA_OBRE': 'NAZWA_OBRE', 'ZLACZONE': 'ZLACZONE', '1': '1', '2': '2', '3': '3', '3a': '3a', 'Scalone': 'Scalone', '7': '7', 'numer': 'numer', 'numer wn.': 'numer wn.', 'tresc': 'tresc', });
lyr_wnioski_poza_terminem_13.set('fieldAliases', {'NUMER_DZIA': 'NUMER_DZIA', 'NAZWA_OBRE': 'NAZWA_OBRE', 'laczone': 'laczone', 'WNIOSKI_PR': 'WNIOSKI_PR', 'WNIOSKI__1': 'WNIOSKI__1', 'WNIOSKI__2': 'WNIOSKI__2', 'WNIOSKI__3': 'WNIOSKI__3', 'WNIOSKI__6': 'WNIOSKI__6', 'numer wn.': 'numer wn.', '7': '7', 'tresc': 'tresc', });
lyr_wnioski_14.set('fieldAliases', {'NUMER_DZIA': 'NUMER_DZIA', 'NAZWA_OBRE': 'NAZWA_OBRE', 'ZLACZONE': 'ZLACZONE', '1': '1', '2': '2', '3': '3', '3a': '3a', 'Scalone': 'Scalone', '7': '7', 'numer': 'numer', 'numer wn.': 'numer wn.', 'tresc': 'tresc', });
lyr_budynki_wfs_Zgorzelec_9.set('fieldImages', {'ID_BUDYNKU': 'TextEdit', 'RODZAJ': 'TextEdit', 'KONDYGNACJ': 'TextEdit', 'KONDYGNA_1': 'TextEdit', });
lyr_dzialki_wfs_Zgorzelec_10.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'laczone': 'TextEdit', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_1': 'Range', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_2': 'DateTime', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3': 'TextEdit', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3a': 'TextEdit', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_5': 'TextEdit', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_6': 'TextEdit', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_7': 'TextEdit', });
lyr_granica_wfs_11.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', });
lyr_NR_WNIOSKU_12.set('fieldImages', {'NUMER_DZIA': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'ZLACZONE': 'TextEdit', '1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '3a': 'TextEdit', 'Scalone': 'TextEdit', '7': 'TextEdit', 'numer': 'TextEdit', 'numer wn.': 'TextEdit', 'tresc': 'TextEdit', });
lyr_wnioski_poza_terminem_13.set('fieldImages', {'NUMER_DZIA': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'laczone': 'TextEdit', 'WNIOSKI_PR': 'TextEdit', 'WNIOSKI__1': 'TextEdit', 'WNIOSKI__2': 'TextEdit', 'WNIOSKI__3': 'TextEdit', 'WNIOSKI__6': 'TextEdit', 'numer wn.': '', '7': '', 'tresc': '', });
lyr_wnioski_14.set('fieldImages', {'NUMER_DZIA': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'ZLACZONE': 'TextEdit', '1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '3a': 'TextEdit', 'Scalone': 'TextEdit', '7': 'TextEdit', 'numer': 'TextEdit', 'numer wn.': '', 'tresc': '', });
lyr_budynki_wfs_Zgorzelec_9.set('fieldLabels', {'ID_BUDYNKU': 'no label', 'RODZAJ': 'no label', 'KONDYGNACJ': 'no label', 'KONDYGNA_1': 'no label', });
lyr_dzialki_wfs_Zgorzelec_10.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', 'laczone': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_1': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_2': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_3a': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_5': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_6': 'no label', 'WNIOSKI_PRYWATNE_ZGORZELEC1 (1) — Tabela2_1_7': 'no label', });
lyr_granica_wfs_11.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', });
lyr_NR_WNIOSKU_12.set('fieldLabels', {'NUMER_DZIA': 'hidden field', 'NAZWA_OBRE': 'hidden field', 'ZLACZONE': 'hidden field', '1': 'hidden field', '2': 'hidden field', '3': 'hidden field', '3a': 'hidden field', 'Scalone': 'hidden field', '7': 'hidden field', 'numer': 'hidden field', 'numer wn.': 'no label', 'tresc': 'no label', });
lyr_wnioski_poza_terminem_13.set('fieldLabels', {'NUMER_DZIA': 'hidden field', 'NAZWA_OBRE': 'hidden field', 'laczone': 'no label', 'WNIOSKI_PR': 'hidden field', 'WNIOSKI__1': 'hidden field', 'WNIOSKI__2': 'hidden field', 'WNIOSKI__3': 'hidden field', 'WNIOSKI__6': 'hidden field', 'numer wn.': 'inline label - always visible', '7': 'hidden field', 'tresc': 'inline label - always visible', });
lyr_wnioski_14.set('fieldLabels', {'NUMER_DZIA': 'hidden field', 'NAZWA_OBRE': 'hidden field', 'ZLACZONE': 'no label', '1': 'hidden field', '2': 'hidden field', '3': 'hidden field', '3a': 'hidden field', 'Scalone': 'hidden field', '7': 'hidden field', 'numer': 'hidden field', 'numer wn.': 'inline label - always visible', 'tresc': 'inline label - always visible', });
lyr_wnioski_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});