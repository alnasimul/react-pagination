import React from 'react';

const Posts = ({posts, loading}) => {
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            {
                <ul className='list-group mb-5'>
                    {
                        posts.map( (post) => 
                            <li key={post.id} className='list-group-item'>
                                <p>
                                    {
                                        post.id
                                    }
                                </p>
                                {
                                    post.title
                                }

                            </li>
                          
                        )
                    }
                </ul>
            }
        </div>
    );
};

export default Posts;