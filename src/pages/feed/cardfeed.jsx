import React, { useState } from "react";
// import "../App.css";

// const ReadMore = ({ children }) => {
// const text = children;
// const [isReadMore, setIsReadMore] = useState(true);
// const toggleReadMore = () => {
// 	setIsReadMore(!isReadMore);
// };
// return (
//     <div className="container my-5" style={{border: 'solid', borderColor: 'white', backgroundColor: '#edf6f9'}}>
//         <p className="text" style={{color: 'black', fontSize: '18px'}}>
//         {isReadMore ? text.slice(0, 150) : text}
//         <span onClick={toggleReadMore} className="read-or-hide" style={{color: 'lightblue'}}>
//              {isReadMore ? " ...read more" : " show less"}
//         </span>
//         </p>
//     </div>
// );
// };

const Content = ({ tweet }) => {
	// const jTweet = JSON.parse(tweet)
	console.log("tweet:",tweet)
return (
	<div className="container" style={{border:'solid', backgroundColor:'#292422', borderRadius:"8px", padding:'12px' }} >
		{tweet && <p style={{
			color: 'white',
	}}>{tweet.Tweet}</p>}
	</div>
);
};

export default Content;
