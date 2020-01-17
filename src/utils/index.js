import RandExp from "randexp";

function shuffleArray(arr) {
    let {
        length
    } = arr;
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * length);
        let current = {
            ...arr[i]
        };
        let random = arr[index];
        arr[i] = random;
        arr[index] = current;
    }
    return arr;
}
export function genarateCards() {
    let id = 0;
    const listCards = {};
    for (let i = 0; i < 8; i++) {
        const key = new RandExp(/[A-Z]/).gen();
        listCards[i] = key
    }

    const cards = Object.keys(listCards).reduce((result, item) => {
        const getCard = () => ({
            id: id++,
            name: listCards[item],
            flipped: false,
            hide: false
        });
        return [...result, getCard(), getCard()];
    }, []);
    return shuffleArray(cards);
}