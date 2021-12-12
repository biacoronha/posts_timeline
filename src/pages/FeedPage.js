import { useEffect, useState } from 'react';
import {Feed, Button} from 'semantic-ui-react'
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import './FeedPage.css'

export default function FeedPage() {

    const [postsArray, setPostsArray] = useState('');
    const [isEdit, setIsEdit] = useState(null);

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
        setIsEdit(null)
    }

    function removePost(post) {
        let indexOfPost = postsArray.findIndex(x => x.id === post.id)
        postsArray.splice(indexOfPost, 1);
        setPostsArray(postsArray)
        localStorage.setItem('posts', JSON.stringify(postsArray))
    }

    function getPosts() {
        const storedArray = localStorage.getItem('posts')
        let arrayOfPosts = JSON.parse(storedArray);
        arrayOfPosts.sort((a, b) => {
            let da = new Date(a.creationDate),
                db = new Date(b.creationDate);
            return db - da;
        });
        
        return arrayOfPosts
    }

    useEffect(() => {
        let posts = getPosts()
        setPostsArray(posts)
    }, [postsArray])

    const openEdit = () => {
        setIsEdit(true)
    }

    return (
        <div>
        <Header/>
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
                                <Feed.Date>{data.creationDate}</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra text>
                                {data.content}
                            </Feed.Extra>
                        </Feed.Content> 
                        <Button color='blue' onClick={openEdit}>Edit</Button>
                        <Button color='red' onClick={removePost}>Remove</Button>
                    </Feed.Event>
                    {isEdit ? <PostCard action={editPost} postToEdit={data}/>
                    :<></>}
                </Feed>
            )}):''}
        </div>
        </div>
    )
}