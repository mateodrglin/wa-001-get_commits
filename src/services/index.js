import axios from "axios";

let Service = {
  async getGlobal(numb) {
    let response = await axios.get(
      `https://api.github.com/repos/vuejs/vue/commits?per_page=${numb}`
    );
    // ? -> ternarni operator. ako je status 200 (OK) vrati mi data ako ne vrati error
    return response.status === 200 ? response.data : "No available data";
  },
};

export default Service;
