const CLIENT_ID = "test_id";
const CLIENT_SECRET = "test_secret";
const OAUTH_URL = "http://localhost:8000/oauth2/token/";

export async function saveAuthToken() {
  try {
    const response = await fetch(OAUTH_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }).then(res => res.json());

    await localStorage.setItem("ACCESS_TOKEN", response.access_token);
  } catch (error) {
    console.log(error);
  }
}
