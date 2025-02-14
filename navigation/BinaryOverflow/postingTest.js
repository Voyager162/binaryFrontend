import {pythonURI, fetchOptions} from '../../assets/js/api/config.js'

// Build post box
export function buildPostBox() {
    // Creates the base div that will be returned
    const floatingDiv = document.createElement('div')
    floatingDiv.classList.add("floatingDiv")
    floatingDiv.id = "floatingDiv"
    // Creates the title, as an input element one liner
    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.placeholder = 'Title'
    titleInput.classList.add("titleInput")
    titleInput.id = "titleInput"
    // Creates the textarea for the content
    const contentInput = document.createElement('textarea')
    contentInput.classList.add("contentInput")
    contentInput.id = "contentInput"
    contentInput.rows = 10
    contentInput.cols = 50
    contentInput.placeholder = 'body texts'
    contentInput.style.resize = 'none'
    // Button that sends information
    const postButton = document.createElement('button')
    postButton.innerHTML = "POST HERE"
    postButton.addEventListener('click', () => {
        createPost()
    })

    floatingDiv.append(titleInput)
    floatingDiv.append(document.createElement('br'))
    floatingDiv.append(contentInput)
    floatingDiv.append(document.createElement('br'))
    floatingDiv.append(postButton)
    return floatingDiv
}

async function createPost() {
    const title = document.getElementById('titleInput').value
    const content = document.getElementById("contentInput").value
    try {
        const postApiUrl = `${pythonURI}/api/binaryOverflow/home`
        const postApiRequest = await fetch(postApiUrl, {
            ...fetchOptions,
            method: "POST",
            body: JSON.stringify({"title": title, "content": content})
        });
        const postData = await postApiRequest.json();
        console.log(postData)
    }
    catch (error) {
        console.error('Error fetching data: ', error)
    }
}