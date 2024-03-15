const BASEURL = "https://fakestoreapi.com";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.error("Error /Login user", error);
  }
};
