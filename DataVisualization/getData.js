var config = {
  method: 'get',
  url: 'https://data.cityofnewyork.us/resource/635b-dk9f.json',
  headers: {}
};

async function getData(){
    var res = await axios(config)
    return res.data
}