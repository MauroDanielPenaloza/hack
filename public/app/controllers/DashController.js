app.controller('DashController', ['$scope','$http','$mdDialog', function($scope, $http, $mdDialog){
    $scope.inputsPred=[
    {name:"PLS Irrigation (m^3/day)", value:1500}
    ,{name: 'Barren Irrigation (m^3/day)', value:1500}
    ,{name: 'Lluvia (m3^3/day)', value:1500}
    ,{name: 'Total Irrigation (m^3/day)', value:1500}
    ,{name: 'Evaporation Rate (m^3/day)', value:1500}
    ,{name: 'Mineral Placedin VLF (ton)', value:40000}
    ,{name: 'Flow to Process Plant (m^3/day)', value:1500}];
    $scope.parametrosPrediccion={datos:[]};
    var salidaNames=["Volumen (m^3)", "AARS (snm)","Cota (mts)"];
    var discretValues=[
          'Bajo Critico',
           'Normal-Bajo',
           'Alto Critico',
         'PADE',
          'Normal',
          'Normal-alto',
          'Normal'
         ];
         $scope.N=7;
         $scope.mostrarPronostico=false;
$scope.registros=
[
    {
        "id": "2217",
        "t": "1/25/2017",
        "AASRRiser": "3924.700",
        "PLSIrrigation": "20021.000",
        "BarrenIrrigation": "65564.000",
        "FlowtoProcessPlant": "64551.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "85072.000",
        "QacumMin": "4723.525",
        " ": " "
    },
    {
        "id": "2218",
        "t": "1/26/2017",
        "AASRRiser": "3924.600",
        "PLSIrrigation": "21090.000",
        "BarrenIrrigation": "65735.000",
        "FlowtoProcessPlant": "66065.000",
        "MoistureofRock": "0.014",
        "MineralPlacedinVLF": "92776.000",
        "QacumMin": "4707.885",
        " ": " "
    },
    {
        "id": "2219",
        "t": "1/27/2017",
        "AASRRiser": "3924.800",
        "PLSIrrigation": "22339.000",
        "BarrenIrrigation": "65141.000",
        "FlowtoProcessPlant": "63862.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "84782.000",
        "QacumMin": "4372.278",
        " ": " "
    },
    {
        "id": "2220",
        "t": "1/28/2017",
        "AASRRiser": "3924.600",
        "PLSIrrigation": "20505.000",
        "BarrenIrrigation": "66072.000",
        "FlowtoProcessPlant": "66558.000",
        "MoistureofRock": "0.015",
        "MineralPlacedinVLF": "83506.000",
        "QacumMin": "4180.779",
        " ": " "
    },
    {
        "id": "2221",
        "t": "1/29/2017",
        "AASRRiser": "3924.700",
        "PLSIrrigation": "22210.000",
        "BarrenIrrigation": "64077.000",
        "FlowtoProcessPlant": "64698.000",
        "MoistureofRock": "0.006",
        "MineralPlacedinVLF": "86277.000",
        "QacumMin": "5064.460",
        " ": " "
    },
    {
        "id": "2222",
        "t": "1/30/2017",
        "AASRRiser": "3924.500",
        "PLSIrrigation": "18593.000",
        "BarrenIrrigation": "66503.000",
        "FlowtoProcessPlant": "67010.000",
        "MoistureofRock": "0.015",
        "MineralPlacedinVLF": "65299.000",
        "QacumMin": "3295.946",
        " ": " "
    },
    {
        "id": "2223",
        "t": "1/31/2017",
        "AASRRiser": "3924.000",
        "PLSIrrigation": "16361.000",
        "BarrenIrrigation": "66898.000",
        "FlowtoProcessPlant": "66949.000",
        "MoistureofRock": "0.017",
        "MineralPlacedinVLF": "83141.000",
        "QacumMin": "3988.157",
        " ": " "
    },
    {
        "id": "2224",
        "t": "2/1/2017",
        "AASRRiser": "3921.900",
        "PLSIrrigation": "8336.000",
        "BarrenIrrigation": "63556.000",
        "FlowtoProcessPlant": "63783.000",
        "MoistureofRock": "0.014",
        "MineralPlacedinVLF": "77916.000",
        "QacumMin": "3978.172",
        " ": " "
    },
    {
        "id": "2225",
        "t": "2/2/2017",
        "AASRRiser": "3921.100",
        "PLSIrrigation": "4.000",
        "BarrenIrrigation": "55154.000",
        "FlowtoProcessPlant": "55708.000",
        "MoistureofRock": "0.016",
        "MineralPlacedinVLF": "84842.000",
        "QacumMin": "4141.735",
        " ": " "
    },
    {
        "id": "2226",
        "t": "2/3/2017",
        "AASRRiser": "3921.100",
        "PLSIrrigation": "2.000",
        "BarrenIrrigation": "46316.000",
        "FlowtoProcessPlant": "46895.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "59145.000",
        "QacumMin": "3219.493",
        " ": " "
    },
    {
        "id": "2227",
        "t": "2/4/2017",
        "AASRRiser": "3920.600",
        "PLSIrrigation": "5.000",
        "BarrenIrrigation": "42623.000",
        "FlowtoProcessPlant": "43414.000",
        "MoistureofRock": "0.007",
        "MineralPlacedinVLF": "43271.000",
        "QacumMin": "2509.718",
        " ": " "
    },
    {
        "id": "2228",
        "t": "2/5/2017",
        "AASRRiser": "3920.400",
        "PLSIrrigation": "4.000",
        "BarrenIrrigation": "32334.000",
        "FlowtoProcessPlant": "38181.000",
        "MoistureofRock": "0.018",
        "MineralPlacedinVLF": "69683.000",
        "QacumMin": "3309.570",
        " ": " "
    },
    {
        "id": "2229",
        "t": "2/6/2017",
        "AASRRiser": "3924.900",
        "PLSIrrigation": "35750.000",
        "BarrenIrrigation": "1073741814.000",
        "FlowtoProcessPlant": "0.000",
        "MoistureofRock": "0.008",
        "MineralPlacedinVLF": "7204.000",
        "QacumMin": "410.025",
        " ": " "
    },
    {
        "id": "2230",
        "t": "2/7/2017",
        "AASRRiser": "3923.800",
        "PLSIrrigation": "45095.000",
        "BarrenIrrigation": "33.000",
        "FlowtoProcessPlant": "0.000",
        "MoistureofRock": "0.014",
        "MineralPlacedinVLF": "87015.000",
        "QacumMin": "4432.969",
        " ": " "
    },
    {
        "id": "2231",
        "t": "2/8/2017",
        "AASRRiser": "3923.300",
        "PLSIrrigation": "7787.000",
        "BarrenIrrigation": "31586.000",
        "FlowtoProcessPlant": "0.000",
        "MoistureofRock": "0.008",
        "MineralPlacedinVLF": "72518.000",
        "QacumMin": "4146.100",
        " ": " "
    },
    {
        "id": "2232",
        "t": "2/9/2017",
        "AASRRiser": "3923.200",
        "PLSIrrigation": "15.000",
        "BarrenIrrigation": "38683.000",
        "FlowtoProcessPlant": "28235.000",
        "MoistureofRock": "0.012",
        "MineralPlacedinVLF": "69148.000",
        "QacumMin": "3636.592",
        " ": " "
    },
    {
        "id": "2233",
        "t": "2/10/2017",
        "AASRRiser": "3922.200",
        "PLSIrrigation": "12.000",
        "BarrenIrrigation": "37238.000",
        "FlowtoProcessPlant": "35447.000",
        "MoistureofRock": "0.012",
        "MineralPlacedinVLF": "60626.000",
        "QacumMin": "3222.517",
        " ": " "
    },
    {
        "id": "2234",
        "t": "2/11/2017",
        "AASRRiser": "3922.700",
        "PLSIrrigation": "15.000",
        "BarrenIrrigation": "36473.000",
        "FlowtoProcessPlant": "35175.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "69681.000",
        "QacumMin": "3922.772",
        " ": " "
    },
    {
        "id": "2235",
        "t": "2/12/2017",
        "AASRRiser": "3922.800",
        "PLSIrrigation": "16.000",
        "BarrenIrrigation": "40875.000",
        "FlowtoProcessPlant": "38290.000",
        "MoistureofRock": "0.007",
        "MineralPlacedinVLF": "76236.000",
        "QacumMin": "4425.491",
        " ": " "
    },
    {
        "id": "2236",
        "t": "2/13/2017",
        "AASRRiser": "3922.600",
        "PLSIrrigation": "13.000",
        "BarrenIrrigation": "43658.000",
        "FlowtoProcessPlant": "41405.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "82023.000",
        "QacumMin": "4547.894",
        " ": " "
    },
    {
        "id": "2237",
        "t": "2/14/2017",
        "AASRRiser": "3922.700",
        "PLSIrrigation": "14.000",
        "BarrenIrrigation": "45912.000",
        "FlowtoProcessPlant": "44197.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "68878.000",
        "QacumMin": "3718.143",
        " ": " "
    },
    {
        "id": "2238",
        "t": "2/15/2017",
        "AASRRiser": "3922.500",
        "PLSIrrigation": "15.000",
        "BarrenIrrigation": "44745.000",
        "FlowtoProcessPlant": "42098.000",
        "MoistureofRock": "0.015",
        "MineralPlacedinVLF": "66003.000",
        "QacumMin": "3323.597",
        " ": " "
    },
    {
        "id": "2239",
        "t": "2/16/2017",
        "AASRRiser": "3922.300",
        "PLSIrrigation": "16.000",
        "BarrenIrrigation": "52077.000",
        "FlowtoProcessPlant": "48901.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "77541.000",
        "QacumMin": "4258.114",
        " ": " "
    },
    {
        "id": "2240",
        "t": "2/17/2017",
        "AASRRiser": "3922.100",
        "PLSIrrigation": "18.000",
        "BarrenIrrigation": "46709.000",
        "FlowtoProcessPlant": "43668.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "72058.000",
        "QacumMin": "3923.498",
        " ": " "
    },
    {
        "id": "2241",
        "t": "2/18/2017",
        "AASRRiser": "3922.500",
        "PLSIrrigation": "16.000",
        "BarrenIrrigation": "52721.000",
        "FlowtoProcessPlant": "50513.000",
        "MoistureofRock": "0.016",
        "MineralPlacedinVLF": "86206.000",
        "QacumMin": "4226.852",
        " ": " "
    },
    {
        "id": "2242",
        "t": "2/19/2017",
        "AASRRiser": "3922.600",
        "PLSIrrigation": "13.000",
        "BarrenIrrigation": "52494.000",
        "FlowtoProcessPlant": "50935.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "74653.000",
        "QacumMin": "3874.926",
        " ": " "
    },
    {
        "id": "2243",
        "t": "2/20/2017",
        "AASRRiser": "3922.700",
        "PLSIrrigation": "9.000",
        "BarrenIrrigation": "56627.000",
        "FlowtoProcessPlant": "55202.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "82626.000",
        "QacumMin": "4325.837",
        " ": " "
    },
    {
        "id": "2244",
        "t": "2/21/2017",
        "AASRRiser": "3922.900",
        "PLSIrrigation": "9.000",
        "BarrenIrrigation": "59147.000",
        "FlowtoProcessPlant": "57524.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "83241.000",
        "QacumMin": "4513.850",
        " ": " "
    },
    {
        "id": "2245",
        "t": "2/22/2017",
        "AASRRiser": "3922.400",
        "PLSIrrigation": "12.000",
        "BarrenIrrigation": "61676.000",
        "FlowtoProcessPlant": "57398.000",
        "MoistureofRock": "0.017",
        "MineralPlacedinVLF": "83729.000",
        "QacumMin": "4015.621",
        " ": " "
    },
    {
        "id": "2246",
        "t": "2/23/2017",
        "AASRRiser": "3921.900",
        "PLSIrrigation": "60.000",
        "BarrenIrrigation": "56694.000",
        "FlowtoProcessPlant": "50518.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "8352.000",
        "QacumMin": "432.507",
        " ": " "
    },
    {
        "id": "2247",
        "t": "2/24/2017",
        "AASRRiser": "3923.100",
        "PLSIrrigation": "4.000",
        "BarrenIrrigation": "57379.000",
        "FlowtoProcessPlant": "53400.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "83412.000",
        "QacumMin": "4332.483",
        " ": " "
    },
    {
        "id": "2248",
        "t": "2/25/2017",
        "AASRRiser": "3923.300",
        "PLSIrrigation": "10.000",
        "BarrenIrrigation": "55567.000",
        "FlowtoProcessPlant": "51553.000",
        "MoistureofRock": "0.014",
        "MineralPlacedinVLF": "89718.000",
        "QacumMin": "4615.058",
        " ": " "
    },
    {
        "id": "2249",
        "t": "2/26/2017",
        "AASRRiser": "3923.500",
        "PLSIrrigation": "7.000",
        "BarrenIrrigation": "57248.000",
        "FlowtoProcessPlant": "53902.000",
        "MoistureofRock": "0.012",
        "MineralPlacedinVLF": "82395.000",
        "QacumMin": "4365.917",
        " ": " "
    },
    {
        "id": "2250",
        "t": "2/27/2017",
        "AASRRiser": "3923.400",
        "PLSIrrigation": "8.000",
        "BarrenIrrigation": "59724.000",
        "FlowtoProcessPlant": "56587.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "78854.000",
        "QacumMin": "4139.073",
        " ": " "
    },
    {
        "id": "2251",
        "t": "2/28/2017",
        "AASRRiser": "3924.300",
        "PLSIrrigation": "12.000",
        "BarrenIrrigation": "60304.000",
        "FlowtoProcessPlant": "58240.000",
        "MoistureofRock": "0.017",
        "MineralPlacedinVLF": "95485.000",
        "QacumMin": "4549.269",
        " ": " "
    },
    {
        "id": "2252",
        "t": "3/1/2017",
        "AASRRiser": "3923.500",
        "PLSIrrigation": "13.000",
        "BarrenIrrigation": "67141.000",
        "FlowtoProcessPlant": "64196.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "87854.000",
        "QacumMin": "4851.465",
        " ": " "
    },
    {
        "id": "2253",
        "t": "3/2/2017",
        "AASRRiser": "3922.800",
        "PLSIrrigation": "18.000",
        "BarrenIrrigation": "66833.000",
        "FlowtoProcessPlant": "63739.000",
        "MoistureofRock": "0.008",
        "MineralPlacedinVLF": "102044.000",
        "QacumMin": "5806.412",
        " ": " "
    },
    {
        "id": "2254",
        "t": "3/3/2017",
        "AASRRiser": "3922.400",
        "PLSIrrigation": "19.000",
        "BarrenIrrigation": "67089.000",
        "FlowtoProcessPlant": "63627.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "121525.000",
        "QacumMin": "6800.817",
        " ": " "
    },
    {
        "id": "2255",
        "t": "3/4/2017",
        "AASRRiser": "3922.800",
        "PLSIrrigation": "13.000",
        "BarrenIrrigation": "67169.000",
        "FlowtoProcessPlant": "64474.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "7396.000",
        "QacumMin": "411.128",
        " ": " "
    },
    {
        "id": "2256",
        "t": "3/5/2017",
        "AASRRiser": "3923.900",
        "PLSIrrigation": "15.000",
        "BarrenIrrigation": "61162.000",
        "FlowtoProcessPlant": "75763.000",
        "MoistureofRock": "0.008",
        "MineralPlacedinVLF": "76533.000",
        "QacumMin": "4330.002",
        " ": " "
    },
    {
        "id": "2257",
        "t": "3/6/2017",
        "AASRRiser": "3924.600",
        "PLSIrrigation": "14.000",
        "BarrenIrrigation": "65563.000",
        "FlowtoProcessPlant": "0.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "69418.000",
        "QacumMin": "3814.389",
        " ": " "
    },
    {
        "id": "2258",
        "t": "3/7/2017",
        "AASRRiser": "3922.700",
        "PLSIrrigation": "11.000",
        "BarrenIrrigation": "62199.000",
        "FlowtoProcessPlant": "0.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "61643.000",
        "QacumMin": "3450.942",
        " ": " "
    },
    {
        "id": "2259",
        "t": "3/8/2017",
        "AASRRiser": "3922.600",
        "PLSIrrigation": "16.000",
        "BarrenIrrigation": "60008.000",
        "FlowtoProcessPlant": "0.000",
        "MoistureofRock": "0.014",
        "MineralPlacedinVLF": "6045.000",
        "QacumMin": "309.551",
        " ": " "
    },
    {
        "id": "2260",
        "t": "3/9/2017",
        "AASRRiser": "3922.300",
        "PLSIrrigation": "19.000",
        "BarrenIrrigation": "61955.000",
        "FlowtoProcessPlant": "77039.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "60814.000",
        "QacumMin": "3263.922",
        " ": " "
    },
    {
        "id": "2261",
        "t": "3/10/2017",
        "AASRRiser": "3922.300",
        "PLSIrrigation": "11.000",
        "BarrenIrrigation": "62614.000",
        "FlowtoProcessPlant": "59165.000",
        "MoistureofRock": "0.017",
        "MineralPlacedinVLF": "75749.000",
        "QacumMin": "3662.728",
        " ": " "
    },
    {
        "id": "2262",
        "t": "3/11/2017",
        "AASRRiser": "3922.400",
        "PLSIrrigation": "12.000",
        "BarrenIrrigation": "62150.000",
        "FlowtoProcessPlant": "59306.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "64326.000",
        "QacumMin": "3342.367",
        " ": " "
    },
    {
        "id": "2263",
        "t": "3/12/2017",
        "AASRRiser": "3922.300",
        "PLSIrrigation": "14.000",
        "BarrenIrrigation": "63238.000",
        "FlowtoProcessPlant": "60815.000",
        "MoistureofRock": "0.006",
        "MineralPlacedinVLF": "47231.000",
        "QacumMin": "2766.279",
        " ": " "
    },
    {
        "id": "2264",
        "t": "3/13/2017",
        "AASRRiser": "3922.400",
        "PLSIrrigation": "12.000",
        "BarrenIrrigation": "63175.000",
        "FlowtoProcessPlant": "60751.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "51958.000",
        "QacumMin": "2874.516",
        " ": " "
    },
    {
        "id": "2265",
        "t": "3/14/2017",
        "AASRRiser": "3922.400",
        "PLSIrrigation": "14.000",
        "BarrenIrrigation": "64191.000",
        "FlowtoProcessPlant": "60771.000",
        "MoistureofRock": "0.006",
        "MineralPlacedinVLF": "109787.000",
        "QacumMin": "6494.279",
        " ": " "
    },
    {
        "id": "2266",
        "t": "3/15/2017",
        "AASRRiser": "3922.300",
        "PLSIrrigation": "13.000",
        "BarrenIrrigation": "63804.000",
        "FlowtoProcessPlant": "59870.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "9908.000",
        "QacumMin": "543.414",
        " ": " "
    },
    {
        "id": "2267",
        "t": "3/16/2017",
        "AASRRiser": "3922.600",
        "PLSIrrigation": "10.000",
        "BarrenIrrigation": "64136.000",
        "FlowtoProcessPlant": "60722.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "73984.000",
        "QacumMin": "4113.288",
        " ": " "
    },
    {
        "id": "2268",
        "t": "3/17/2017",
        "AASRRiser": "3922.600",
        "PLSIrrigation": "15.000",
        "BarrenIrrigation": "64328.000",
        "FlowtoProcessPlant": "62370.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "98625.000",
        "QacumMin": "5316.684",
        " ": " "
    },
    {
        "id": "2269",
        "t": "3/18/2017",
        "AASRRiser": "3922.800",
        "PLSIrrigation": "10.000",
        "BarrenIrrigation": "64752.000",
        "FlowtoProcessPlant": "63334.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "87735.000",
        "QacumMin": "4812.718",
        " ": " "
    },
    {
        "id": "2270",
        "t": "3/19/2017",
        "AASRRiser": "3922.800",
        "PLSIrrigation": "11.000",
        "BarrenIrrigation": "66418.000",
        "FlowtoProcessPlant": "64807.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "6183.000",
        "QacumMin": "342.575",
        " ": " "
    },
    {
        "id": "2271",
        "t": "3/20/2017",
        "AASRRiser": "3923.100",
        "PLSIrrigation": "14.000",
        "BarrenIrrigation": "67558.000",
        "FlowtoProcessPlant": "66324.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "81229.000",
        "QacumMin": "4394.218",
        " ": " "
    },
    {
        "id": "2272",
        "t": "3/21/2017",
        "AASRRiser": "3923.300",
        "PLSIrrigation": "12.000",
        "BarrenIrrigation": "69647.000",
        "FlowtoProcessPlant": "67580.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "94007.000",
        "QacumMin": "5172.266",
        " ": " "
    },
    {
        "id": "2273",
        "t": "3/22/2017",
        "AASRRiser": "3923.600",
        "PLSIrrigation": "13.000",
        "BarrenIrrigation": "70134.000",
        "FlowtoProcessPlant": "69170.000",
        "MoistureofRock": "0.022",
        "MineralPlacedinVLF": "89236.000",
        "QacumMin": "3817.164",
        " ": " "
    },
    {
        "id": "2274",
        "t": "3/23/2017",
        "AASRRiser": "3924.800",
        "PLSIrrigation": "10.000",
        "BarrenIrrigation": "69182.000",
        "FlowtoProcessPlant": "67673.000",
        "MoistureofRock": "0.015",
        "MineralPlacedinVLF": "75133.000",
        "QacumMin": "3752.771",
        " ": " "
    },
    {
        "id": "2275",
        "t": "3/24/2017",
        "AASRRiser": "3924.700",
        "PLSIrrigation": "10731.000",
        "BarrenIrrigation": "67535.000",
        "FlowtoProcessPlant": "66315.000",
        "MoistureofRock": "0.006",
        "MineralPlacedinVLF": "88116.000",
        "QacumMin": "5158.165",
        " ": " "
    },
    {
        "id": "2276",
        "t": "3/25/2017",
        "AASRRiser": "3925.200",
        "PLSIrrigation": "9873.000",
        "BarrenIrrigation": "68703.000",
        "FlowtoProcessPlant": "66741.000",
        "MoistureofRock": "0.008",
        "MineralPlacedinVLF": "74169.000",
        "QacumMin": "4226.262",
        " ": " "
    },
    {
        "id": "2277",
        "t": "3/26/2017",
        "AASRRiser": "3925.100",
        "PLSIrrigation": "16131.000",
        "BarrenIrrigation": "67928.000",
        "FlowtoProcessPlant": "66232.000",
        "MoistureofRock": "0.011",
        "MineralPlacedinVLF": "86912.000",
        "QacumMin": "4689.094",
        " ": " "
    },
    {
        "id": "2278",
        "t": "3/27/2017",
        "AASRRiser": "3925.200",
        "PLSIrrigation": "19486.000",
        "BarrenIrrigation": "68640.000",
        "FlowtoProcessPlant": "67969.000",
        "MoistureofRock": "0.010",
        "MineralPlacedinVLF": "87298.000",
        "QacumMin": "4800.643",
        " ": " "
    },
    {
        "id": "2279",
        "t": "3/28/2017",
        "AASRRiser": "3924.600",
        "PLSIrrigation": "16982.000",
        "BarrenIrrigation": "56537.000",
        "FlowtoProcessPlant": "55494.000",
        "MoistureofRock": "0.014",
        "MineralPlacedinVLF": "80701.000",
        "QacumMin": "4079.753",
        " ": " "
    },
    {
        "id": "2280",
        "t": "3/29/2017",
        "AASRRiser": "3926.900",
        "PLSIrrigation": "25427.000",
        "BarrenIrrigation": "40583.000",
        "FlowtoProcessPlant": "40279.000",
        "MoistureofRock": "0.015",
        "MineralPlacedinVLF": "83485.000",
        "QacumMin": "4165.060",
        " ": " "
    },
    {
        "id": "2281",
        "t": "3/30/2017",
        "AASRRiser": "3925.400",
        "PLSIrrigation": "27648.000",
        "BarrenIrrigation": "40883.000",
        "FlowtoProcessPlant": "40214.000",
        "MoistureofRock": "0.013",
        "MineralPlacedinVLF": "90517.000",
        "QacumMin": "4679.157",
        " ": " "
    },
    {
        "id": "2282",
        "t": "3/31/2017",
        "AASRRiser": "3927.000",
        "PLSIrrigation": "1497.000",
        "BarrenIrrigation": "40500.000",
        "FlowtoProcessPlant": "39505.000",
        "MoistureofRock": "0.017",
        "MineralPlacedinVLF": "84238.000",
        "QacumMin": "4046.600",
        " ": " "
    }
];

 google.charts.load('current', {'packages':['gauge', 'timeline', 'line']});

    var createFields=function (names, values){
        var array=[];
        for (var i = 0; i < names.length; i++) {
            var custom={
                    "name": "numberTest",
                    "vType": "int",
                    "validations": {
                        "required": true,
                        "maxLength": 10,
                        "minLength": 1,
                    }
            };
            custom.vDisplay=names[i];
            if(values && values.length>0 && values.length>i){
                custom.value=values[i];
            }
            array.push(custom);
        }
        return array;
    }

    //$scope.customs=createFields($scope.names);
    $scope.salidasC=[];
      $scope.mostrarSalida=false;
    $scope.ClickIngresarDatos=function(){
        $scope.mostrarSalida=true;
        //$scope.salidasC=createFields(salidaNames, [345, (3456.32/200), 3456.32]);
        drawGrub();
    }
    $scope.registrosflow=[]
    function loadData(){
       

         /*"id": "2217",
        "t": "1/25/2017",
        "AASRRiser": "3924.700",
        "PLSIrrigation": "20021.000",
        "BarrenIrrigation": "65564.000",
        "FlowtoProcessPlant": "64551.000",
        "MoistureofRock": "0.009",
        "MineralPlacedinVLF": "85072.000",
        "QacumMin": "4723.525",*/
      
        for (var i = 0; i < $scope.N-1; i++) {
            $scope.registrosflow.push($scope.registros[i]);  
            $scope.registrosflow[i].t= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+i+1)          
        }
    }
function drawGrub() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Cota', (22560.32+randomCota())]
        ]);

        var options = {
          width: 1000, height: 320,
          redFrom: 36050, redTo: 39900,
          yellowFrom:25000, yellowTo: 36050,
          greenFrom: 0, greenTo: 25000,
          max:39900,
          min:0
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

}
function drawTimeline(){
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Cota' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        var rows=[];
        for (var i = 0; i < discretValues.length; i++) {
            rows.push(
                [discretValues[i], new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+i+1),
                 new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+i+2)
                 ]
                 ); 
        }
        dataTable.addRows(rows);
        chart.draw(dataTable);
}

