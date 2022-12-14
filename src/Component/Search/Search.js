/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import NavberPractice from '../Header/NavberPractice/NavberPractice';
import { useForm } from "react-hook-form";
import Data from '../Home/Data/Data';

const Search = () => {
    


    return (
        <div>
            <NavberPractice></NavberPractice>
            <div className="container">
           <hr/>
           <div className="row">
               <div className="col-md-4">
                  <div className="searchBar">
      <form className="p-3" /* onSubmit={handleSubmit(onSubmit)}*/>
      <div className="form-group">
    <label htmlFor="exampleInputEmail1">Pick Form</label>
    <input type="text" name="text1" className="form-control" /*ref={register({ required: true })}  */ placeholder="Text1"/>
    {/* {errors.text1 && <span className="error">Text1 is required</span>} */}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Pick To</label>
    <input type="text" name="text2" className="form-control" /*ref={register({ required: true })} */ placeholder="Text2"/>
    
    {/* {errors.text2 && <span className="error">Text2 is required</span>} */}
    
  </div>
  <button className="btn btn-danger btn-block" type="submit">Search</button>
                      </form>
                  </div>
               </div>
               <div className="col-md-8 pl-5">
               <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700311876755!2d90.34510368559377!3d23.794582086880474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616301485724!5m2!1sen!2sbd" width="600" height="600"  loading="lazy"></iframe>
               </div>
           </div>
            </div>
        </div>
    );
};

export default Search;