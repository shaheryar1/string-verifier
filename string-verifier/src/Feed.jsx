import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import { MDBBtn, MDBContainer,
     MDBRow, MDBCol, MDBIcon, MDBCard,
      MDBCardHeader, MDBCardBody, MDBCardTitle, 
      MDBCardText, MDBInput,MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle } from 'mdbreact';

import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
class Feed extends Component {
    render() {
        return (
            <MDBCard className="m-3" style={{ maxWidth: "100%" }}>

                <MDBCardBody className="text-black" >
<div className="float-left">
                <MDBDropdown>
          <MDBDropdownToggle nav caret className="white-text">
            <span className="grey-text mr-2">...</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#!"> جروباتي <MDBIcon far icon="heart"  className="pl-3">
                </MDBIcon></MDBDropdownItem>
            <MDBDropdownItem href="#!"> جروباتي
            <MDBIcon far icon="flag" className="pl-3">
                </MDBIcon></MDBDropdownItem>
           
          </MDBDropdownMenu>
        </MDBDropdown>
        </div>
                    <MDBRow className="text-right">
                        <MDBCol>
                            <MDBCol>
                                <span className="white float-right ml-0" style={{ border: 'none' }}>
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                        alt=""
                                        width="50px"
                                        height="50px"
                                        className="rounded-circle"
                                    />
                                </span>
                            </MDBCol>
                            <MDBCol>
                                <MDBRow className="float-right mr-3">
                                    <strong>الاسم الكامل</strong>
                                </MDBRow>
                                <MDBRow className="text-right float-right grey-text pt-3 pr-0 mr-0">
                                <MDBCol>
                                بعض الوصفبعض الو
                                </MDBCol>
                           </MDBRow>
                            </MDBCol>

                        </MDBCol>

                    </MDBRow>

                    <MDBRow className="mt-4 text-right">
                        <MDBCol>
                        اسمي علي. عمري 5 سنوات. أنا أع
                        مل في مايكروسوفت. أنا رائعاسمي علي. عمري 5 سنوات. أنا
                         أعمل في مايكروسوفت. أنا رائعاسمي علي. عمري 5 سنوا
                        ت. أنا أعمل في مايكروسوفت. أنا رائعاسمي علي. ع
                        مري 5 سنوات. أنا أعمل في مايكروسوفت. أنا را
                        ئعاسمي علي. عمري 5 سنوات. أنا أعمل في ماي
                        كروسوفت. أنا رائعاسمي علي. عمري 5 سنوات.
                         أنا أعمل في مايكروسوفت. أنا رائعاسمي علي. عمري 
                        5 سنوات. أنا أعمل في مايكروسوفت. أنا رائع
                        </MDBCol>
                    </MDBRow>



                    <hr></hr>

                    <MDBRow className="float-right">
                        <MDBCol >
                       <Button style={{border:'none',backgroundColor:'white',color:"lightgrey"}}> 
                          
                           مثل
                           <MDBIcon icon="share" className="pl-2"></MDBIcon></Button>
                       <Button style={{border:'none',backgroundColor:'white',color:"lightgrey"}}>تعليق
                       <MDBIcon icon="comment" className="pl-2"></MDBIcon>
                       </Button>
                       <Button style={{border:'none',backgroundColor:'white',color:"lightgrey"}}>شارك
                       <MDBIcon far icon="thumbs-up" className="pl-2"></MDBIcon>
                       </Button>
                       </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>

        );
    }

}

export default Feed;