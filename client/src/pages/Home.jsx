import React from 'react'
import Pic1 from '../img/pic.jpg'
import Pic2 from '../img/pic1.jpg'
import Pic3 from '../img/pic2.jpg'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [posts, setPosts] = useState([]);

    const cat = useLocation().search


    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get(`/posts${cat}`);
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


    // const getText = (html) => {
    //     const doc = new DOMParser().parseFromString(html, "text/html")
    //     return doc.body.textContent
    // }

  return (
    <div className='home'>
        <div className="posts">
            {
                posts.map((post) =>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            
                                <h1> {post.title}</h1>
                            {/* <p>{getText(post.desc)}</p> */}
                            <Link className='link' to={`/post/${post.id}`}>
                            <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home
