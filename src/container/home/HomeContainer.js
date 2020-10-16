import React, { Component } from "react";
import { connect } from "react-redux";
import { startTime } from "../../redux/actions/contentActions";
import Home from "../../components/home/Home";
import moment from "moment";

class HomeContainer extends Component {
  constructor() {
    super();
    this.setTime = this.setTime.bind(this);
  }

  scrollToMyRef = () => window.scrollTo(0, 0);

  setTime() {
    var date = new Date();
    // batas waktu awal sampai akhir dalam mengerjakan soal
    var start = date;
    var end = moment(date)
      .add(10, "minute")
      .add(2, "seconds");
    var _detik = 1000;
    var _menit = _detik * 60;
    var _jam = _menit * 60;
    var _hari = _jam * 24;
    this.props.startTime({
      _hari,
      _jam,
      _menit,
      _detik,
      end,
      start
    });
    this.scrollToMyRef();
  }

  render() {
    return <Home onClickStart={this.setTime} />;
  }
}

export default connect(
  null,
  { startTime }
)(HomeContainer);
