import React from 'react'

const PopularBlogs = () => {
  return (
    <div className='mentor-colleges popular-blogs'>
        <h1>Most Popular Blogs</h1>
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src="/images/home6.png" alt="" />
                </div>
                <p>Top 50 C Programming Interview Questions and Answers</p>
           
                <div className="button">
                   Read Now
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="/images/home7.png" alt="" />
                </div>
                <p>Motivational Story : He got his first placement success after being rejected by 22 companies</p>
           
                <div className="button">
                   Read Now
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="/images/home8.png" alt="" />
                </div>
                <p>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</p>
           
                <div className="button">
                   Read Now
                </div>
            </div>
        </div>

    </div>
  )
}

export default PopularBlogs