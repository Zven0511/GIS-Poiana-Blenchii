ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([399409.714188, 640864.646193, 415575.304267, 650781.750503]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiteIntravilan_1 = new ol.format.GeoJSON();
var features_LimiteIntravilan_1 = format_LimiteIntravilan_1.readFeatures(json_LimiteIntravilan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_LimiteIntravilan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteIntravilan_1.addFeatures(features_LimiteIntravilan_1);
var lyr_LimiteIntravilan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteIntravilan_1, 
                style: style_LimiteIntravilan_1,
                popuplayertitle: 'Limite Intravilan',
                interactive: true,
                title: '<img src="styles/legend/LimiteIntravilan_1.png" /> Limite Intravilan'
            });
var format_TerenuriActiveETERRA_2 = new ol.format.GeoJSON();
var features_TerenuriActiveETERRA_2 = format_TerenuriActiveETERRA_2.readFeatures(json_TerenuriActiveETERRA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_TerenuriActiveETERRA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerenuriActiveETERRA_2.addFeatures(features_TerenuriActiveETERRA_2);
var lyr_TerenuriActiveETERRA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerenuriActiveETERRA_2, 
                style: style_TerenuriActiveETERRA_2,
                popuplayertitle: 'Terenuri Active ETERRA',
                interactive: true,
                title: '<img src="styles/legend/TerenuriActiveETERRA_2.png" /> Terenuri Active ETERRA'
            });
var format_ConstructiiActiveETERRA_3 = new ol.format.GeoJSON();
var features_ConstructiiActiveETERRA_3 = format_ConstructiiActiveETERRA_3.readFeatures(json_ConstructiiActiveETERRA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_ConstructiiActiveETERRA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConstructiiActiveETERRA_3.addFeatures(features_ConstructiiActiveETERRA_3);
var lyr_ConstructiiActiveETERRA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConstructiiActiveETERRA_3, 
                style: style_ConstructiiActiveETERRA_3,
                popuplayertitle: 'Constructii Active ETERRA',
                interactive: true,
                title: '<img src="styles/legend/ConstructiiActiveETERRA_3.png" /> Constructii Active ETERRA'
            });
var format_SVDAliniamentInfrastructura_4 = new ol.format.GeoJSON();
var features_SVDAliniamentInfrastructura_4 = format_SVDAliniamentInfrastructura_4.readFeatures(json_SVDAliniamentInfrastructura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVDAliniamentInfrastructura_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVDAliniamentInfrastructura_4.addFeatures(features_SVDAliniamentInfrastructura_4);
var lyr_SVDAliniamentInfrastructura_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVDAliniamentInfrastructura_4, 
                style: style_SVDAliniamentInfrastructura_4,
                popuplayertitle: 'SVD-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVDAliniamentInfrastructura_4.png" /> SVD-Aliniament Infrastructura'
            });
var format_SVZoneVerziSpecializate_5 = new ol.format.GeoJSON();
var features_SVZoneVerziSpecializate_5 = format_SVZoneVerziSpecializate_5.readFeatures(json_SVZoneVerziSpecializate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVZoneVerziSpecializate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVZoneVerziSpecializate_5.addFeatures(features_SVZoneVerziSpecializate_5);
var lyr_SVZoneVerziSpecializate_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVZoneVerziSpecializate_5, 
                style: style_SVZoneVerziSpecializate_5,
                popuplayertitle: 'SV-Zone Verzi Specializate',
                interactive: true,
                title: '<img src="styles/legend/SVZoneVerziSpecializate_5.png" /> SV-Zone Verzi Specializate'
            });
var format_SVAliniamentInfrastructura_6 = new ol.format.GeoJSON();
var features_SVAliniamentInfrastructura_6 = format_SVAliniamentInfrastructura_6.readFeatures(json_SVAliniamentInfrastructura_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamentInfrastructura_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamentInfrastructura_6.addFeatures(features_SVAliniamentInfrastructura_6);
var lyr_SVAliniamentInfrastructura_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamentInfrastructura_6, 
                style: style_SVAliniamentInfrastructura_6,
                popuplayertitle: 'SV-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamentInfrastructura_6.png" /> SV-Aliniament Infrastructura'
            });
var format_CopaciUATPoianaBlenchii_7 = new ol.format.GeoJSON();
var features_CopaciUATPoianaBlenchii_7 = format_CopaciUATPoianaBlenchii_7.readFeatures(json_CopaciUATPoianaBlenchii_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciUATPoianaBlenchii_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciUATPoianaBlenchii_7.addFeatures(features_CopaciUATPoianaBlenchii_7);
var lyr_CopaciUATPoianaBlenchii_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciUATPoianaBlenchii_7, 
                style: style_CopaciUATPoianaBlenchii_7,
                popuplayertitle: 'Copaci UAT Poiana Blenchii',
                interactive: true,
                title: '<img src="styles/legend/CopaciUATPoianaBlenchii_7.png" /> Copaci UAT Poiana Blenchii'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LimiteIntravilan_1.setVisible(false);lyr_TerenuriActiveETERRA_2.setVisible(true);lyr_ConstructiiActiveETERRA_3.setVisible(true);lyr_SVDAliniamentInfrastructura_4.setVisible(true);lyr_SVZoneVerziSpecializate_5.setVisible(true);lyr_SVAliniamentInfrastructura_6.setVisible(true);lyr_CopaciUATPoianaBlenchii_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LimiteIntravilan_1,lyr_TerenuriActiveETERRA_2,lyr_ConstructiiActiveETERRA_3,lyr_SVDAliniamentInfrastructura_4,lyr_SVZoneVerziSpecializate_5,lyr_SVAliniamentInfrastructura_6,lyr_CopaciUATPoianaBlenchii_7];
lyr_LimiteIntravilan_1.set('fieldAliases', {'fid': 'fid', });
lyr_TerenuriActiveETERRA_2.set('fieldAliases', {'fid': 'fid', 'Nr. CF': 'Nr. CF', });
lyr_ConstructiiActiveETERRA_3.set('fieldAliases', {'FID': 'FID', 'ID Ctii': 'ID Ctii', });
lyr_SVDAliniamentInfrastructura_4.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVZoneVerziSpecializate_5.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVAliniamentInfrastructura_6.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_CopaciUATPoianaBlenchii_7.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_LimiteIntravilan_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_TerenuriActiveETERRA_2.set('fieldImages', {'fid': 'TextEdit', 'Nr. CF': 'TextEdit', });
lyr_ConstructiiActiveETERRA_3.set('fieldImages', {'FID': 'TextEdit', 'ID Ctii': 'TextEdit', });
lyr_SVDAliniamentInfrastructura_4.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVZoneVerziSpecializate_5.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVAliniamentInfrastructura_6.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_CopaciUATPoianaBlenchii_7.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_LimiteIntravilan_1.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_TerenuriActiveETERRA_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nr. CF': 'inline label - visible with data', });
lyr_ConstructiiActiveETERRA_3.set('fieldLabels', {'FID': 'inline label - visible with data', 'ID Ctii': 'inline label - visible with data', });
lyr_SVDAliniamentInfrastructura_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVZoneVerziSpecializate_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVAliniamentInfrastructura_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_CopaciUATPoianaBlenchii_7.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciUATPoianaBlenchii_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});