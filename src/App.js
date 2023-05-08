import React, {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import "./styles/app.css"
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Desription'},
        {id: 2, title: 'Javascript 2', body: 'Desription'},
        {id: 3, title: 'Javascript 3', body: 'Desription'},
    ])

    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>Список постов</h1>
            {posts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}

export default App;
