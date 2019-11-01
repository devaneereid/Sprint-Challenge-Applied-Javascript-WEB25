// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log(data)
      
        data.data.topics.forEach(items => {
            createTabs(items)
        })
    })
    .catch(error => {
        console.log('Data Not Returned', error);
    });

    const mainTabs = document.querySelector('.tabs .topics');

    function createTabs(data) {
        const newsTabs = document.createElement('div');

            mainTabs.appendChild(newsTabs);
            
            newsTabs.classList.add('tab');

            newsTabs.textContent = data;

        return newsTabs;
    }
    
// mainTabs.appendChild(createTabs());