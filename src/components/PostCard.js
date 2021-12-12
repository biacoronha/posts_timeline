import {Card, Input, Button} from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import Post from '../models/Post'
import ActionCard from './ActionCard';
import './PostCard.css'

export default function PostCard(props) {
    const {action, postToEdit} = props
    const [content, setContent] = useState('')
    const [creationDate, setCreationDate] = useState('')

    const mountPost = () => {
        const date = new Date()
        setCreationDate(date.toLocaleString())
        const post = new Post(content, creationDate)
        console.log(post)
        action(post)
        //clear card
    }

    return (
        <div className='post-card'>
            <Card style={{width: '100%'}}>
                <Card.Content style={{width: '100%'}}>
                    <Input placeholder='What are you thinking?'  onChange={(e) => setContent(e.target.value)}/>
                </Card.Content>
                <Button color='green' onClick={mountPost}>
                    {postToEdit ? 'Update' :'Post'}
                </Button>
            </Card>
        </div>
    )

}