import SERVER from "./server";

export async function refreshAccessTokenDirect(): Promise<string> {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token found");

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const response = await SERVER.post("admin/auth/refresh-access-token", {
    refreshToken,
    userId: user?.payload?._id,
  });

  const { accessToken } = response.data;

  localStorage.setItem("token", accessToken);

  return accessToken;
}
