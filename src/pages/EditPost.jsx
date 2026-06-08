import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostForm,Container } from '../components'
import { useNavigate } from 'react-router-dom'
import service from '../appwrite/config'
import { useState,useEffect } from 'react'

function EditPost() {

    const [posts,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
                
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm psot={posts}/>
        </Container>
    </div>
  ): null
}

export default EditPost
