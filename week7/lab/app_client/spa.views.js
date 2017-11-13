class View {

    get home() {
        return Promise.resolve(`<h1>Home page</h1>`)
    }
    get test() {
        return Promise.resolve(`<h1>test page</h1>
        

        <p data-bind-class="{'on':'isOn', 'off': '!isOn'}">Testing</p>
        <button data-bind-event="click:toggleOn">CLICK ME</button>
        
        
        
        `)

    }
    
}