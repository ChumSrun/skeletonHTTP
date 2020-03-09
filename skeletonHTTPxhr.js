function skeletonHTTP() {
  this.xhr = new XMLHttpRequest();
}

skeletonHTTP.prototype.get = function (url, callback) {
  this.xhr.open("GET", url, true);
  this.xhr.responseType = "json";
  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      callback(null, this.xhr.response);
    } else {
      callback(`Error ${this.xhr.status}`);
    }
  };
  this.xhr.onerror = () => {
    alert("Something wrong from error from request Url!!");
  };
  this.xhr.send();
};

skeletonHTTP.prototype.post = function (url, data, callback) {
  this.xhr.open("POST", url, true);
  this.xhr.setRequestHeader("Content-type", "application/json");
  this.xhr.onload = () => {
    if (this.xhr.status !== 404) {
      callback(null, this.xhr.response);
    } else {
      callback("Something went wrong!");
    }
  };
  this.xhr.onerror = error => {
    alert("Something wrong with url");
    console.log(error);
  };
  this.xhr.send(JSON.stringify(data));
};

skeletonHTTP.prototype.update = function (url, data, callback) {
  this.xhr.open("PUT", url, true);
  this.xhr.setRequestHeader("Content-type", "application/json");
  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      callback(null, this.xhr.response);
    } else {
      callback(`Something went wrong!`);
    }
  };
  this.xhr.send(JSON.stringify(data));
};

skeletonHTTP.prototype.delete = function (url, callback) {
  this.xhr.open("DELETE", url, true);
  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      callback(null, `Data deleted`);
    } else {
      callback(`Something went wrong!`);
    }
  };
  this.xhr.send();
};