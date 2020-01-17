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
export function genarateCards(level={}) {
    let id = 0;
    const listCards = {};
    for (let i = 0; i < level.cardNumber / 2; i++) {
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

export function millisToMinutesAndSeconds(millis) {
    if(!millis) return "--:--"
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }