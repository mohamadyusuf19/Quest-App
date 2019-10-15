/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  pilihSoal,
  pilihJawaban,
  endTime
} from "../../redux/actions/contentActions";
import Content from "../../components/content/Content";
import moment from "moment";
import isNaN from "lodash/isNaN";

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      checked: "",
      result: false,
      completedAnswer: false,
      hari: 0,
      jam: 0,
      menit: 0,
      detik: 0
    };
    this.onChangeChoices = this.onChangeChoices.bind(this);
    this.onClickSoal = this.onClickSoal.bind(this);
    this.onClickSidebar = this.onClickSidebar.bind(this);
  }

  scrollToMyRef = () => window.scrollTo(0, 0);

  componentDidMount() {
    const { id } = this.props.match.params;
    const { answer } = this.props.content;
    // mengambil data soal berdasarkan id routes params
    answer.map((item, idx) => {
      const index = idx + 1;
      if (index === parseInt(id)) {
        this.props.pilihSoal(item);
      }
    });
    this.timer = setInterval(this.showRemaining.bind(this), 1000);
  }

  //clearing interval
  componentWillUnmount() {
    return clearInterval(this.timer);
  }

  componentDidUpdate(prevProps) {
    //mengisi jawaban di setiap soal dan mengupdate ke state
    const { id } = this.props.match.params;
    const { answer } = this.props.content;
    if (id !== prevProps.match.params.id) {
      return answer.map((item, idx) => {
        if (idx + 1 === parseInt(id)) {
          this.setState({ checked: item.value });
        } else if (idx + 1 < parseInt(id)) {
          this.setState({ checked: "" });
        }
      });
    }
  }

  //fungsi menghitung mundur waktu
  showRemaining() {
    const { time } = this.props.content;
    var now = new Date();
    var distance = time.end - now;
    if (isNaN(this.state.detik)) {
      this.setState({ result: true });
      return clearInterval(() => this.timer);
    }
    if (distance < 0) {
      this.setState({ result: true });
      this.props.endTime(time.end);
      return clearInterval(() => this.timer);
    }
    var hari = Math.floor(distance / time._hari);
    var jam = Math.floor((distance % time._hari) / time._jam);
    var menit = Math.floor((distance % time._jam) / time._menit);
    var detik = Math.floor((distance % time._menit) / time._detik);
    this.setState({
      hari,
      jam,
      menit,
      detik
    });
  }

  //fungsi mengubah jawaban di radio button
  onChangeChoices(e) {
    this.setState({
      checked: e
    });
  }

  onClickSoal() {
    this.pilihSoal();
    this.pilihJawaban();
    this.scrollToMyRef();
  }

  //fungsi untuk mengirim soal ke pages berikutnya
  pilihSoal() {
    const { id } = this.props.match.params;
    const { answer } = this.props.content;
    const page = parseInt(id);
    return answer.map((item, idx) => {
      const index = idx;
      // membandingkan id routes params dengan index
      if (index === page) {
        this.props.pilihSoal(item);
      }
    });
  }

  //fungsi mengirim jawaban ke redux
  pilihJawaban() {
    const { id } = this.props.match.params;
    const { answer } = this.props.content;
    const endTime = new Date();
    const page = parseInt(id);
    return answer.map((item, idx) => {
      const index = idx + 1;
      if (index === page) {
        this.props.pilihJawaban({
          ...item,
          value: this.state.checked,
          idx
        });
        if (page === answer.length) {
          this.setState({ result: true });
          this.props.endTime(moment(endTime).format());
        }
      }
    });
  }

  //fungsi memilih soal berdasarkan nomor kotak
  onClickSidebar(item) {
    this.props.pilihSoal(item);
    this.scrollToMyRef();
  }

  render() {
    const { id } = this.props.match.params;
    const { data, answer } = this.props.content;
    const { checked, result, jam, menit, detik } = this.state;
    const page = parseInt(id) + 1;
    const checkedPage = parseInt(id);
    if (result) {
      return <Redirect to="/result" />;
    }
    return (
      <Content
        nomor={id}
        pertanyaan={data.pertanyaan}
        pilihan={data.pilihan}
        checked={checked}
        onChangeChoices={e => this.onChangeChoices(e)}
        to={`/${page}`}
        onClickSoal={this.onClickSoal}
        data={answer}
        onClickSidebar={item => this.onClickSidebar(item)}
        page={checkedPage}
        jam={jam}
        menit={menit}
        detik={detik}
      />
    );
  }
}

const mapStateToProps = state => ({
  content: state.content
});

export default connect(
  mapStateToProps,
  { pilihSoal, pilihJawaban, endTime }
)(ContentContainer);
