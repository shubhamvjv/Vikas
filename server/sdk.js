var request = require("request");
var http = require("http");

var baseUrl = "https://json.astrologyapi.com/v1/";
var userID = "636031";
var apiKey = "1eb39109aea3d095ae378a32b84ba2ad6e8e6455";

var getResponse = (resource, data, callback) => {
  var url = baseUrl + resource;
  var auth = "Basic " + new Buffer(userID + ":" + apiKey).toString("base64");
  request(
    {
      url: url,
      headers: {
        Authorization: auth,
      },
      method: "POST",
      form: data,
    },
    function (err, res, body) {
      if (!err) {
        if (typeof callback === "function") {
          return callback(null, body);
        }
      }
      if (typeof callback === "function") {
        return callback(err);
      }
      console.log("callback not provided properly");
    }
  );
};

var packageHoroData = (
  date,
  month,
  year,
  hour,
  minute,
  latitude,
  longitude,
  timezone
) => {
  return {
    day: date,
    month: month,
    year: year,
    hour: hour,
    min: minute,
    lat: latitude,
    lon: longitude,
    tzone: timezone,
  };
};

var packageNumeroData = (date, month, year, name) => {
  return {
    day: date,
    month: month,
    year: year,
    name: name,
  };
};

var packageMatchMakingData = (maleBirthData, femaleBirthData) => {
  mData = {
    m_day: maleBirthData["date"],
    m_month: maleBirthData["month"],
    m_year: maleBirthData["year"],
    m_hour: maleBirthData["hour"],
    m_min: maleBirthData["minute"],
    m_lat: maleBirthData["latitude"],
    m_lon: maleBirthData["longitude"],
    m_tzone: maleBirthData["timezone"],
  };
  fData = {
    f_day: femaleBirthData["date"],
    f_month: femaleBirthData["month"],
    f_year: femaleBirthData["year"],
    f_hour: femaleBirthData["hour"],
    f_min: femaleBirthData["minute"],
    f_lat: femaleBirthData["latitude"],
    f_lon: femaleBirthData["longitude"],
    f_tzone: femaleBirthData["timezone"],
  };

  return Object.assign(mData, fData);
};

var packageDailyHoroData = (zodiacName, timezone) => {
  return {
    zodiacName: zodiacName,
    timezone: timezone,
  };
};

var api = {
  call: (
    resource,
    date,
    month,
    year,
    hour,
    minute,
    latitude,
    longitude,
    timezone,
    callback
  ) => {
    var data = packageHoroData(
      date,
      month,
      year,
      hour,
      minute,
      latitude,
      longitude,
      timezone
    );
    return getResponse(resource, data, callback);
  },

  numeroCall: (resource, date, month, year, name, callback) => {
    var data = packageNumeroData(date, month, year, name);
    return getResponse(resource, data, callback);
  },

  matchMakingCall: (resource, maleBirthData, femaleBirthData, callback) => {
    var data = packageMatchMakingData(maleBirthData, femaleBirthData);
    return getResponse(resource, data, callback);
  },

  dailyHoroCall: (resource, zodiacName, timezone, callback) => {
    var data = packageDailyHoroData(zodiacName, timezone);
    return getResponse(resource, data, callback);
  },
};

module.exports = api;