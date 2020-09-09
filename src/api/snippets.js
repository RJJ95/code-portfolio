import API from "./api";

export default class Snippets extends API {
  async getSnippets(framework) {
    try {
      const result = this.getAxios().get(`/snippets/${framework}`);
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async createSnippet(framework = "", data = {}) {
    try {
      const result = await this.getAxios().post(`/snippets/${framework}.json`, {
        data,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
