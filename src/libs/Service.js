const Service = {
    getArticalList: () => {

        const listRes = window.localStorage.getItem('list') ? JSON.parse(window.localStorage.getItem('list')) : [];
        return listRes;

    },
    fetchArtical: (articalId) => {

        const list = JSON.parse(window.localStorage.getItem('list'));
        const index = list.data.map((obj) => (obj.id)).indexOf(articalId);
        return list.data[index];

    }
};

export default Service;
