import React, { useState, useEffect } from 'react';

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import "../category_css/Menu.css";
import menu from '../data/menu.json';

export default function App() {

  const [constn1, setConstn1] = useState([]);
  const [constn2, setConstn2] = useState([]);
  const [constn3, setConstn3] = useState([]);
  const [constn4, setConstn4] = useState([]);
  const [constn5, setConstn5] = useState([]);
  const [constn6, setConstn6] = useState([]);
  
  const [additionalItem1, setAdditionalItem1] = useState([]);
  const [additionalItem2, setAdditionalItem2] = useState([]);
  const [additionalItem3, setAdditionalItem3] = useState([]);
  const [additionalItem4, setAdditionalItem4] = useState([]);
  const [additionalItem5, setAdditionalItem5] = useState([]);
  const [additionalItem6, setAdditionalItem6] = useState([]);

  useEffect(() => {
    setConstn1(menu.sea);
    setAdditionalItem1(menu.sea2);
    setConstn2(menu.khaivi1);
    setAdditionalItem2(menu.khaivi2);
    setConstn3(menu.nuong);
    setAdditionalItem3(menu.lau);
    setConstn4(menu.sotcham1);
    setAdditionalItem4(menu.sotcham2);
    setConstn5(menu.trangmieng1);
    setAdditionalItem5(menu.trangmieng2);
    setConstn6(menu.douong1);
    setAdditionalItem6(menu.douong2);
    // setConstn4(menu.trangmieng1);
    // setAdditionalItem3(menu.trangmieng2);
  }, []);




  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
    setConstn1(menu.sea);
    setAdditionalItem1(menu.sea2);
    setConstn2(menu.khaivi1);
    setAdditionalItem2(menu.khaivi2);
    setConstn3(menu.nuong);
    setAdditionalItem3(menu.lau);
    setConstn4(menu.sotcham1);
    setAdditionalItem4(menu.sotcham2);
    setConstn5(menu.trangmieng1);
    setAdditionalItem5(menu.trangmieng2);
    setConstn6(menu.douong1);
    setAdditionalItem6(menu.douong2);
  };

  return (
    <>
      <div className="menu">
        <div className="logo" style={{padding:"40px 0"}}>
          <img src={"/image/Chu Chu.png"} alt="" style={{width:"286px"}} />
        </div>
        <MDBTabs className='mb-7' style={{ display: 'flex', justifyContent: 'center', }}>
          <MDBTabsItem>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}  style={{color:"#FF8C00",borderRadius:"10px",border:"1px solid yellow",marginBottom:"15px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Món chính
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={{color:"#FF8C00",borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Khai vị
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}  style={{color:"#FF8C00",borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Nướng & Lẩu
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'} style={{color:"#FF8C00",borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Sốt chấm
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'} style={{color:"#FF8C00",borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Tráng Miệng
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'} style={{color:"#FF8C00",borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Đồ uống
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent >

          <MDBTabsPane open={basicActive === 'tab1'}>
          <div class="tab-pane fade show active" role="tabpanel">
              <div class="menu-containers">
                <div style={{width:"441px"}}> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white"}}>Hải sản nướng tại quầy</p>

                  <div class="menu-buffet-item height-full-colunm">
                    <ul class="uk-list list-food">
                      { constn1.map((constn, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                            <span style={{ fontSize: "19px" }}>{constn.name}</span>
                            <small>{constn.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white" }}>Hải Sản Hấp </p>
                  <div class="menu-buffet-item height-full-colunm" style={{paddingRight:"30px"}}>
                    <ul class="uk-list list-food">
                    {additionalItem1.map((additionalItems, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                          <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                          <small>{additionalItems.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'tab2'}>
          <div class="tab-pane fade show active" role="tabpanel">
              <div class="menu-containers">
                <div style={{width:"441px"}}> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white"}}>CÁC MÓN SALAD</p>

                  <div class="menu-buffet-item height-full-colunm">
                    <ul class="uk-list list-food">
                      { constn2.map((constn, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                            <span style={{ fontSize: "19px" }}>{constn.name}</span>
                            <small>{constn.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white" }}>SÚP & CHÁO</p>
                  <div class="menu-buffet-item height-full-colunm " style={{paddingRight:"30px"}}>
                    <ul class="uk-list list-food">
                    {additionalItem2.map((additionalItems, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                          <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                          <small>{additionalItems.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'tab3'}>
          <div class="tab-pane fade show active" role="tabpanel">
              <div class="menu-containers">
                <div style={{width:"441px"}}> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white"}}>Nướng BBQ tại bàn </p>

                  <div class="menu-buffet-item height-full-colunm">
                    <ul class="uk-list list-food">
                      { constn3.map((constn, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                            <span style={{ fontSize: "19px" }}>{constn.name}</span>
                            <small>{constn.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white" }}>Lẩu các loại </p>
                  <div class="menu-buffet-item height-full-colunm" style={{paddingRight:"30px"}}>
                    <ul class="uk-list list-food">
                    {additionalItem3.map((additionalItems, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                          <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                          <small>{additionalItems.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'tab4'}>
          <div class="tab-pane fade show active" role="tabpanel">
              <div class="menu-containers">
                <div style={{width:"441px"}}> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold" }}></p>

                  <div class="menu-buffet-item height-full-colunm">
                    <ul class="uk-list list-food">
                      { constn4.map((constn, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                            <span style={{ fontSize: "19px" }}>{constn.name}</span>
                            <small>{constn.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold" }}></p>
                  <div class="menu-buffet-item height-full-colunm"  style={{paddingRight:"30px"}}>
                    <ul class="uk-list list-food">
                    {additionalItem4.map((additionalItems, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                          <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                          <small>{additionalItems.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </MDBTabsPane>

          <MDBTabsPane open={basicActive === 'tab5'}>
            <div class="tab-pane fade show active" role="tabpanel">
              <div class="menu-containers">
                <div style={{width:"441px"}}> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white" }}>Chè & Thạch Rau Câu</p>

                  <div class="menu-buffet-item height-full-colunm">
                    <ul class="uk-list list-food">
                      { constn5.map((constn, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                            <span style={{ fontSize: "19px" }}>{constn.name}</span>
                            <small>{constn.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white" }}>Bánh Ngọt  </p>
                  <div class="menu-buffet-item height-full-colunm"  style={{paddingRight:"30px"}}>
                    <ul class="uk-list list-food">
                    {additionalItem5.map((additionalItems, index) => (
                        <li key={index} class="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                          <div class="item-left">
                          <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                          <small>{additionalItems.description}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'tab6'}>
            <div>
              <div style={{display:"flex",justifyContent:"center",gap:"50px"}}>
                <div > <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white"}}>Rượu</p>
                  <div class=""style={{backgroundColor:"rgba(0, 0, 0, 0.4)",borderRadius:"10px",padding:"20px 30px",color:"white",width:"441px" }}>
                    <ul class="">
                      { constn6.map((constn, index) => (
                        <li key={index} class="">
                          <div class="" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <span style={{ fontSize: "19px" }}>{constn.name}</span>
                            <span style={{ fontSize: "16px" }}>{constn.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
               <div> <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold",color:"white" }}>Nước Ép </p>

                  <div class="" style={{backgroundColor:"rgba(0, 0, 0, 0.4)",borderRadius:"10px",padding:"20px 30px",color:"white",width:"441px" }}>
                    <ul class="">
                    {additionalItem6.map((additionalItems, index) => (
                        <li key={index} class="">
                          <div class=" "  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                            <span style={{ fontSize: "16px" }}>{additionalItems.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </>
  );
}
