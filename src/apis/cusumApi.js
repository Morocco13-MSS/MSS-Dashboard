import { Component } from 'react';
import axios from 'axios';

class cusumApi extends Component {

    async getCusumApi(params) {
        /*const response_dot = await axios.get('http://localhost:8080/fpm/userDot', {
            params,
        });

        const response_up = await axios.get('http://localhost:8080/fpm/scatter', {
            params,
        });

        const response_master = await axios.get('http://localhost:8080/fpm/benchmark', {
            params,
        });

        const response_bottom = await axios.get('http://localhost:8080/fpm/lo2', {
            params,
        });

        const result = {
            dot: response_dot.data,
            bottom: response_bottom.data,
            masterLine: response_master.data,
            up: response_up.data,
            loading: false
        }*/
        
        const response_dot = '{[{"x":105,"y":3.7585},{"x":106,"y":3.5847}]}';
        const response_bottom = '{[{"x":1,"y":0},{"x":2,"y":0},{"x":3,"y":0},{"x":4,"y":0},{"x":5,"y":0},{"x":6,"y":0},{"x":7,"y":0},{"x":8,"y":0},{"x":9,"y":0},{"x":10,"y":0},{"x":11,"y":0},{"x":12,"y":0},{"x":13,"y":0},{"x":14,"y":0},{"x":15,"y":0},{"x":16,"y":0},{"x":17,"y":0},{"x":18,"y":0},{"x":19,"y":0},{"x":20,"y":0},{"x":21,"y":0},{"x":22,"y":0},{"x":23,"y":0},{"x":24,"y":0},{"x":25,"y":0},{"x":26,"y":0},{"x":27,"y":0},{"x":28,"y":0},{"x":29,"y":0},{"x":30,"y":0},{"x":31,"y":0},{"x":32,"y":0},{"x":33,"y":0},{"x":34,"y":0},{"x":35,"y":0},{"x":36,"y":0},{"x":37,"y":0},{"x":38,"y":0},{"x":39,"y":0},{"x":40,"y":0},{"x":41,"y":0},{"x":42,"y":0},{"x":43,"y":0},{"x":44,"y":0},{"x":45,"y":0},{"x":46,"y":0},{"x":47,"y":0},{"x":48,"y":0},{"x":49,"y":0},{"x":50,"y":0},{"x":51,"y":0},{"x":52,"y":0},{"x":53,"y":0},{"x":54,"y":0},{"x":55,"y":0},{"x":56,"y":0},{"x":57,"y":0},{"x":58,"y":0},{"x":59,"y":0},{"x":60,"y":0},{"x":61,"y":0},{"x":62,"y":0},{"x":63,"y":0},{"x":64,"y":0},{"x":65,"y":0},{"x":66,"y":0},{"x":67,"y":0},{"x":68,"y":0},{"x":69,"y":0},{"x":70,"y":0},{"x":71,"y":0},{"x":72,"y":0},{"x":73,"y":0},{"x":74,"y":0},{"x":75,"y":0},{"x":76,"y":0},{"x":77,"y":0},{"x":78,"y":0},{"x":79,"y":0},{"x":80,"y":0},{"x":81,"y":0},{"x":82,"y":0},{"x":83,"y":0},{"x":84,"y":0},{"x":85,"y":0},{"x":86,"y":0},{"x":87,"y":0},{"x":88,"y":0},{"x":89,"y":0},{"x":90,"y":0},{"x":91,"y":0},{"x":92,"y":0},{"x":93,"y":0},{"x":94,"y":0},{"x":95,"y":0},{"x":96,"y":0},{"x":97,"y":0},{"x":98,"y":0},{"x":99,"y":0},{"x":100,"y":0},{"x":101,"y":0},{"x":102,"y":0},{"x":103,"y":0},{"x":104,"y":0},{"x":105,"y":0},{"x":106,"y":0},{"x":107,"y":0},{"x":108,"y":0},{"x":109,"y":0},{"x":110,"y":0},{"x":111,"y":0},{"x":112,"y":0},{"x":113,"y":0},{"x":114,"y":0},{"x":115,"y":0},{"x":116,"y":0},{"x":117,"y":0},{"x":118,"y":0},{"x":119,"y":0},{"x":120,"y":0},{"x":121,"y":0},{"x":122,"y":0},{"x":123,"y":0},{"x":124,"y":0},{"x":125,"y":0},{"x":126,"y":0},{"x":127,"y":0},{"x":128,"y":0},{"x":129,"y":0},{"x":130,"y":0},{"x":131,"y":0},{"x":132,"y":0},{"x":133,"y":0},{"x":134,"y":0},{"x":135,"y":0},{"x":136,"y":0},{"x":137,"y":0},{"x":138,"y":0},{"x":139,"y":0},{"x":140,"y":0},{"x":141,"y":0},{"x":142,"y":0},{"x":143,"y":0},{"x":144,"y":0},{"x":145,"y":0},{"x":146,"y":0},{"x":147,"y":0},{"x":148,"y":0},{"x":149,"y":0},{"x":150,"y":0},{"x":151,"y":0},{"x":152,"y":0},{"x":153,"y":0},{"x":154,"y":0},{"x":155,"y":0},{"x":156,"y":0},{"x":157,"y":0},{"x":158,"y":0},{"x":159,"y":0},{"x":160,"y":0},{"x":161,"y":0},{"x":162,"y":0},{"x":163,"y":0},{"x":164,"y":0},{"x":165,"y":0},{"x":166,"y":0},{"x":167,"y":0},{"x":168,"y":0},{"x":169,"y":0},{"x":170,"y":0},{"x":171,"y":0},{"x":172,"y":0},{"x":173,"y":0},{"x":174,"y":0},{"x":175,"y":0},{"x":176,"y":0},{"x":177,"y":0},{"x":178,"y":0},{"x":179,"y":0},{"x":180,"y":0},{"x":181,"y":0},{"x":182,"y":0},{"x":183,"y":0},{"x":184,"y":0},{"x":185,"y":0},{"x":186,"y":0},{"x":187,"y":0},{"x":188,"y":0},{"x":189,"y":0},{"x":190,"y":0},{"x":191,"y":0},{"x":192,"y":0},{"x":193,"y":0},{"x":194,"y":0},{"x":195,"y":0},{"x":196,"y":0},{"x":197,"y":0},{"x":198,"y":0},{"x":199,"y":0},{"x":200,"y":0},{"x":201,"y":0},{"x":202,"y":0},{"x":203,"y":0},{"x":204,"y":0},{"x":205,"y":0},{"x":206,"y":0},{"x":207,"y":0},{"x":208,"y":0},{"x":209,"y":0},{"x":210,"y":0},{"x":211,"y":0},{"x":212,"y":0},{"x":213,"y":0},{"x":214,"y":0},{"x":215,"y":0},{"x":216,"y":0},{"x":217,"y":0},{"x":218,"y":0},{"x":219,"y":0},{"x":220,"y":0},{"x":221,"y":0},{"x":222,"y":0},{"x":223,"y":0},{"x":224,"y":0},{"x":225,"y":0},{"x":226,"y":0},{"x":227,"y":0},{"x":228,"y":0},{"x":229,"y":0},{"x":230,"y":0},{"x":231,"y":0},{"x":232,"y":0},{"x":233,"y":0},{"x":234,"y":0},{"x":235,"y":0},{"x":236,"y":0}]}';
        const response_master = '{[{"x":1,"y":-0.1737},{"x":2,"y":-0.3475},{"x":3,"y":-0.5212},{"x":4,"y":-0.6949},{"x":5,"y":-0.8686},{"x":6,"y":-1.0424},{"x":7,"y":-0.2161},{"x":8,"y":-0.3898},{"x":9,"y":-0.5636},{"x":10,"y":-0.7373},{"x":11,"y":-0.911},{"x":12,"y":-1.0847},{"x":13,"y":-1.2585},{"x":14,"y":-1.4322},{"x":15,"y":-1.6059},{"x":16,"y":-1.7797},{"x":17,"y":-0.9534},{"x":18,"y":-1.1271},{"x":19,"y":-1.3008},{"x":20,"y":-1.4746},{"x":21,"y":-1.6483},{"x":22,"y":-1.822},{"x":23,"y":-1.9958},{"x":24,"y":-1.1695},{"x":25,"y":-1.3432},{"x":26,"y":-1.5169},{"x":27,"y":-1.6907},{"x":28,"y":-1.8644},{"x":29,"y":-2.0381},{"x":30,"y":-2.2119},{"x":31,"y":-2.3856},{"x":32,"y":-2.5593},{"x":33,"y":-2.7331},{"x":34,"y":-1.9068},{"x":35,"y":-1.0805},{"x":36,"y":-1.2542},{"x":37,"y":-1.428},{"x":38,"y":-1.6017},{"x":39,"y":-1.7754},{"x":40,"y":-0.9492},{"x":41,"y":-1.1229},{"x":42,"y":-0.2966},{"x":43,"y":-0.4703},{"x":44,"y":0.3559},{"x":45,"y":0.1822},{"x":46,"y":0.0085},{"x":47,"y":0.8347},{"x":48,"y":0.661},{"x":49,"y":0.4873},{"x":50,"y":1.3136},{"x":51,"y":1.1398},{"x":52,"y":1.9661},{"x":53,"y":1.7924},{"x":54,"y":1.6186},{"x":55,"y":1.4449},{"x":56,"y":1.2712},{"x":57,"y":1.0975},{"x":58,"y":0.9237},{"x":59,"y":1.75},{"x":60,"y":1.5763},{"x":61,"y":1.4025},{"x":62,"y":1.2288},{"x":63,"y":2.0551},{"x":64,"y":1.8814},{"x":65,"y":2.7076},{"x":66,"y":2.5339},{"x":67,"y":2.3602},{"x":68,"y":2.1864},{"x":69,"y":2.0127},{"x":70,"y":1.839},{"x":71,"y":1.6653},{"x":72,"y":1.4915},{"x":73,"y":2.3178},{"x":74,"y":2.1441},{"x":75,"y":1.9703},{"x":76,"y":1.7966},{"x":77,"y":1.6229},{"x":78,"y":1.4492},{"x":79,"y":1.2754},{"x":80,"y":1.1017},{"x":81,"y":1.928},{"x":82,"y":1.7542},{"x":83,"y":2.5805},{"x":84,"y":2.4068},{"x":85,"y":3.2331},{"x":86,"y":3.0593},{"x":87,"y":2.8856},{"x":88,"y":2.7119},{"x":89,"y":2.5381},{"x":90,"y":2.3644},{"x":91,"y":2.1907},{"x":92,"y":2.0169},{"x":93,"y":1.8432},{"x":94,"y":1.6695},{"x":95,"y":2.4958},{"x":96,"y":2.322},{"x":97,"y":2.1483},{"x":98,"y":1.9746},{"x":99,"y":1.8008},{"x":100,"y":1.6271},{"x":101,"y":2.4534},{"x":102,"y":2.2797},{"x":103,"y":3.1059},{"x":104,"y":2.9322},{"x":105,"y":3.7585},{"x":106,"y":3.5847},{"x":107,"y":3.411},{"x":108,"y":3.2373},{"x":109,"y":3.0636},{"x":110,"y":2.8898},{"x":111,"y":2.7161},{"x":112,"y":2.5424},{"x":113,"y":2.3686},{"x":114,"y":2.1949},{"x":115,"y":3.0212},{"x":116,"y":2.8475},{"x":117,"y":2.6737},{"x":118,"y":2.5},{"x":119,"y":2.3263},{"x":120,"y":2.1525},{"x":121,"y":2.9788},{"x":122,"y":2.8051},{"x":123,"y":3.6314},{"x":124,"y":3.4576},{"x":125,"y":4.2839},{"x":126,"y":4.1102},{"x":127,"y":3.9364},{"x":128,"y":3.7627},{"x":129,"y":3.589},{"x":130,"y":3.4153},{"x":131,"y":3.2415},{"x":132,"y":3.0678},{"x":133,"y":2.8941},{"x":134,"y":2.7203},{"x":135,"y":3.5466},{"x":136,"y":3.3729},{"x":137,"y":3.1992},{"x":138,"y":3.0254},{"x":139,"y":2.8517},{"x":140,"y":2.678},{"x":141,"y":3.5042},{"x":142,"y":3.3305},{"x":143,"y":4.1568},{"x":144,"y":3.9831},{"x":145,"y":4.8093},{"x":146,"y":4.6356},{"x":147,"y":4.4619},{"x":148,"y":4.2881},{"x":149,"y":4.1144},{"x":150,"y":3.9407},{"x":151,"y":3.7669},{"x":152,"y":3.5932},{"x":153,"y":3.4195},{"x":154,"y":3.2458},{"x":155,"y":4.072},{"x":156,"y":3.8983},{"x":157,"y":3.7246},{"x":158,"y":3.5508},{"x":159,"y":3.3771},{"x":160,"y":3.2034},{"x":161,"y":4.0297},{"x":162,"y":3.8559},{"x":163,"y":4.6822},{"x":164,"y":4.5085},{"x":165,"y":4.3347},{"x":166,"y":4.161},{"x":167,"y":3.9873},{"x":168,"y":3.8136},{"x":169,"y":3.6398},{"x":170,"y":3.4661},{"x":171,"y":3.2924},{"x":172,"y":3.1186},{"x":173,"y":2.9449},{"x":174,"y":2.7712},{"x":175,"y":3.5975},{"x":176,"y":3.4237},{"x":177,"y":3.25},{"x":178,"y":3.0763},{"x":179,"y":2.9025},{"x":180,"y":2.7288},{"x":181,"y":3.5551},{"x":182,"y":3.3814},{"x":183,"y":4.2076},{"x":184,"y":4.0339},{"x":185,"y":3.8602},{"x":186,"y":3.6864},{"x":187,"y":3.5127},{"x":188,"y":3.339},{"x":189,"y":3.1653},{"x":190,"y":2.9915},{"x":191,"y":2.8178},{"x":192,"y":2.6441},{"x":193,"y":2.4703},{"x":194,"y":2.2966},{"x":195,"y":3.1229},{"x":196,"y":2.9492},{"x":197,"y":2.7754},{"x":198,"y":2.6017},{"x":199,"y":2.428},{"x":200,"y":2.2542},{"x":201,"y":2.0805},{"x":202,"y":1.9068},{"x":203,"y":2.7331},{"x":204,"y":2.5593},{"x":205,"y":2.3856},{"x":206,"y":3.2119},{"x":207,"y":3.0381},{"x":208,"y":2.8644},{"x":209,"y":2.6907},{"x":210,"y":2.5169},{"x":211,"y":2.3432},{"x":212,"y":2.1695},{"x":213,"y":1.9958},{"x":214,"y":1.822},{"x":215,"y":1.6483},{"x":216,"y":1.4746},{"x":217,"y":1.3008},{"x":218,"y":1.1271},{"x":219,"y":0.9534},{"x":220,"y":0.7797},{"x":221,"y":0.6059},{"x":222,"y":1.4322},{"x":223,"y":2.2585},{"x":224,"y":2.0847},{"x":225,"y":1.911},{"x":226,"y":1.7373},{"x":227,"y":1.5636},{"x":228,"y":1.3898},{"x":229,"y":1.2161},{"x":230,"y":1.0424},{"x":231,"y":0.8686},{"x":232,"y":0.6949},{"x":233,"y":0.5212},{"x":234,"y":0.3475},{"x":235,"y":0.1737},{"x":236,"y":-9.7145e-16}]}';
        const response_up = '{[{"x":1,"y":3.5},{"x":2,"y":3.5},{"x":3,"y":3.5},{"x":4,"y":3.5},{"x":5,"y":3.5},{"x":6,"y":3.5},{"x":7,"y":3.5},{"x":8,"y":3.5},{"x":9,"y":3.5},{"x":10,"y":3.5},{"x":11,"y":3.5},{"x":12,"y":3.5},{"x":13,"y":3.5},{"x":14,"y":3.5},{"x":15,"y":3.5},{"x":16,"y":3.5},{"x":17,"y":3.5},{"x":18,"y":3.5},{"x":19,"y":3.5},{"x":20,"y":3.5},{"x":21,"y":3.5},{"x":22,"y":3.5},{"x":23,"y":3.5},{"x":24,"y":3.5},{"x":25,"y":3.5},{"x":26,"y":3.5},{"x":27,"y":3.5},{"x":28,"y":3.5},{"x":29,"y":3.5},{"x":30,"y":3.5},{"x":31,"y":3.5},{"x":32,"y":3.5},{"x":33,"y":3.5},{"x":34,"y":3.5},{"x":35,"y":3.5},{"x":36,"y":3.5},{"x":37,"y":3.5},{"x":38,"y":3.5},{"x":39,"y":3.5},{"x":40,"y":3.5},{"x":41,"y":3.5},{"x":42,"y":3.5},{"x":43,"y":3.5},{"x":44,"y":3.5},{"x":45,"y":3.5},{"x":46,"y":3.5},{"x":47,"y":3.5},{"x":48,"y":3.5},{"x":49,"y":3.5},{"x":50,"y":3.5},{"x":51,"y":3.5},{"x":52,"y":3.5},{"x":53,"y":3.5},{"x":54,"y":3.5},{"x":55,"y":3.5},{"x":56,"y":3.5},{"x":57,"y":3.5},{"x":58,"y":3.5},{"x":59,"y":3.5},{"x":60,"y":3.5},{"x":61,"y":3.5},{"x":62,"y":3.5},{"x":63,"y":3.5},{"x":64,"y":3.5},{"x":65,"y":3.5},{"x":66,"y":3.5},{"x":67,"y":3.5},{"x":68,"y":3.5},{"x":69,"y":3.5},{"x":70,"y":3.5},{"x":71,"y":3.5},{"x":72,"y":3.5},{"x":73,"y":3.5},{"x":74,"y":3.5},{"x":75,"y":3.5},{"x":76,"y":3.5},{"x":77,"y":3.5},{"x":78,"y":3.5},{"x":79,"y":3.5},{"x":80,"y":3.5},{"x":81,"y":3.5},{"x":82,"y":3.5},{"x":83,"y":3.5},{"x":84,"y":3.5},{"x":85,"y":3.5},{"x":86,"y":3.5},{"x":87,"y":3.5},{"x":88,"y":3.5},{"x":89,"y":3.5},{"x":90,"y":3.5},{"x":91,"y":3.5},{"x":92,"y":3.5},{"x":93,"y":3.5},{"x":94,"y":3.5},{"x":95,"y":3.5},{"x":96,"y":3.5},{"x":97,"y":3.5},{"x":98,"y":3.5},{"x":99,"y":3.5},{"x":100,"y":3.5},{"x":101,"y":3.5},{"x":102,"y":3.5},{"x":103,"y":3.5},{"x":104,"y":3.5},{"x":105,"y":3.5},{"x":106,"y":3.5},{"x":107,"y":3.5},{"x":108,"y":3.5},{"x":109,"y":3.5},{"x":110,"y":3.5},{"x":111,"y":3.5},{"x":112,"y":3.5},{"x":113,"y":3.5},{"x":114,"y":3.5},{"x":115,"y":3.5},{"x":116,"y":3.5},{"x":117,"y":3.5},{"x":118,"y":3.5},{"x":119,"y":3.5},{"x":120,"y":3.5},{"x":121,"y":3.5},{"x":122,"y":3.5},{"x":123,"y":3.5},{"x":124,"y":3.5},{"x":125,"y":3.5},{"x":126,"y":3.5},{"x":127,"y":3.5},{"x":128,"y":3.5},{"x":129,"y":3.5},{"x":130,"y":3.5},{"x":131,"y":3.5},{"x":132,"y":3.5},{"x":133,"y":3.5},{"x":134,"y":3.5},{"x":135,"y":3.5},{"x":136,"y":3.5},{"x":137,"y":3.5},{"x":138,"y":3.5},{"x":139,"y":3.5},{"x":140,"y":3.5},{"x":141,"y":3.5},{"x":142,"y":3.5},{"x":143,"y":3.5},{"x":144,"y":3.5},{"x":145,"y":3.5},{"x":146,"y":3.5},{"x":147,"y":3.5},{"x":148,"y":3.5},{"x":149,"y":3.5},{"x":150,"y":3.5},{"x":151,"y":3.5},{"x":152,"y":3.5},{"x":153,"y":3.5},{"x":154,"y":3.5},{"x":155,"y":3.5},{"x":156,"y":3.5},{"x":157,"y":3.5},{"x":158,"y":3.5},{"x":159,"y":3.5},{"x":160,"y":3.5},{"x":161,"y":3.5},{"x":162,"y":3.5},{"x":163,"y":3.5},{"x":164,"y":3.5},{"x":165,"y":3.5},{"x":166,"y":3.5},{"x":167,"y":3.5},{"x":168,"y":3.5},{"x":169,"y":3.5},{"x":170,"y":3.5},{"x":171,"y":3.5},{"x":172,"y":3.5},{"x":173,"y":3.5},{"x":174,"y":3.5},{"x":175,"y":3.5},{"x":176,"y":3.5},{"x":177,"y":3.5},{"x":178,"y":3.5},{"x":179,"y":3.5},{"x":180,"y":3.5},{"x":181,"y":3.5},{"x":182,"y":3.5},{"x":183,"y":3.5},{"x":184,"y":3.5},{"x":185,"y":3.5},{"x":186,"y":3.5},{"x":187,"y":3.5},{"x":188,"y":3.5},{"x":189,"y":3.5},{"x":190,"y":3.5},{"x":191,"y":3.5},{"x":192,"y":3.5},{"x":193,"y":3.5},{"x":194,"y":3.5},{"x":195,"y":3.5},{"x":196,"y":3.5},{"x":197,"y":3.5},{"x":198,"y":3.5},{"x":199,"y":3.5},{"x":200,"y":3.5},{"x":201,"y":3.5},{"x":202,"y":3.5},{"x":203,"y":3.5},{"x":204,"y":3.5},{"x":205,"y":3.5},{"x":206,"y":3.5},{"x":207,"y":3.5},{"x":208,"y":3.5},{"x":209,"y":3.5},{"x":210,"y":3.5},{"x":211,"y":3.5},{"x":212,"y":3.5},{"x":213,"y":3.5},{"x":214,"y":3.5},{"x":215,"y":3.5},{"x":216,"y":3.5},{"x":217,"y":3.5},{"x":218,"y":3.5},{"x":219,"y":3.5},{"x":220,"y":3.5},{"x":221,"y":3.5},{"x":222,"y":3.5},{"x":223,"y":3.5},{"x":224,"y":3.5},{"x":225,"y":3.5},{"x":226,"y":3.5},{"x":227,"y":3.5},{"x":228,"y":3.5},{"x":229,"y":3.5},{"x":230,"y":3.5},{"x":231,"y":3.5},{"x":232,"y":3.5},{"x":233,"y":3.5},{"x":234,"y":3.5},{"x":235,"y":3.5},{"x":236,"y":3.5}]}';

        const result = {
            dot: response_dot.data,
            bottom: response_bottom.data,
            masterLine: response_master.data,
            up: response_up.data,
            loading: false
        }
        return result;
    }

