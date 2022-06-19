import React from 'react';
import profile_data from './profile_data'; 
import Card from './Card';
import './Profile.css'; 

const Profile = () => {
  return (
    <>
    <section className="profile top" id="profile">
        <div className="container">
            <div className="heading text-center">
                <h4>VISIT USER PROFILE</h4>
                <h1>Site Users</h1>
            </div>
            <div className="content-grid">
                {profile_data.map((val,index) => {
                    return <Card key={index} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} />
                })}

            </div>
        </div>
    </section>
    </>
  )
}

export default Profile; 