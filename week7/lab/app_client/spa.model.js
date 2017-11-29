class Model extends BaseModel {

    constructor() {
        super()
        this.APIS = {
            Employee : 'http://localhost:3001/api/v1/employees/'
        }
    }

    getHomeMessage() {
        return this.http.get(this.APIS.Employee)
        .then( data => {
            return Components.resultsData(data).then(html => { return this.dataBindModel.employeeTable = html })
             
         })
    }

    saveEmployee() {
        const data = {
         firstName : this.dataBindModel.firstName,
         lastName : this.dataBindModel.lastName,
         department : this.dataBindModel.department,
         jobTitle : this.dataBindModel.jobTitle,
         salary : this.dataBindModel.salary,
         startDate : this.dataBindModel.startDate
        }                    
        return this.http.post(this.APIS.Employee + 'create', data)
                .then( data => {
                    this.dataBindModel.saveResultMsg = 'Employee Saved'
                    return data
                }).catch( err => {
                    this.dataBindModel.saveResultMsg = 'Employee NOT Saved'
                    return err
                })                   
    }


    deleteEmployee() {
        const url =                  
        return this.http.post(this.APIS.Employee + 'create', data)
                .then( data => {
                    this.dataBindModel.saveResultMsg = 'Employee Saved'
                    return data
                }).catch( err => {
                    this.dataBindModel.saveResultMsg = 'Employee NOT Saved'
                    return err
                })                   
    }



    setTest() {
        this.dataBindModel.test = this.urlParams().get('id')
        return Promise.resolve()
    }
    
    
    setReviews(){
       // this.clearDataBindModel()
       this.dataBindModel.reviews = '<strong> testing reviews</strong>'
       //this.dataBindModel.reviews2 = ''
       return Promise.resolve()
   }
   
   updateReview(evt){
       this.dataBindModel = {reviews3: this.dataBindModel.reviews, reviews5: 5 }
       return Promise.resolve()
   }
   
   formatHTML(elem) {
       const data = this.dataBindModel[elem.dataset.bindModel] 
       if ( data && data.length )
       elem.innerHTML = `<p data-bind-model="reviews3"></p> ${this.formatDate(data)}`
       return Promise.resolve()
   }
   
   
   get condition() {
       return this.dataBindModel.terms
   }

}