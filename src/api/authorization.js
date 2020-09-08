import API from "./api";

export default class Snippets extends API {
  async getSnippets() {
    try {
      const result = this.getAxios().get(`/snippets/${framework}`);
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async createSnippet(data = {}) {
    try {
      await this.getAxios.post(`/snippets/${framework}`, { data });
    } catch (error) {
      return error;
    }
  }
}
