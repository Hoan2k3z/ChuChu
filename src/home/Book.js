import React, { useState } from 'react';
import Modal from 'react-modal';

const Book = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [facility, setFacility] = useState('');
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');
    const [note, setNote] = useState('');
    
    const facilities = ['Chuchu Nguyễn Trãi - Hà Nội', 
    'ChuChu Xuân Thủy - Hà Nội', 
    'ChuChu Nguyễn Cảnh Chân - Hồ Chí Minh',
    'ChuChu An Phú - Hồ Chí Minh'];
   
    const handleSubmit = async (event) => {
       event.preventDefault();
       const response = await fetch('/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ name, phone, date, time, facility, adults, children, note }),
       });
       if (response.status === 1000) {
        alert('Đặt bàn thành công');
      } else if (response.status === 500) {
        // Use an appropriate status code for indicating no available tables
        alert('Xin lỗi nhà hàng hiện hết bàn');
      } else {
        // Handle other status codes as needed
        alert('Đã xảy ra lỗi. Vui lòng thử lại sau');
      }
    }; 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Đặt bàn"
      style={{
        content: {
          width: '600px',
          margin: '0 auto',
          border: '2px solid orange',
          height: '600px',
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-orange-red-watercolor-background-material-image_271784.jpg")',
          backgroundSize: '100% 100%',
          opacity: 0.7,
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="name" style={{ color: 'white' }}>Họ và tên</label>
            <input type="text" className="form-control" id="name" name="name" style={{ width: '80%' }} 
            onChange={(e) => setName(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="phone" style={{ color: 'white' }}>Số điện thoại</label>
            <input type="text" className="form-control" id="phone" name="phone" style={{ width: '80%' }} 
            onChange={(e) => setPhone(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="date" style={{ color: 'white' }}>Ngày</label>
            <input type="date" className="form-control" id="date" name="date" style={{ width: '80%' }} 
            onChange={(e) => setDate(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="time" style={{ color: 'white' }}>Giờ</label>
            <input type="time" className="form-control" id="time" name="time" style={{ width: '80%' }} 
            onChange={(e) => setTime(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="facility" style={{ color: 'white' }}>Chọn cơ sở</label>
            <select className="form-control" id="facility" name="facility" style={{ width: '80%' }} 
            onChange={(e) => setFacility(e.target.value)} required>
              <option value="">Chọn cơ sở</option>
              {facilities.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="adults" style={{ color: 'white' }}>Người lớn</label>
            <input type="number" className="form-control" id="adults" name="adults" style={{ width: '80%' }} 
            onChange={(e) => setAdults(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="children" style={{ color: 'white' }}>Trẻ em</label>
            <input type="number" className="form-control" id="children" name="children" style={{ width: '80%' }} 
            onChange={(e) => setChildren(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="note" style={{ color: 'white' }}>Ghi chú</label>
            <textarea className="form-control" id="note" name="note" style={{ width: '80%' }} 
            onChange={(e) => setNote(e.target.value)} required/>
          </div>
        </div>
        <button type="submit" className="btn" style={{ alignSelf: 'center' }}>ĐẶT BÀN</button>
      </form>
    </Modal>
  );
};

export default Book;
