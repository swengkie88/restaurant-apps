/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class RestoDataSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      window.alert('Koneksi internet tidak tersedia, silakan coba lagi...');
    }
  }
}

export default RestoDataSource;
