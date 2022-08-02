/* eslint-disable jsx-a11y/img-redundant-alt */
import React  from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import "./HomeDetails.css"

const HomeDetails = (props) => {
    const {name,id,img} = props.homeDetail;
    let navigate = useNavigate();
    // function handleCard(id){
    //     navigate.push(`/${id}`);
    //     // navigate('/about');
    // }  
//   function handleCard(id) {
//     history.push(`/${id}`);
//   }


        const handleCard=()=>{
            const path=`/${id}`
            navigate(path);
            // navigate('/about');
        }
    return (
     <div className="col-md-3">
        <Link to={'/home/'+ id}>
            <div onClick={()=>handleCard(id)} className="card">
                <img className="card-img-top " src={img} alt="Card image cap"/>
                    
                <div className="card-body">
                    <h5 className="card-title text-center card-text">{name}</h5>
                    {/* <button>{id}</button> */}
                </div>
            </div>
            </Link>
    </div>
    );
};

export default HomeDetails;