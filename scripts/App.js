// Copyright (C) 2022 Scott Henshaw

export default class App {

    constructor() {
        // this is where we build an instance of this app

        // handle a simple button press
        document.querySelector("#press-me")
            .addEventListener("click", event => {

                const el = document.querySelector("#results")
                el.innerHTML ="The user presses the button..."
            })
    }
}