    async getCusumApiForDrOnly(params) {
        /*      const response_dot = await axios.get('http://localhost:8080/fpm/userDot', {
                  params,
              });
      
              const response_up = await axios.get('http://localhost:8080/fpm/scatter', {
                  params,
              });
      
              const response_master = await axios.get('http://localhost:8080/fpm/benchmark', {
                  params,
              });
      
              const response_bottom = await axios.get('http://localhost:8080/fpm/lo2', {
                  params,
              });
      */
        const response_dot = '{[{"x":105,"y":3.7585},{"x":106,"y":3.5847}]}';
        const response_bottom = '{[{"x":1,"y":0},{"x":2,"y":0},{"x":3,"y":0},{"x":4,"y":0},{"x":5,"y":0},{"x":6,"y":0},{"x":7,"y":0},{"x":8,"y":0},{"x":9,"y":0},{"x":10,"y":0},{"x":11,"y":0},{"x":12,"y":0},{"x":13,"y":0},{"x":14,"y":0},{"x":15,"y":0},{"x":16,"y":0},{"x":17,"y":0},{"x":18,"y":0},{"x":19,"y":0},{"x":20,"y":0},{"x":21,"y":0},{"x":22,"y":0},{"x":23,"y":0},{"x":24,"y":0},{"x":25,"y":0},{"x":26,"y":0},{"x":27,"y":0},{"x":28,"y":0},{"x":29,"y":0},{"x":30,"y":0},{"x":31,"y":0},{"x":32,"y":0},{"x":33,"y":0},{"x":34,"y":0},{"x":35,"y":0},{"x":36,"y":0},{"x":37,"y":0},{"x":38,"y":0},{"x":39,"y":0},{"x":40,"y":0},{"x":41,"y":0},{"x":42,"y":0},{"x":43,"y":0},{"x":44,"y":0},{"x":45,"y":0},{"x":46,"y":0},{"x":47,"y":0},{"x":48,"y":0},{"x":49,"y":0},{"x":50,"y":0},{"x":51,"y":0},{"x":52,"y":0},{"x":53,"y":0},{"x":54,"y":0},{"x":55,"y":0},{"x":56,"y":0},{"x":57,"y":0},{"x":58,"y":0},{"x":59,"y":0},{"x":60,"y":0},{"x":61,"y":0},{"x":62,"y":0},{"x":63,"y":0},{"x":64,"y":0},{"x":65,"y":0},{"x":66,"y":0},{"x":67,"y":0},{"x":68,"y":0},{"x":69,"y":0},{"x":70,"y":0},{"x":71,"y":0},{"x":72,"y":0},{"x":73,"y":0},{"x":74,"y":0},{"x":75,"y":0},{"x":76,"y":0},{"x":77,"y":0},{"x":78,"y":0},{"x":79,"y":0},{"x":80,"y":0},{"x":81,"y":0},{"x":82,"y":0},{"x":83,"y":0},{"x":84,"y":0},{"x":85,"y":0},{"x":86,"y":0},{"x":87,"y":0},{"x":88,"y":0},{"x":89,"y":0},{"x":90,"y":0},{"x":91,"y":0},{"x":92,"y":0},{"x":93,"y":0},{"x":94,"y":0},{"x":95,"y":0},{"x":96,"y":0},{"x":97,"y":0},{"x":98,"y":0},{"x":99,"y":0},{"x":100,"y":0},{"x":101,"y":0},{"x":102,"y":0},{"x":103,"y":0},{"x":104,"y":0},{"x":105,"y":0},{"x":106,"y":0},{"x":107,"y":0},{"x":108,"y":0},{"x":109,"y":0},{"x":110,"y":0},{"x":111,"y":0},{"x":112,"y":0},{"x":113,"y":0},{"x":114,"y":0},{"x":115,"y":0},{"x":116,"y":0},{"x":117,"y":0},{"x":118,"y":0},{"x":119,"y":0},{"x":120,"y":0},{"x":121,"y":0},{"x":122,"y":0},{"x":123,"y":0},{"x":124,"y":0},{"x":125,"y":0},{"x":126,"y":0},{"x":127,"y":0},{"x":128,"y":0},{"x":129,"y":0},{"x":130,"y":0},{"x":131,"y":0},{"x":132,"y":0},{"x":133,"y":0},{"x":134,"y":0},{"x":135,"y":0},{"x":136,"y":0},{"x":137,"y":0},{"x":138,"y":0},{"x":139,"y":0},{"x":140,"y":0},{"x":141,"y":0},{"x":142,"y":0},{"x":143,"y":0},{"x":144,"y":0},{"x":145,"y":0},{"x":146,"y":0},{"x":147,"y":0},{"x":148,"y":0},{"x":149,"y":0},{"x":150,"y":0},{"x":151,"y":0},{"x":152,"y":0},{"x":153,"y":0},{"x":154,"y":0},{"x":155,"y":0},{"x":156,"y":0},{"x":157,"y":0},{"x":158,"y":0},{"x":159,"y":0},{"x":160,"y":0},{"x":161,"y":0},{"x":162,"y":0},{"x":163,"y":0},{"x":164,"y":0},{"x":165,"y":0},{"x":166,"y":0},{"x":167,"y":0},{"x":168,"y":0},{"x":169,"y":0},{"x":170,"y":0},{"x":171,"y":0},{"x":172,"y":0},{"x":173,"y":0},{"x":174,"y":0},{"x":175,"y":0},{"x":176,"y":0},{"x":177,"y":0},{"x":178,"y":0},{"x":179,"y":0},{"x":180,"y":0},{"x":181,"y":0},{"x":182,"y":0},{"x":183,"y":0},{"x":184,"y":0},{"x":185,"y":0},{"x":186,"y":0},{"x":187,"y":0},{"x":188,"y":0},{"x":189,"y":0},{"x":190,"y":0},{"x":191,"y":0},{"x":192,"y":0},{"x":193,"y":0},{"x":194,"y":0},{"x":195,"y":0},{"x":196,"y":0},{"x":197,"y":0},{"x":198,"y":0},{"x":199,"y":0},{"x":200,"y":0},{"x":201,"y":0},{"x":202,"y":0},{"x":203,"y":0},{"x":204,"y":0},{"x":205,"y":0},{"x":206,"y":0},{"x":207,"y":0},{"x":208,"y":0},{"x":209,"y":0},{"x":210,"y":0},{"x":211,"y":0},{"x":212,"y":0},{"x":213,"y":0},{"x":214,"y":0},{"x":215,"y":0},{"x":216,"y":0},{"x":217,"y":0},{"x":218,"y":0},{"x":219,"y":0},{"x":220,"y":0},{"x":221,"y":0},{"x":222,"y":0},{"x":223,"y":0},{"x":224,"y":0},{"x":225,"y":0},{"x":226,"y":0},{"x":227,"y":0},{"x":228,"y":0},{"x":229,"y":0},{"x":230,"y":0},{"x":231,"y":0},{"x":232,"y":0},{"x":233,"y":0},{"x":234,"y":0},{"x":235,"y":0},{"x":236,"y":0}]}';
        const response_master = '{[{"x":1,"y":-0.1737},{"x":2,"y":-0.3475},{"x":3,"y":-0.5212},{"x":4,"y":-0.6949},{"x":5,"y":-0.8686},{"x":6,"y":-1.0424},{"x":7,"y":-0.2161},{"x":8,"y":-0.3898},{"x":9,"y":-0.5636},{"x":10,"y":-0.7373},{"x":11,"y":-0.911},{"x":12,"y":-1.0847},{"x":13,"y":-1.2585},{"x":14,"y":-1.4322},{"x":15,"y":-1.6059},{"x":16,"y":-1.7797},{"x":17,"y":-0.9534},{"x":18,"y":-1.1271},{"x":19,"y":-1.3008},{"x":20,"y":-1.4746},{"x":21,"y":-1.6483},{"x":22,"y":-1.822},{"x":23,"y":-1.9958},{"x":24,"y":-1.1695},{"x":25,"y":-1.3432},{"x":26,"y":-1.5169},{"x":27,"y":-1.6907},{"x":28,"y":-1.8644},{"x":29,"y":-2.0381},{"x":30,"y":-2.2119},{"x":31,"y":-2.3856},{"x":32,"y":-2.5593},{"x":33,"y":-2.7331},{"x":34,"y":-1.9068},{"x":35,"y":-1.0805},{"x":36,"y":-1.2542},{"x":37,"y":-1.428},{"x":38,"y":-1.6017},{"x":39,"y":-1.7754},{"x":40,"y":-0.9492},{"x":41,"y":-1.1229},{"x":42,"y":-0.2966},{"x":43,"y":-0.4703},{"x":44,"y":0.3559},{"x":45,"y":0.1822},{"x":46,"y":0.0085},{"x":47,"y":0.8347},{"x":48,"y":0.661},{"x":49,"y":0.4873},{"x":50,"y":1.3136},{"x":51,"y":1.1398},{"x":52,"y":1.9661},{"x":53,"y":1.7924},{"x":54,"y":1.6186},{"x":55,"y":1.4449},{"x":56,"y":1.2712},{"x":57,"y":1.0975},{"x":58,"y":0.9237},{"x":59,"y":1.75},{"x":60,"y":1.5763},{"x":61,"y":1.4025},{"x":62,"y":1.2288},{"x":63,"y":2.0551},{"x":64,"y":1.8814},{"x":65,"y":2.7076},{"x":66,"y":2.5339},{"x":67,"y":2.3602},{"x":68,"y":2.1864},{"x":69,"y":2.0127},{"x":70,"y":1.839},{"x":71,"y":1.6653},{"x":72,"y":1.4915},{"x":73,"y":2.3178},{"x":74,"y":2.1441},{"x":75,"y":1.9703},{"x":76,"y":1.7966},{"x":77,"y":1.6229},{"x":78,"y":1.4492},{"x":79,"y":1.2754},{"x":80,"y":1.1017},{"x":81,"y":1.928},{"x":82,"y":1.7542},{"x":83,"y":2.5805},{"x":84,"y":2.4068},{"x":85,"y":3.2331},{"x":86,"y":3.0593},{"x":87,"y":2.8856},{"x":88,"y":2.7119},{"x":89,"y":2.5381},{"x":90,"y":2.3644},{"x":91,"y":2.1907},{"x":92,"y":2.0169},{"x":93,"y":1.8432},{"x":94,"y":1.6695},{"x":95,"y":2.4958},{"x":96,"y":2.322},{"x":97,"y":2.1483},{"x":98,"y":1.9746},{"x":99,"y":1.8008},{"x":100,"y":1.6271},{"x":101,"y":2.4534},{"x":102,"y":2.2797},{"x":103,"y":3.1059},{"x":104,"y":2.9322},{"x":105,"y":3.7585},{"x":106,"y":3.5847},{"x":107,"y":3.411},{"x":108,"y":3.2373},{"x":109,"y":3.0636},{"x":110,"y":2.8898},{"x":111,"y":2.7161},{"x":112,"y":2.5424},{"x":113,"y":2.3686},{"x":114,"y":2.1949},{"x":115,"y":3.0212},{"x":116,"y":2.8475},{"x":117,"y":2.6737},{"x":118,"y":2.5},{"x":119,"y":2.3263},{"x":120,"y":2.1525},{"x":121,"y":2.9788},{"x":122,"y":2.8051},{"x":123,"y":3.6314},{"x":124,"y":3.4576},{"x":125,"y":4.2839},{"x":126,"y":4.1102},{"x":127,"y":3.9364},{"x":128,"y":3.7627},{"x":129,"y":3.589},{"x":130,"y":3.4153},{"x":131,"y":3.2415},{"x":132,"y":3.0678},{"x":133,"y":2.8941},{"x":134,"y":2.7203},{"x":135,"y":3.5466},{"x":136,"y":3.3729},{"x":137,"y":3.1992},{"x":138,"y":3.0254},{"x":139,"y":2.8517},{"x":140,"y":2.678},{"x":141,"y":3.5042},{"x":142,"y":3.3305},{"x":143,"y":4.1568},{"x":144,"y":3.9831},{"x":145,"y":4.8093},{"x":146,"y":4.6356},{"x":147,"y":4.4619},{"x":148,"y":4.2881},{"x":149,"y":4.1144},{"x":150,"y":3.9407},{"x":151,"y":3.7669},{"x":152,"y":3.5932},{"x":153,"y":3.4195},{"x":154,"y":3.2458},{"x":155,"y":4.072},{"x":156,"y":3.8983},{"x":157,"y":3.7246},{"x":158,"y":3.5508},{"x":159,"y":3.3771},{"x":160,"y":3.2034},{"x":161,"y":4.0297},{"x":162,"y":3.8559},{"x":163,"y":4.6822},{"x":164,"y":4.5085},{"x":165,"y":4.3347},{"x":166,"y":4.161},{"x":167,"y":3.9873},{"x":168,"y":3.8136},{"x":169,"y":3.6398},{"x":170,"y":3.4661},{"x":171,"y":3.2924},{"x":172,"y":3.1186},{"x":173,"y":2.9449},{"x":174,"y":2.7712},{"x":175,"y":3.5975},{"x":176,"y":3.4237},{"x":177,"y":3.25},{"x":178,"y":3.0763},{"x":179,"y":2.9025},{"x":180,"y":2.7288},{"x":181,"y":3.5551},{"x":182,"y":3.3814},{"x":183,"y":4.2076},{"x":184,"y":4.0339},{"x":185,"y":3.8602},{"x":186,"y":3.6864},{"x":187,"y":3.5127},{"x":188,"y":3.339},{"x":189,"y":3.1653},{"x":190,"y":2.9915},{"x":191,"y":2.8178},{"x":192,"y":2.6441},{"x":193,"y":2.4703},{"x":194,"y":2.2966},{"x":195,"y":3.1229},{"x":196,"y":2.9492},{"x":197,"y":2.7754},{"x":198,"y":2.6017},{"x":199,"y":2.428},{"x":200,"y":2.2542},{"x":201,"y":2.0805},{"x":202,"y":1.9068},{"x":203,"y":2.7331},{"x":204,"y":2.5593},{"x":205,"y":2.3856},{"x":206,"y":3.2119},{"x":207,"y":3.0381},{"x":208,"y":2.8644},{"x":209,"y":2.6907},{"x":210,"y":2.5169},{"x":211,"y":2.3432},{"x":212,"y":2.1695},{"x":213,"y":1.9958},{"x":214,"y":1.822},{"x":215,"y":1.6483},{"x":216,"y":1.4746},{"x":217,"y":1.3008},{"x":218,"y":1.1271},{"x":219,"y":0.9534},{"x":220,"y":0.7797},{"x":221,"y":0.6059},{"x":222,"y":1.4322},{"x":223,"y":2.2585},{"x":224,"y":2.0847},{"x":225,"y":1.911},{"x":226,"y":1.7373},{"x":227,"y":1.5636},{"x":228,"y":1.3898},{"x":229,"y":1.2161},{"x":230,"y":1.0424},{"x":231,"y":0.8686},{"x":232,"y":0.6949},{"x":233,"y":0.5212},{"x":234,"y":0.3475},{"x":235,"y":0.1737},{"x":236,"y":-9.7145e-16}]}';
        const response_up = '{[{"x":1,"y":3.5},{"x":2,"y":3.5},{"x":3,"y":3.5},{"x":4,"y":3.5},{"x":5,"y":3.5},{"x":6,"y":3.5},{"x":7,"y":3.5},{"x":8,"y":3.5},{"x":9,"y":3.5},{"x":10,"y":3.5},{"x":11,"y":3.5},{"x":12,"y":3.5},{"x":13,"y":3.5},{"x":14,"y":3.5},{"x":15,"y":3.5},{"x":16,"y":3.5},{"x":17,"y":3.5},{"x":18,"y":3.5},{"x":19,"y":3.5},{"x":20,"y":3.5},{"x":21,"y":3.5},{"x":22,"y":3.5},{"x":23,"y":3.5},{"x":24,"y":3.5},{"x":25,"y":3.5},{"x":26,"y":3.5},{"x":27,"y":3.5},{"x":28,"y":3.5},{"x":29,"y":3.5},{"x":30,"y":3.5},{"x":31,"y":3.5},{"x":32,"y":3.5},{"x":33,"y":3.5},{"x":34,"y":3.5},{"x":35,"y":3.5},{"x":36,"y":3.5},{"x":37,"y":3.5},{"x":38,"y":3.5},{"x":39,"y":3.5},{"x":40,"y":3.5},{"x":41,"y":3.5},{"x":42,"y":3.5},{"x":43,"y":3.5},{"x":44,"y":3.5},{"x":45,"y":3.5},{"x":46,"y":3.5},{"x":47,"y":3.5},{"x":48,"y":3.5},{"x":49,"y":3.5},{"x":50,"y":3.5},{"x":51,"y":3.5},{"x":52,"y":3.5},{"x":53,"y":3.5},{"x":54,"y":3.5},{"x":55,"y":3.5},{"x":56,"y":3.5},{"x":57,"y":3.5},{"x":58,"y":3.5},{"x":59,"y":3.5},{"x":60,"y":3.5},{"x":61,"y":3.5},{"x":62,"y":3.5},{"x":63,"y":3.5},{"x":64,"y":3.5},{"x":65,"y":3.5},{"x":66,"y":3.5},{"x":67,"y":3.5},{"x":68,"y":3.5},{"x":69,"y":3.5},{"x":70,"y":3.5},{"x":71,"y":3.5},{"x":72,"y":3.5},{"x":73,"y":3.5},{"x":74,"y":3.5},{"x":75,"y":3.5},{"x":76,"y":3.5},{"x":77,"y":3.5},{"x":78,"y":3.5},{"x":79,"y":3.5},{"x":80,"y":3.5},{"x":81,"y":3.5},{"x":82,"y":3.5},{"x":83,"y":3.5},{"x":84,"y":3.5},{"x":85,"y":3.5},{"x":86,"y":3.5},{"x":87,"y":3.5},{"x":88,"y":3.5},{"x":89,"y":3.5},{"x":90,"y":3.5},{"x":91,"y":3.5},{"x":92,"y":3.5},{"x":93,"y":3.5},{"x":94,"y":3.5},{"x":95,"y":3.5},{"x":96,"y":3.5},{"x":97,"y":3.5},{"x":98,"y":3.5},{"x":99,"y":3.5},{"x":100,"y":3.5},{"x":101,"y":3.5},{"x":102,"y":3.5},{"x":103,"y":3.5},{"x":104,"y":3.5},{"x":105,"y":3.5},{"x":106,"y":3.5},{"x":107,"y":3.5},{"x":108,"y":3.5},{"x":109,"y":3.5},{"x":110,"y":3.5},{"x":111,"y":3.5},{"x":112,"y":3.5},{"x":113,"y":3.5},{"x":114,"y":3.5},{"x":115,"y":3.5},{"x":116,"y":3.5},{"x":117,"y":3.5},{"x":118,"y":3.5},{"x":119,"y":3.5},{"x":120,"y":3.5},{"x":121,"y":3.5},{"x":122,"y":3.5},{"x":123,"y":3.5},{"x":124,"y":3.5},{"x":125,"y":3.5},{"x":126,"y":3.5},{"x":127,"y":3.5},{"x":128,"y":3.5},{"x":129,"y":3.5},{"x":130,"y":3.5},{"x":131,"y":3.5},{"x":132,"y":3.5},{"x":133,"y":3.5},{"x":134,"y":3.5},{"x":135,"y":3.5},{"x":136,"y":3.5},{"x":137,"y":3.5},{"x":138,"y":3.5},{"x":139,"y":3.5},{"x":140,"y":3.5},{"x":141,"y":3.5},{"x":142,"y":3.5},{"x":143,"y":3.5},{"x":144,"y":3.5},{"x":145,"y":3.5},{"x":146,"y":3.5},{"x":147,"y":3.5},{"x":148,"y":3.5},{"x":149,"y":3.5},{"x":150,"y":3.5},{"x":151,"y":3.5},{"x":152,"y":3.5},{"x":153,"y":3.5},{"x":154,"y":3.5},{"x":155,"y":3.5},{"x":156,"y":3.5},{"x":157,"y":3.5},{"x":158,"y":3.5},{"x":159,"y":3.5},{"x":160,"y":3.5},{"x":161,"y":3.5},{"x":162,"y":3.5},{"x":163,"y":3.5},{"x":164,"y":3.5},{"x":165,"y":3.5},{"x":166,"y":3.5},{"x":167,"y":3.5},{"x":168,"y":3.5},{"x":169,"y":3.5},{"x":170,"y":3.5},{"x":171,"y":3.5},{"x":172,"y":3.5},{"x":173,"y":3.5},{"x":174,"y":3.5},{"x":175,"y":3.5},{"x":176,"y":3.5},{"x":177,"y":3.5},{"x":178,"y":3.5},{"x":179,"y":3.5},{"x":180,"y":3.5},{"x":181,"y":3.5},{"x":182,"y":3.5},{"x":183,"y":3.5},{"x":184,"y":3.5},{"x":185,"y":3.5},{"x":186,"y":3.5},{"x":187,"y":3.5},{"x":188,"y":3.5},{"x":189,"y":3.5},{"x":190,"y":3.5},{"x":191,"y":3.5},{"x":192,"y":3.5},{"x":193,"y":3.5},{"x":194,"y":3.5},{"x":195,"y":3.5},{"x":196,"y":3.5},{"x":197,"y":3.5},{"x":198,"y":3.5},{"x":199,"y":3.5},{"x":200,"y":3.5},{"x":201,"y":3.5},{"x":202,"y":3.5},{"x":203,"y":3.5},{"x":204,"y":3.5},{"x":205,"y":3.5},{"x":206,"y":3.5},{"x":207,"y":3.5},{"x":208,"y":3.5},{"x":209,"y":3.5},{"x":210,"y":3.5},{"x":211,"y":3.5},{"x":212,"y":3.5},{"x":213,"y":3.5},{"x":214,"y":3.5},{"x":215,"y":3.5},{"x":216,"y":3.5},{"x":217,"y":3.5},{"x":218,"y":3.5},{"x":219,"y":3.5},{"x":220,"y":3.5},{"x":221,"y":3.5},{"x":222,"y":3.5},{"x":223,"y":3.5},{"x":224,"y":3.5},{"x":225,"y":3.5},{"x":226,"y":3.5},{"x":227,"y":3.5},{"x":228,"y":3.5},{"x":229,"y":3.5},{"x":230,"y":3.5},{"x":231,"y":3.5},{"x":232,"y":3.5},{"x":233,"y":3.5},{"x":234,"y":3.5},{"x":235,"y":3.5},{"x":236,"y":3.5}]}';

        const result = {
            dot: response_dot.data,
            bottom: response_bottom.data,
            masterLine: response_master.data,
            up: response_up.data,
            loading: false
        }
        return result;

    }

}
export default cusumApi;