import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pic1 from '../img/pic.jpg'
import Pic2 from '../img/pic1.jpg'
import Pic3 from '../img/pic2.jpg'

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData()
    }, [cat])

    // const posts = [
    //     {
    //         id: 1,
    //         title:"Jehovah is great to us",
    //         desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, architecto inventore sit quis placeat minima natus est aliquid optio excepturi. Tempora reprehenderit quasi eum recusandae cupiditate unde nulla qui repellendus?",
    //         img: Pic1
    //     },
    //     {
    //         id: 2,
    //         title:"Jehovah is great to us",
    //         desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, architecto inventore sit quis placeat minima natus est aliquid optio excepturi. Tempora reprehenderit quasi eum recusandae cupiditate unde nulla qui repellendus?",
    //         img: Pic2
    //     },
    //     {
    //         id: 3,
    //         title:"Jehovah is great to us",
    //         desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, architecto inventore sit quis placeat minima natus est aliquid optio excepturi. Tempora reprehenderit quasi eum recusandae cupiditate unde nulla qui repellendus?",
    //         img: Pic3
    //     },
    // ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div key={post.id} className="post">
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu