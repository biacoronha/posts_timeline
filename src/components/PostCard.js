import {Card, Input, Button} from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import Post from '../models/Post'
import ActionCard from './ActionCard';
import './PostCard.css'

export default function PostCard(props) {
    
    const [newPost, setNewPost] = useState('')
    const [content, setContent] = useState('')
    const [creationDate, setCreationDate] = useState('')

    const mountPost = () => {
        setCreationDate(new Date())
        const post = new Post(content, creationDate)
        console.log(post)
        props.action(post)
        //clear card
    }

    return (
        <div className='post-card'>
            <Card style={{width: '100%'}}>
                <Card.Content style={{width: '100%'}}>
                    <Input placeholder='What are you thinking?' onChange={(e) => setContent(e.target.value)}/>
                </Card.Content>
                <Button color='blue' onClick={mountPost}>
                    Post
                </Button>
            </Card>
        </div>
    )

}