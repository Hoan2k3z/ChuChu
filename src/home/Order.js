import 'bootstrap/dist/css/bootstrap.css';
import '../category_css/Order.css';
import React, {useEffect, useState} from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaTiktok, FaSearch} from "react-icons/fa";
import Image from './Image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";


function Order(){
  
  const [listseafood, setListseafood] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/haisan")
      .then(res => {
        setListseafood(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [fileSearchShow, setFileSearchShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  const handleFileSearchClose = () => setFileSearchShow(false);
  const handleFileSearchShow = () => {
    setFileSearchShow(true);
    setCartShow(false); 
  };

  const handleCartClose = () => setCartShow(false);
  const handleCartShow = () => {
    setCartShow(true);
    setFileSearchShow(false); 
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    // setCartButtonId(buttonId);
  };
  // const addToCart = (item, buttonId) => {
  //   // Thêm logic xử lý khi thêm vào giỏ hàng
  //   setCartButtonId(buttonId); // Đặt id của button được click vào state
  // };

  const [cartButtonId, setCartButtonId] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{margin: '0 100px 0 160px'}}>
      <a className="navbar-brand logo" href="/"><img src={"/image/logo.png"} alt='' /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <select className="form-select select-css address" aria-label="Default select example">
          <option selected> Chọn địa điểm</option>
          <option value="1"> One</option>
          <option value="2"> Two</option>
          <option value="3"> Three</option>
      </select>
      <select className="form-select select-css giaohang" aria-label="Default select example">
          <option selected>Chọn phương thức</option>
          <option value="1"> Giao hàng</option>
          <option value="2"> Đến lấy</option>
      </select>
      <li className="ic">
          <AiOutlineFileSearch size={24} onClick={handleFileSearchShow} />
          <Offcanvas show={fileSearchShow} onHide={handleFileSearchClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Lịch sử đơn hàng</Offcanvas.Title>
            </Offcanvas.Header>
            <hr style={{ marginLeft: '15px', marginRight: '15px' }} />
            <Offcanvas.Body>
            <InputGroup style={{ width:'100%' }}>
              <Form.Control placeholder="Số điện thoại"
                            aria-describedby="basic-addon2"
                            style={{height:'50px',width:'60%'}}/>
              <Button style={{bottom:'20px', height:'50px', width:'30%', backgroundColor:'orangered', border:'none'}}>
                Tìm kiếm
              </Button>
            </InputGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </li>
        <li className="ic">
          <BsCart4 size={24} onClick={handleCartShow} />
          <Offcanvas show={cartShow} onHide={handleCartClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
            </Offcanvas.Header>
            <hr style={{ marginLeft: '15px', marginRight: '15px' }} />
            <Offcanvas.Body style={{ textAlign: 'center' }}>
              {cartItems.length === 0 ? (
                "Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua hàng."
                ) : (
                <ul>
                  {cartItems.map((cartItem) => (
                  <li key={cartItem.id}>{cartItem.ten}</li>
                  ))}
                </ul>
                )}
            </Offcanvas.Body>
          </Offcanvas>
        </li>
      <li className="ic"><FaTiktok size={24}/> </li>
    </nav>

      <section >
      <div className="img_banner">
          <img src={"/image/banner.jpg"} alt="" />
      </div>
      </section>

      <div>
      <Image />
      </div>
   
  <div className="list_menu d-flex">
  <ul className="wrapper flex flex-row gap-4" style={{display:"flex"}}>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Tất cả</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Lẩu</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Các món ếch khác</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Cháo ếch</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Canh</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Cơm-mì-miến</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Ếch chiên-rang</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Gỏi</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Rau</li>
      <li className="item px-4 py-2 " style={{borderRadius:'10px'}}>Nước uống</li>
  </ul>
  <form className="search d-flex ml-4">
  <div className="search-wrapper">
    <FaSearch className="search-icon" />
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  </div>
</form>
  </div>

  <div className="row" style={{ padding: "50px 120px", width: '100%',marginLeft: '25px' }}>
  <Row xs={1} md={4} className="g-2">
    {Array.isArray(listseafood) && listseafood.length > 0 && listseafood.map(item => (
      <Col key={item.id}>
        <Card>
          <Card.Img variant="top" src={item.anh} height="100px" width="100px" />
          <Card.Body>
            <Card.Title>{item.ten}</Card.Title>
            <Card.Text>{item.gia}</Card.Text>
            <Button
            onClick={() => addToCart(item)}
            onMouseEnter={() => setHoveredButton(item.id)}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              margin: 'auto',  
              display: 'block',  
              border: 'none',
              backgroundColor: (hoveredButton === item.id || cartButtonId === item.id) ? 'gray' : 'orange',
                    color: (hoveredButton === item.id || cartButtonId === item.id) ? 'black' : 'white',
                    transition: 'background-color 0.3s, color 0.3s', 
            }} className="cart-button">
              Thêm vào giỏ
            </Button>
            <Button variant="primary"
            style={{
              margin: 'auto',  
              display: 'block',  
              border: 'none',
              backgroundColor: 'white',  // Màu cam
              color: 'orange',  // Màu chữ trắng
              transition: 'background-color 0.3s, color 0.3s',  // Hiệu ứng chuyển đổi màu khi di chuột
            }}>
              Mua ngay
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>





    <footer style={{textAlign: "center", width: '100%', marginTop:"10%", borderTop:"1px solid #000000", 
    height:"auto", lineHeight:'.5', fontSize:"16px", paddingTop:"10px"}}>
      <img className="logo_footer" src={"/image/logo.png"} alt="" />
      <p className="state">● Đang mở cửa </p>
      <p>CHU CHU - CHUỖI NHÀ HÀNG HÀNG ĐẦU VỀ HẢI SẢN TẠI HÀ NỘI</p>
      <p>▫️111, Thanh Xuân, Nguyễn Trãi, Hà Nội.</p>
      <p>▫️69, Xuân Thủy, Cầu Giấy, Hà Nội.</p>
      <p>▫️371D Nguyễn Cảnh Chân, Phường Nguyễn Cư Trinh Quận 1.</p>
      <p>▫️59 SONG HÀNH, P. AN PHÚ, TP THỦ ĐỨC, TP.HCM.</p>
      <p>☎ Hotline đặt bàn: 1900 633 650</p>
      <img className="fb_footer" src={""} alt="" />
    </footer>
  </>
  )
}

export default Order;
   