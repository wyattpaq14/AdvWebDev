class Components {


    static resultsData(data){
        if ( ! Array.isArray(data) ) return ''
        console.log(data);
        return Promise.resolve(`${data.map(row=>                                         
                    `<tr>
                        <td>${row._id}</td>
                        <td>${row.firstName}</td>
                        <td>${row.lastName}</td>
                        <td>${row.department}</td>
                        <td>${row.jobTitle}</td>
                        <td class="has-text-left">${row.salary}</td>
                        <td>${new Date(row.startDate).toLocaleDateString('en-US')}</td>
                        <td class="has-text-centered">
                          <button class="button is-danger is-outlined" data-id="${row._id}" data-event="click:deleteEmployee">Delete</button>
                        </td>
                        <td class="has-text-centered">
                          <button class="button is-info is-outlined" data-id="${row._id}" data-event="click:updatePage">Update</button>
                        </td>
                    </tr>`
                ).join('')}`)
    }

    
}

