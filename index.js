(function () {
  var myConnector = tableau.makeConnector();

  myConnector.getSchema = function(schemaCallback) {
    var cols = [{
      id: "id",
      alias: "id",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "name",
      alias: "name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "host_id",
      alias: "host_id",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "host_name",
      alias: "host_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "neighbourhood_group",
      alias: "neighbourhood_group",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "neighbourhood",
      alias: "neighbourhood",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "latitude",
      alias: "latitude",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "longitude",
      alias: "longitude",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "room_type",
      alias: "room_type",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "price",
      alias: "price",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "minimum_nights",
      alias: "minimum_nights",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "number_of_reviews",
      alias: "number_of_reviews",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "last_review",
      alias: "last_review",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "reviews_per_month",
      alias: "reviews_per_month",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "calculated_host_listings_count",
      alias: "calculated_host_listings_count",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "availability_365",
      alias: "availability_365",
      dataType: tableau.dataTypeEnum.int
    }];

    var tableInfo = {
      id: "airbnb",
      alias: "Airbnb data",
      columns: cols
    };

    schemaCallback([tableInfo]);
  }

  myConnector.getData = function(table, doneCallback) {
    const url = "https://raw.githubusercontent.com/Luodina/js-data-viz/5th-stage/step-1-gant-chart-project-management/data/airbnb-data.json";
    $.getJSON(url, function(resp) {
      table.appendRows(resp);
      doneCallback();
    });
  };

  tableau.registerConnector(myConnector);

  $(document).ready(function() {
    $("#fetch-button").click(function() {
      tableau.connectionName = "Airbnb data";
      tableau.submit();
    });
  });
})();
