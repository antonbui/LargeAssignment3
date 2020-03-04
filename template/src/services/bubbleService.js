
const fetchData(){
    const res = fetch("http://localhost:3500/api/bubbles").then((res) => res.json()).then((res) => setData(res));
};

export {
    fetchData,
}