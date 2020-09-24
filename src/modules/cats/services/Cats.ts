import axios from 'axios';

// import settings from '../../settings';

class CatsService {
  public getList = async () => {
    try {
      // const { data } = await axios.get<Location[]>(`${settings.apiUrl}/locations`);

      return [];
    } catch (error) {
      // displayNotification({ title: 'Server error', content: 'Could not get cats' });
      throw error;
    }
  };

  public getById = async (id: number) => {
    try {
      // const { data } = await axios.get<Location>(`${settings.apiUrl}/locations/${id}`);

      return {};
    } catch (error) {
      // displayNotification({ title: 'Server error', content: 'Could not get cat by ID' });
      throw error;
    }
  };
}

export default new CatsService();
