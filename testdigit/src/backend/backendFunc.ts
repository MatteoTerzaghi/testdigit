import sign from "jwt-encode";
import { BaseResponse, GetLoginResponse } from "./backendTypes";

async function authHttpCall(
  url: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  headersValue?: { [key: string]: string }
  // body?: any
) {
  const headers = new Headers();

  if (headersValue) {
    Object.keys(headersValue).forEach((hKey) => {
      headers.append(hKey, headersValue[hKey]);
    });
  }

  const resp = await fetch(url, {
    method,
    headers,
    // body,
  });

  if (!resp.ok) {
    const returnErrResp: BaseResponse = {
      error: {
        code: `${resp.status}` as any,
        description: resp.statusText,
      },
      status: resp.status,
    };

    return returnErrResp;
  }

  return resp.json();
}

const BackendService = {
  async login(user: string, pw: string): Promise<GetLoginResponse> {
    const jwtToken = sign({ username: user, password: pw }, "secret");
    const a = await authHttpCall(`http://localhost:3001/login`, "GET", {
      Authorization: `Bearer ${jwtToken}`,
    });
    return a;
  },
};

export default BackendService;
