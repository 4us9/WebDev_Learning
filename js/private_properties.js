class SecretiveObject {
    SecretiveObject()
    {

    }
    #getSecret() {
        return "I ate all the plums";
    }

    interrogate() {
        let shallISayIt = this.#getSecret();

        return "never";
    }

}

test = new SecretiveObject();

console.log(test.interrogate());