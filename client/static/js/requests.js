async function createUser(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/auth/register', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#users/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
// Create user






async function getAll(username){
    try {
        const response = await fetch(`http://localhost:3000/users`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}
// all users

async function getUserById(username, id) {
    try {
        const response = await fetch(`http://localhost:3000/${users}/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}
// get user by id

async function getHabit(habit) {
    try {
        const response = await fetch(`http://localhost:3000/habits`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}
// all habits

async function createHabit(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/habits', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#habits/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

// create a habit


async function deleteHabit(id){
    try {
        const options = { method: 'DELETE' }
        await fetch(`http://localhost:3000/habits/${id}`, options);
        window.location.hash = `#habits`
    } catch (err) {
        console.warn(err);
    }
}
// delete a habit
