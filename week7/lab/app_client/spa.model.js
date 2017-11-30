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


    deleteReview(evt) {
        const url = `${this.APIS.Employee}${evt.target.dataset.id}`
        return this.http.delete(url)
                .then( ()=>{
                    return this.dataBindModel.deleteResultMsg = 'Employee Deleted'                                
                }).catch( err => {
                     return this.dataBindModel.deleteResultMsg = 'Employee NOT Deleted'                                 
                }).then( () => {
                    return this.getHomeMessage()
                })
    }

    updatePage(evt){       
        const params = this.generateUrlParams({id: evt.target.dataset.id})
        window.location.href = `${params}#update` 
        
        return Promise.resolve()
    }

    updatePageLoad(){
        const url = `${this.APIS.Reviews}${this.urlParams().get('id')}`
        console.log(url)
        return this.http.get(url).then( data => {           
            this.dataBind.firstName = data.firstName
            this.dataBind.lastName = data.lastName
            this.dataBind.department = data.department
            this.dataBind.jobTitle = data.jobTitle
            this.dataBind.salary = data.salary
            this.dataBind.startDate = data.startDate
            this.dataBind._id = data._id
            return data
        })       
    }

    updateEmployee(){
        const data = {
            firstName : this.dataBindModel.firstName,
            lastName : this.dataBindModel.lastName,
            department : this.dataBindModel.department,
            jobTitle : this.dataBindModel.jobTitle,
            salary : this.dataBindModel.salary,
            startDate : this.dataBindModel.startDate
        }  
        const url = `${this.APIS.Employee}${this.dataBindModel._id}`
        return this.http.put(url, data)
                .then( data => {
                    this.dataBindModel.updateResultMsg = 'Employee updated'
                    return data
                }).catch( err => {
                    this.dataBindModel.updateResultMsg = 'Employee NOT updated'   
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