function drawLine (){

        var data = new google.visualization.DataTable();
      data.addColumn('number', 'Dia');
      data.addColumn('number', 'Cota');

      var rowsLine=[];
      for (var i = 0; i < $scope.N; i++) {
          rowsLine.push([(i+1),parseInt((($scope.registros[i].AASRRiser.split(".")[0]/100 )-10)
            +
            ($scope.registros[i].AASRRiser.split(".")[1]/100))
            *randomCota()]);
      }
      data.addRows(rowsLine);

      var options = {
        chart: {
          title: 'Prediccion de Cota en el tiempo',
          subtitle: 'm3'
        },
        width: 600,
        height: 400,
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
        
      }
     var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
  }







  $scope.ClickBtnAddFile= function(){

    $mdDialog.show({
         controller: fileController,
         templateUrl: 'app/views/dialogs/file.html',
         clickOutsideToClose:true
        }).
        then(function(){
            loadData();
        }, function(){
            //loadData();
        });

  }

  $scope.ClickPronosticar=function(){
    $scope.mostrarPronostico=true; 
    drawTimeline();
    drawLine();
  }




    function randomCota(){
            return Math.floor(Math.random() * 7400)-Math.floor(Math.random() * 7400);
    }

        $scope.ChangeSlider=function (name, indice){
            drawGrub();
        }
	 
}]);


function fileController ($scope, $mdDialog, $state) {
    $scope.Click_BtnAccion=function(event, args){
          $mdDialog.hide();
    };

    
}

