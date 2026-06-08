import React from 'react'
import service from '../appwrite/config'
import { PostForm ,Container} from '../components'

function AddPost() {
  return (
    
    <div className="py-8">
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost