import axios from 'axios';

const API_URL = 'http://localhost:8081/api/workers';

class WorkerService {
    getWorkersByCategory() {
      return axios.get(`${API_URL}`);
    }
  }
  
export default new WorkerService();
