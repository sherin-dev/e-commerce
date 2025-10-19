import React, { useState } from "react"
const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", 
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", 
     desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
    { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", 
     date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau",
     date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];


const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);

    return(
        <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "Desc"}`}>
            <li className="desc" onClick={()=> setReviewShow(!reviewShow)}>Description</li>
             <li className="rev" onClick={()=> setReviewShow(!reviewShow)}>Reviews 4</li>
        </ul>


        {/* desc & review content  */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
          <div className="review-showing">
            <ul className="content lab-ul">
               {
                ReviewList.map((review, i) => (
                    <li key={i}>
                        <div className="post-thumb">
                            <img src={review.imgUrl} alt="" />
                        </div>
                        <div className="post-content">
                           <div className="entry-meta">
                            <a href="#">{review.name}</a>
                            <p>{review.date}</p>
                           </div>
                           <div className="entry-content">
                            <p>{review.desc}</p>
                           </div>
                        </div>
                    </li>
                ))
               }
            </ul>
            {/* Add a review field */}
            <div className="client-review">
                <div className="review-form">
                  <div className="review-title">
                     <h5>{reviwtitle}</h5>
                  </div>
                  <form action="action" className="row">
                    <div className="col-md-4 col-12">
                      <input type="text" name="name" id="name" placeholder="Full name *" />
                    </div>
                    <div className="col-md-4 col-12">
                      <input type="email" name="email" id="name" placeholder="Your Email *" />
                    </div>
                    <div className="col-md-4 col-12">
                     <div className="rating">
                          <span className="me-2">Your Rating</span>
                          <Rating/>
                     </div>
                    </div>
                    <div className="col-md-12 col-12">
                       <textarea name="message" id="message"  rows="8" placeholder="Type here message"></textarea>
                    </div>
                    <div className="col-12">
                       <button type="submit" className="default-button">
                        <span>Submit Review</span>
                       </button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
          {/* description */}
          <div className="descripttion">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex cupiditate quasi
               temporibus consequuntur, fugit rem a ipsa aut culpa,
               repudiandae officiis? Incidunt eaque quam eveniet harum architecto quas accusantium!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex cupiditate quasi
               temporibus consequuntur, fugit rem a ipsa aut culpa,
               repudiandae officiis? Incidunt eaque quam eveniet harum architecto quas accusantium!</p>

               <div className="post-item">
                <div className="post-thumb">
                  <img src="/src/assets/images/shop/01.Jpg" alt="" />
                </div>
                <div className="post-content">
                  <ul className="lab-ul">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,soluta?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,soluta?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,soluta?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,soluta?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,soluta?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,soluta?</li>
                  </ul>
                </div>
               </div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex cupiditate quasi
               temporibus consequuntur, fugit rem a ipsa aut culpa,
               repudiandae officiis? Incidunt eaque quam eveniet harum architecto quas accusantium!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex cupiditate quasi
               temporibus consequuntur, fugit rem a ipsa aut culpa,
               repudiandae officiis? Incidunt eaque quam eveniet harum architecto quas accusantium!</p>

          </div>
        </div>
        </>
    )
}
export default Review