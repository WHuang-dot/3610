var config = {
  method: 'get',
  url: 'https://data.cityofnewyork.us/resource/635b-dk9f.json?$limit=2000',
  headers: {}
};

async function getData(){
    var res = await axios(config)
    return res.data
}