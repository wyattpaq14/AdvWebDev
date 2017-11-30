class View {

    get home() {
        const html = `<h1>Home page</h1>
                      <div data-bindtext="deleteResultMsg"></div>

                      <table>
                      <thead>
                      <tr>
                      <th>_id</th>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>department</th>
                      <th>jobTitle</th>
                      <th>salary</th>
                      <th>startDate</th>
                      </tr>
                      </thead>
                      <tbody data-bind-model="employeeTable">
                      </tbody>
                      </table>
                      
                      
                      `
        return Promise.resolve(html)
    }

    get form() {
       return Promise.resolve(`
       <h1>Rest API Demo</h1>
       <h3 data-bind-model="saveResultMsg"></h3>
            <form data-bind-*>
           <br /> _id
           <input type="text" name="_id" value="" /><br />
           <br /> firstName
           <input type="text" name="firstName" value="" /><br />
           <br /> lastName
           <input type="text" name="lastName" value="" /><br />
           <br />
       
           department
           <select name="department">
               <option>IT Support</option>
               <option>Finance</option>
               <option>Quality Assurance</option>
               <option>Quality Control</option>
               <option>Facilities</option>
           </select><br />
       
       
           <br />startDate
           <input type="date" name="startDate" value="" /><br />
           <br /> jobTitle
           <input type="text" name="jobTitle" value="" /><br />
           <br /> salary
           <input type="text" name="salary" value="" />
           <br />
       
       
           <br />
           <br />
           <input class="button is-primary" type="button" value="Save" data-bind-event="click:saveEmployee" />
           </form>
           

       `)
    }

    get update() {
        return Promise.resolve(`

        <h1>Rest API Demo</h1>
        <h3 data-bind-model="updateResultMsg"></h3>
            <form data-bind-*>
           <br /> _id
           <input type="text" name="_id" value="" /><br />
           <br /> firstName
           <input type="text" name="firstName" value="" /><br />
           <br /> lastName
           <input type="text" name="lastName" value="" /><br />
           <br />
       
           department
           <select name="department">
               <option>IT Support</option>
               <option>Finance</option>
               <option>Quality Assurance</option>
               <option>Quality Control</option>
               <option>Facilities</option>
           </select><br />
       
       
           <br />startDate
           <input type="date" name="startDate" value="" /><br />
           <br /> jobTitle
           <input type="text" name="jobTitle" value="" /><br />
           <br /> salary
           <input type="text" name="salary" value="" />
           <br />
       
       
           <br />
           <br />
           <input class="button is-primary" type="button" value="Save" data-bind-event="click:updateEmployee" />
           </form>
        
        
        
        
        `)
    }

    get todo() {
        return Promise.resolve(`<h1>Todo Fetch List</h1>
                <div data-bind-model="todoList"></div>`)
    }

    get test() {
        return Promise.resolve(`test`)
    }

    get safe() {
        return Promise.resolve(`<h1>Safe HTML Test</h1>
                <p>Most modern browsers have support to protect from xss attacks</p>
                <p><a href="?id=<strong>Is safe HTML?</strong>#safe">Click to Reload with unsafe URL Params</a></p>
                <p> Safe Text: <span data-bind-model="test" data-bind-safe></span></p>
                <p> NOT Safe Text: <span data-bind-model="test"></span></p>
                <p> Safe HTML Input: <br /> <textarea data-bind-model="test" data-bind-safe data-bind-input="false"></textarea></p>
                <p> Not Safe HTML Input: <br /> <textarea data-bind-model="test" data-bind-input="false"></textarea></p>
                `)
    }
    
    get form2() {
        return this.fetchHTML('public/templates/test2.html')
    } 

}