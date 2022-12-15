const createDatabase = ( api ) => {
    const data_base = document.querySelector(".data_base");
    let result = {};

    $.ajax({
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        url: "https://api.novaposhta.ua/v2.0/json/",
        data: JSON.stringify({
            "modelName": "Address",
            "calledMethod": "getCities",
            "apiKey": api
        }),
        success: function ( response ) {
            let l = response.data.length;
            for (let i = 0; i < l; i++) {
                response.data[i].value = response.data[i]["Description"];
                response.data[i].label = response.data[i]["Description"];
            }
            result = response.data;
        }
    });
    for (let i = 0; i < result.length; i++) {
        data_base.value += `(${ i + 1 }, "${ result[i].Description }", "${ result[i].Ref }", ${ result[i].Delivery1 }, ${ result[i].Delivery2 }, ${ result[i].Delivery3 }, ${ result[i].Delivery4 }, ${ result[i].Delivery5 }, ${ result[i].Delivery6 }, ${ result[i].Delivery7 }, "${ result[i].Area }"),\n`;
    }
}

createDatabase("4669dc413997b38dfc994ba113745403")


