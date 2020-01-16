import RandExp from "randexp";
export function buildCards() {
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
    return shuffle(cards);
}

function shuffle(arr) {
    let {
        length
    } = arr;
    for (let i = 0; i < length; i++) {
        let randomIdx = Math.floor(Math.random() * length);
        let currentCard = {
            ...arr[i]
        };
        let randomCard = arr[randomIdx];
        arr[i] = randomCard;
        arr[randomIdx] = currentCard;
    }
    return arr;
}