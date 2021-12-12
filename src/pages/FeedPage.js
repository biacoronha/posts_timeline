import { useEffect, useState } from 'react';
import {Feed} from 'semantic-ui-react'
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import './FeedPage.css'

export default function FeedPage() {

    const [postsArray, setPostsArray] = useState('');
    const [isNew, setIsNew] = useState(null);

    function createPost(post) {
        console.log('create')
        postsArray.push(post)
        setPostsArray(postsArray)
        localStorage.setItem('posts', JSON.stringify(postsArray))
    }

    function editPost(post) {
        let indexOfPost = postsArray.findIndex(x => x.id === post.id)
        postsArray[indexOfPost] = post
        setPostsArray(postsArray)
        localStorage.setItem('posts', JSON.stringify(postsArray))
    }

    function removePost(post) {
        let indexOfPost = postsArray.findIndex(x => x.id === post.id)
        postsArray.splice(indexOfPost, 1);
        setPostsArray(postsArray)
        localStorage.setItem('posts', JSON.stringify(postsArray))
    }

    function getPosts() {
        const storedArray = localStorage.getItem('posts')
        console.log(storedArray)
        console.log(JSON.parse(storedArray))
        return JSON.parse(storedArray);
    }

    useEffect(() => {
        const posts = getPosts()
        setPostsArray(posts)
        console.log(posts)
    }, [postsArray])

    const openCreate = () => {
        setIsNew(true)
    }

    const openEdit = () => {
        setIsNew(false)
    }




    return (
        <div>
        {/* <Header/> */}
        <div className='main-feed'>
            <PostCard action={createPost}/>
            {(postsArray && postsArray.length > 0) ? 
            postsArray.map((data) => { 
                return (
                <Feed>
                    <Feed.Event>
                        <Feed.Content>
                            <Feed.Summary>
                                New Post
                                <Feed.Date>3 days go</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra text>
                                {data.content}
                            </Feed.Extra>
                        </Feed.Content>

                    </Feed.Event>
                </Feed>
            )}):''}
        </div>
        </div>
    )
}