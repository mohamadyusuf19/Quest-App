import React, { Component } from "react";
import { connect } from "react-redux";
import { startTime } from "../../redux/actions/contentActions";
import Home from "../../components/home/Home";
import moment from "moment";

class HomeContainer extends Component {
  render() {
    var date = new Date();
    // batas waktu awal sampai akhir dalam mengerjakan soal
    var start = moment(date).format();
    var end = moment(date)
      .add(10, "minute")
      .add(3, "seconds");
    var _detik = 1000;
    var _menit = _detik * 60;
    var _jam = _menit * 60;
    var _hari = _jam * 24;
    return (
      <Home
        onClickStart={() =>
          this.props.startTime({
            _hari,
            _jam,
            _menit,
            _detik,
            end,
            start
          })
        }
      />
    );
  }
}

export default connect(
  null,
  { startTime }
)(HomeContainer);
