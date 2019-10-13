import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { Redirect } from "react-router-dom";
import { pilihSoal, pilihJawaban } from "../../redux/actions/contentActions";
import Content from "../../components/content/Content";
import { dataSoal } from "../../data/test";

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      checked: "",
      result: false,
      completedAnswer: false
    };
    this.onChangeChoices = this.onChangeChoices.bind(this);
    this.onClickSoal = this.onClickSoal.bind(this);
    this.onClickSidebar = this.onClickSidebar.bind(this);
  }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log(this.props.match.params.id);
  //   return dataSoal.map(item => {
  //     const pos = props.content.answer.map(e => e.number).indexOf(item.soal);
  //     console.log(pos, props);
  //     if (pos !== -1) {
  //       this.setState({ completedAnswer: true });
  //     }
  //   });
  // }

  componentDidMount() {
    const { id } = this.props.match.params;
    // mengambil data soal berdasarkan id routes params
    return dataSoal.map((item, idx) => {
      const index = idx + 1;
      // membandingkan id routes params dengan index
      if (index == id) {
        this.props.pilihSoal(item);
      }
    });
  }

  componentDidUpdate(prevProps) {
    //mengisi jawaban di setiap soal
    const { id } = this.props.match.params;
    const { answer } = this.props.content;
    if (id !== prevProps.match.params.id) {
      return answer.map((item, idx) => {
        if (item.soal === parseInt(id)) {
          this.setState({ checked: item.value });
        } else if (item.soal < parseInt(id)) {
          this.setState({ checked: "" });
        }
      });
    }
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
  }

  //fungsi untuk mengirim soal ke pages berikutnya
  pilihSoal() {
    const { id } = this.props.match.params;
    const page = parseInt(id);
    return dataSoal.map((item, idx) => {
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
    const page = parseInt(id);
    return dataSoal.map((item, idx) => {
      const index = idx + 1;
      if (index === page) {
        // if (isEmpty(this.state.checked)) {
        //   return null;
        // } else {
        this.props.pilihJawaban({
          ...item,
          value: this.state.checked
        });
        if (page === dataSoal.length) {
          this.setState({ result: true });
        }
      }
    });
  }

  onClickSidebar(item) {
    this.props.pilihSoal(item);
  }

  render() {
    const { id } = this.props.match.params;
    const { data, answer } = this.props.content;
    const { checked, result } = this.state;
    const page = parseInt(id) + 1;
    const checkedPage = parseInt(id);
    if (result) {
      return <Redirect to="/result" />;
    }
    return (
      <Content
        nomor={data.soal}
        pertanyaan={data.pertanyaan}
        pilihan={data.pilihan}
        checked={checked}
        onChangeChoices={e => this.onChangeChoices(e)}
        to={`/${page}`}
        onClickSoal={this.onClickSoal}
        data={answer}
        onClickSidebar={item => this.onClickSidebar(item)}
        page={checkedPage}
        onGoBack={() => this.props.history.goBack()}
      />
    );
  }
}

const mapStateToProps = state => ({
  content: state.content
});

export default connect(
  mapStateToProps,
  { pilihSoal, pilihJawaban }
)(ContentContainer);
