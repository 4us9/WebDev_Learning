class RandomSource {
    #max;

    constructor(max)
    {
        this.#max = max;
        
    }

    getNumber()
    {
        return (1 * this.#max);
    }

}

let variable = new RandomSource(10);

console.log(variable.getNumber());