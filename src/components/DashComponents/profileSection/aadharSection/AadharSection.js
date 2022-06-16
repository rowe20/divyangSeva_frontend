import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import "./aadharsection.scss"
import AadharLoader from "../../../Loader/AadharLoader"
import axios from 'axios'
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const AadharSection = (props) => {
    const [verifyBtn, setverifyBtn] = useState(false)
    const [imgSrc, setimgSrc] = useState("");
    const {aadharverStatus,setaadharverfStatus,setaadharBody} = props;
    const [verifyStatement, setverifyStatement] = useState("");

    var formData = new FormData();

    const verify = () =>{
        
        setverifyBtn(true);

       
       axios.post("https://nationalapi.docsumo.com/api/v1/national/extract/?side=front&save_data=false&return_redacted=false&fraud_check=true",
       formData,
       {
           headers:{
        'X-API-KEY':'u817s4h7mx9siI6ye1pPlgQQyWteXNzvSMKrbBnCEGT49fJYwb4cM7Czs70f'
       }}
        )
       .then((res) =>{
           if(res.status === 200)
           {
            console.log(res);
            setaadharBody(res.data.data);
            toast.success("Aadhar verified Succesfully",{
                position:toast.POSITION.BOTTOM_CENTER,
                autoClose: 2000,
                transition:Zoom,
              });
             //add this
            setTimeout(()=>{
            // localStorage.setItem("aadharVerified","yes");
            setaadharverfStatus(true);
            },3000);

           }
           
        })
        .catch((error)=>{
            setverifyBtn(false);
            setverifyStatement("Please Upload the proper image / Upload proper Aadhar image");
            console.log(error);
        })
    
    }

    const showImage = (event) =>{
        // formData = new FormData();
        formData.append('files',event);
        setimgSrc(URL.createObjectURL(event));
        // console.log(formData.get('files'));  
        setverifyStatement("Verifying....");
        setTimeout(()=>{
            verify();
            },3000);
        
    }

  return (
      <>
        <ToastContainer
        draggable={false}
        transition={Zoom}
        autoClose={2000}
        />
    <div class="blog-slider">
        {verifyBtn === true && <AadharLoader/>}
        {verifyBtn === false && 
        
        <div class="blog-slider__wrp">
        <div class="blog-slider__item">
            
        {imgSrc && 
            <div class="blog-slider__img">
                    <img src={imgSrc} alt="" height={50} width={50}/>
                </div>}
            <div class="">
                <span class="blog-slider__code">Complete Your Profile</span>
                <div class="blog-slider__title">Verify Aadhar Card</div>
                <div class="blog-slider__text">Please upload a clear image which contains your aadhar card details for verification. </div>
                <Form onSubmit={verify}>
                <FormGroup>
                    <Label for="exampleFile">
                    File
                    </Label>
                    <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    accept='image/*'
                    onChange={(event)=>{showImage(event.target.files[0])}}
                    />
                </FormGroup>
                <div class="blog-slider__text">{verifyStatement}</div>
                </Form>
            </div>
        </div>
    </div>

        }
    </div>
    </>
  )
}

export default AadharSection