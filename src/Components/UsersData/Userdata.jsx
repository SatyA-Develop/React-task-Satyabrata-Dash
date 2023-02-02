import "./Userdata.css";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";


const Userdata = ({ posts, loading,clicked,setClicked,postsPerPage,pages,totalPosts,setCurrentPage }) => {
   

const toggle=(i)=>{
    if(clicked === i){
        return setClicked(null)
    }
    setClicked(i)
}


  return (
    <div>
      {
        loading ? <Loader/>: <div className="post-wrapper">
        <div className="posts-container">
          {posts.map((data,i) => {
            return (
              
              <div key={data.id} className= "post-info">
                <div className="post-data">
                  <div className="name-data title">{data.username}</div>
                  <div className="name-data">
                    <span>NAME</span>
                    <span>{data.name}</span>
                  </div>
                  <div className="name-data">
                    <span>CITY</span>
                    <span>{data.address.city}</span>
                  </div>
                  <div className="name-data">
                    <span>STATE</span>
                    <span>{data.address.street}</span>
                  </div>
                  <div className="name-data btn-sec">
                    <button onClick={()=> toggle(i)}> { clicked === i ? 'Hide Details' :'Show Details'}</button>
                  </div>
                </div>
                <div className= { clicked === i ? "post-details active" : "post-details"}>
                  <div className="post-description  contact-p">
                    <span>CatchPhrase</span>
                    <span>{data.company.catchPhrase}</span>
                  </div>
                  <div className="post-details-info">
                    <div className="contact-p">
                    <span>Contact Person</span>
                    <span>{data.name}</span>
                    </div>
                    <div className="contact-p">
                    <span>Zip Code</span>
                    <span>{data.address.zipcode}</span>
                    </div>
                    <div className="contact-p">
                    <span>Website</span>
                    <span>{data.website}</span>
                    </div>
                    <div className="contact-p">
                    <span>Suite</span>
                    <span>{data.address.suite}</span>
                    </div>
                    <div className="contact-p">
                    <span>Phone</span>
                    <span>{data.phone}</span>
                    </div>
                    <div className="contact-p">
                    <span>Email ID</span>
                    <span>{data.email}</span>
                    </div>
                    <div className="contact-p">
                    <span>Address</span>
                    <span>
                      {data.address.street} {data.address.suite} <br />
                      {data.address.city}  {data.address.zipcode}
                    </span>
                    </div>
                    <div className="contact-p">
                    <span>City</span>
                    <span>{data.address.city}</span>
                    </div>
                  </div>
                </div>
              </div>            
            );
          })}
        </div>
        <Pagination postsPerPage={postsPerPage} pages={pages} totalPosts={totalPosts} setCurrentPage={setCurrentPage}/>
      </div>
      }
    </div>
  );
};

export default Userdata;
