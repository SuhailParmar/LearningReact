export async function authenticatedRequest(url, requestBody) {
  try {
    const token = await localStorage.getItem("ACCESS_TOKEN");
    const reqInit = requestBody
      ? {
          ...requestBody,
          headers: {
            ...requestBody.headers,
            Authorization: `Bearer ${token}`
          }
        }
      : {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
    const response = await fetch(url, reqInit).then(res => res.json());

    let events = [];
    for (var i = 0; i < response.length; i++) {
      events.push(JSON.stringify(response[i]));
    }

    return events;
  } catch (error) {
    console.log(error);
  }
}
