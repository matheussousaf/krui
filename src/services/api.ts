import Axios, { AxiosInstance } from "axios";

const UriApiUrl = "https://www.urionlinejudge.com.br/repository";

class UriApi {
  readonly axios: AxiosInstance;

  constructor() {
    this.axios = Axios;
  }

  public async getProblem(problemId: number) {
    const data = await this.axios.get(`${UriApiUrl}/UOJ_${problemId}.html`, {});

    return data.data;
  }
}

export const createUriApi = () => new UriApi();
