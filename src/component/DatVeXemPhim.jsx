import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { LayTen, GheDaChon, LayTien } from "../redux/datVeXemPhim/creator";

const STATE_DEFAULT = [
  {
    hang: "",
    danhSachGhe: [
      { soGhe: "1", gia: 0 },
      { soGhe: "2", gia: 0 },
      { soGhe: "3", gia: 0 },
      { soGhe: "4", gia: 0 },
      { soGhe: "5", gia: 0 },
      { soGhe: "6", gia: 0 },
      { soGhe: "7", gia: 0 },
      { soGhe: "8", gia: 0 },
      { soGhe: "9", gia: 0 },
      { soGhe: "10", gia: 0 },
      { soGhe: "11", gia: 0 },
      { soGhe: "12", gia: 0 },
    ],
  },
  {
    hang: "A",
    danhSachGhe: [
      { soGhe: "A1", gia: 75000, daDat: false },
      { soGhe: "A2", gia: 75000, daDat: false },
      { soGhe: "A3", gia: 75000, daDat: false },
      { soGhe: "A4", gia: 75000, daDat: false },
      { soGhe: "A5", gia: 75000, daDat: false },
      { soGhe: "A6", gia: 75000, daDat: false },
      { soGhe: "A7", gia: 75000, daDat: false },
      { soGhe: "A8", gia: 75000, daDat: false },
      { soGhe: "A9", gia: 75000, daDat: false },
      { soGhe: "A10", gia: 75000, daDat: false },
      { soGhe: "A11", gia: 0, daDat: true },
      { soGhe: "A12", gia: 0, daDat: true },
    ],
  },
  {
    hang: "B",
    danhSachGhe: [
      { soGhe: "B1", gia: 75000, daDat: false },
      { soGhe: "B2", gia: 75000, daDat: false },
      { soGhe: "B3", gia: 75000, daDat: false },
      { soGhe: "B4", gia: 75000, daDat: false },
      { soGhe: "B5", gia: 75000, daDat: false },
      { soGhe: "B6", gia: 75000, daDat: false },
      { soGhe: "B7", gia: 75000, daDat: false },
      { soGhe: "B8", gia: 75000, daDat: false },
      { soGhe: "B9", gia: 75000, daDat: false },
      { soGhe: "B10", gia: 75000, daDat: false },
      { soGhe: "B11", gia: 75000, daDat: false },
      { soGhe: "B12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "C",
    danhSachGhe: [
      { soGhe: "C1", gia: 75000, daDat: false },
      { soGhe: "C2", gia: 75000, daDat: false },
      { soGhe: "C3", gia: 75000, daDat: false },
      { soGhe: "C4", gia: 75000, daDat: false },
      { soGhe: "C5", gia: 75000, daDat: false },
      { soGhe: "C6", gia: 75000, daDat: false },
      { soGhe: "C7", gia: 75000, daDat: false },
      { soGhe: "C8", gia: 75000, daDat: false },
      { soGhe: "C9", gia: 75000, daDat: false },
      { soGhe: "C10", gia: 75000, daDat: false },
      { soGhe: "C11", gia: 75000, daDat: false },
      { soGhe: "C12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "D",
    danhSachGhe: [
      { soGhe: "D1", gia: 75000, daDat: false },
      { soGhe: "D2", gia: 75000, daDat: false },
      { soGhe: "D3", gia: 75000, daDat: false },
      { soGhe: "D4", gia: 75000, daDat: false },
      { soGhe: "D5", gia: 75000, daDat: false },
      { soGhe: "D6", gia: 75000, daDat: false },
      { soGhe: "D7", gia: 75000, daDat: false },
      { soGhe: "D8", gia: 75000, daDat: false },
      { soGhe: "D9", gia: 75000, daDat: false },
      { soGhe: "D10", gia: 75000, daDat: false },
      { soGhe: "D11", gia: 75000, daDat: false },
      { soGhe: "D12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "E",
    danhSachGhe: [
      { soGhe: "E1", gia: 75000, daDat: false },
      { soGhe: "E2", gia: 75000, daDat: false },
      { soGhe: "E3", gia: 75000, daDat: false },
      { soGhe: "E4", gia: 75000, daDat: false },
      { soGhe: "E5", gia: 75000, daDat: false },
      { soGhe: "E6", gia: 75000, daDat: false },
      { soGhe: "E7", gia: 75000, daDat: false },
      { soGhe: "E8", gia: 75000, daDat: false },
      { soGhe: "E9", gia: 75000, daDat: false },
      { soGhe: "E10", gia: 75000, daDat: false },
      { soGhe: "E11", gia: 75000, daDat: false },
      { soGhe: "E12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "F",
    danhSachGhe: [
      { soGhe: "F1", gia: 75000, daDat: false },
      { soGhe: "F2", gia: 75000, daDat: false },
      { soGhe: "F3", gia: 75000, daDat: false },
      { soGhe: "F4", gia: 75000, daDat: false },
      { soGhe: "F5", gia: 75000, daDat: false },
      { soGhe: "F6", gia: 75000, daDat: false },
      { soGhe: "F7", gia: 75000, daDat: false },
      { soGhe: "F8", gia: 75000, daDat: false },
      { soGhe: "F9", gia: 75000, daDat: false },
      { soGhe: "F10", gia: 75000, daDat: false },
      { soGhe: "F11", gia: 75000, daDat: false },
      { soGhe: "F12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "G",
    danhSachGhe: [
      { soGhe: "G1", gia: 75000, daDat: false },
      { soGhe: "G2", gia: 75000, daDat: false },
      { soGhe: "G3", gia: 75000, daDat: false },
      { soGhe: "G4", gia: 75000, daDat: false },
      { soGhe: "G5", gia: 75000, daDat: false },
      { soGhe: "G6", gia: 75000, daDat: false },
      { soGhe: "G7", gia: 75000, daDat: false },
      { soGhe: "G8", gia: 75000, daDat: false },
      { soGhe: "G9", gia: 75000, daDat: false },
      { soGhe: "G10", gia: 75000, daDat: false },
      { soGhe: "G11", gia: 75000, daDat: false },
      { soGhe: "G12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "H",
    danhSachGhe: [
      { soGhe: "H1", gia: 75000, daDat: false },
      { soGhe: "H2", gia: 75000, daDat: false },
      { soGhe: "H3", gia: 75000, daDat: false },
      { soGhe: "H4", gia: 75000, daDat: false },
      { soGhe: "H5", gia: 75000, daDat: false },
      { soGhe: "H6", gia: 75000, daDat: false },
      { soGhe: "H7", gia: 75000, daDat: false },
      { soGhe: "H8", gia: 75000, daDat: false },
      { soGhe: "H9", gia: 75000, daDat: false },
      { soGhe: "H10", gia: 75000, daDat: false },
      { soGhe: "H11", gia: 75000, daDat: false },
      { soGhe: "H12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "I",
    danhSachGhe: [
      { soGhe: "I1", gia: 75000, daDat: false },
      { soGhe: "I2", gia: 75000, daDat: false },
      { soGhe: "I3", gia: 75000, daDat: false },
      { soGhe: "I4", gia: 75000, daDat: false },
      { soGhe: "I5", gia: 75000, daDat: false },
      { soGhe: "I6", gia: 75000, daDat: false },
      { soGhe: "I7", gia: 75000, daDat: false },
      { soGhe: "I8", gia: 75000, daDat: false },
      { soGhe: "I9", gia: 75000, daDat: false },
      { soGhe: "I10", gia: 75000, daDat: false },
      { soGhe: "I11", gia: 75000, daDat: false },
      { soGhe: "I12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "J",
    danhSachGhe: [
      { soGhe: "J1", gia: 75000, daDat: false },
      { soGhe: "J2", gia: 75000, daDat: false },
      { soGhe: "J3", gia: 75000, daDat: false },
      { soGhe: "J4", gia: 75000, daDat: false },
      { soGhe: "J5", gia: 75000, daDat: false },
      { soGhe: "J6", gia: 75000, daDat: false },
      { soGhe: "J7", gia: 75000, daDat: false },
      { soGhe: "J8", gia: 75000, daDat: false },
      { soGhe: "J9", gia: 75000, daDat: false },
      { soGhe: "J10", gia: 75000, daDat: false },
      { soGhe: "J11", gia: 75000, daDat: false },
      { soGhe: "J12", gia: 75000, daDat: false },
    ],
  },
];

class DatVeXemPhim extends Component {
  render() {

    const danhSachGheAll = [];
    for (let i = 1; i < STATE_DEFAULT.length; i++) {
      const element = STATE_DEFAULT[i].danhSachGhe;
      // console.log(element);
      for (let u = 0; u < element.length; u++) {
        const element2 = element[u];
        danhSachGheAll.push(element2);
      }
    }

    const mangGheChonAll = [];
    // console.log(ccc);
    // console.log(this.props)

    return (
      <div className="bg__form">
        <h1>MOVIE SEAT SELECTION</h1>
        <div className="container form__datve">
          <h4>Fill The Required Details Below And Select Your Seats</h4>
          <div className="form__datve_thongtin">
            <input id="name" type="text" />
            {/* <input type="number" /> */}
          </div>
          {/* <button>
            Start selecting
          </button> */}
          <div className="form_datve_thongtinghe d-flex justify-content-around">
            <div className="tinhtrangghe d-flex">
              <div className="check_ghe_1"></div>
              <p>Selected Seat</p>
            </div>
            <div className="tinhtrangghe d-flex">
              <div className="check_ghe_2"></div>
              <p>Reserved Seat</p>
            </div>
            <div className="tinhtrangghe d-flex">
              <div className="check_ghe_3"></div>
              <p>Empty Seat</p>
            </div>
          </div>

          <div className="danhsach">
            <div className="row">
              {danhSachGheAll.map((soGhe) => {
                return (
                  <div className="col-1">
                    <button
                      id={soGhe.soGhe}
                      onClick={() => {
                        
                        // console.log(soGhe.soGhe);
                        // console.log(soGhe.gia);

                        // const soGheChon = document.getElementById(`${soGhe.soGhe}`).value;
                        // console.log(soGheChon);

                        // const allGheDaChon = [...chonGhe]
                        // mangGheChonAll.push(chonGhe)
                        // console.log(mangGheChonAll);

                        //! lấy Name
                        const name = document.getElementById("name").value;
                        if (name === '') {
                          alert("XIN VUI LÒNG NHẬP TÊN!");
                        } else {
                          // khi click sẽ đổi màu ô đã chọn
                          document.getElementById(
                            `${soGhe.soGhe}`
                          ).style.background = "green";


                          const action2 = LayTen(name);
                          this.props.dispatch(action2);

                          //! lấy Seat
                          const chonGhe = GheDaChon(soGhe.soGhe);
                          const action = chonGhe;
                          console.log(action);
                          this.props.dispatch(action);

                          //! lấy Price
                          const giaGhe = LayTien(soGhe.gia);
                          const action1 = giaGhe;
                          this.props.dispatch(action1);
                        }
                        //
                      }}
                      className="bt__ghe"
                      key={soGhe.soGhe}
                      type="button"
                    >
                      {soGhe.soGhe}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form__screen">
            <h1>SCREEN THIS WAY</h1>
          </div>

          <div className="form__thongtinve">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>

                  <th scope="col">Seat</th>
                  <th scope="col">All Seat Choose</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.Ten}</td>

                  <td>{" " + this.props.MangGheChon}</td>
                  <td>{this.props.SoGhe}</td>
                  <td>{this.props.SoTien}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (rootReducer) => {
  return { ...rootReducer.GheReducer };
};

export default connect(mapStatetoProps)(DatVeXemPhim);
