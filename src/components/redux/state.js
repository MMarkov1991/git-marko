import {rerenderEntireTree} from "../../rend";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'dfd', likesCount: 11},
            {id: 4, message: '5555', likesCount: 11},

        ],

    },
    dialogsPage:{
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your MMM'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Mark'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Aleksandr'},
            {id: 4, name: 'Nikita'},
            {id: 5, name: 'Oleg'},
            {id: 6, name: 'Valera'}
        ],
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}


export default state;