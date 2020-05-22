import Axios, { AxiosInstance } from "axios";

const apiUrl = "https://www.urionlinejudge.com.br";

class UriApi {
  readonly axios: AxiosInstance;

  constructor() {
    this.axios = Axios;
  }

  public async getProblem(problemId: number) {
    const response = await this.axios.get(`${apiUrl}/repository/UOJ_${problemId}.html`, {});
    return response.data;
  }

  public async listProblems(page: number) {
    const response = await this.axios.get(`${apiUrl}/judge/pt/problems/index/${page}`, {});
    return response.data;
  }
}

export const createUriApi = () => new UriApi();
