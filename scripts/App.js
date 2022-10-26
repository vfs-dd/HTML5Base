// Copyright (C) 2022 Scott Henshaw

export default class App {

    constructor() {
        // this is where we build an instance of this app

        // handle a simple button press
        document.querySelector("#press-me")
            .addEventListener("click", event => this.onToggleDialog( true, "Opened the dialog"));

        document.querySelector("#close-me")
            .addEventListener("click", event => {
                // when the user presses the button...
                this.onToggleDialog( false, "Closed the dialog")
            })
    }

    onToggleDialog( open = false, msg = "done") {

        if (open)
            document.querySelector("#result-dlg").show();

        if (!open)
            document.querySelector("#result-dlg").close()

        console.log( msg )
    }

}