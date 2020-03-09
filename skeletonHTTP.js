class skeletonHTTP {
  async get(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  }
  async post(url, data) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const data1 = await res.json();
      return data1;
    } catch (error) {
      return error;
    }
  }
  async update(url, dataInput) {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(dataInput)
      });

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    if (res.status === 200) {
      return "deleted";
    }
  }
}
