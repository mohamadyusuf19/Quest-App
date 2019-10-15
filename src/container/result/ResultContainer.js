import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { totalNilai } from "../../redux/actions/contentActions";
import Result from "../../components/result/Result";

class ResultContainer extends Component {
  constructor() {
    super();
    this.state = {
      nilai: 0,
      kosong: 0
    };
    this.looping = this.looping.bind(this);
  }

  //menghitung total nilai dan mengupdate ke state
  componentDidUpdate(prevProps) {
    if (this.props.content.answer !== prevProps.content.answer) {
      const { answer } = this.props.content;
      let nilai = 0;
      let kosong = 0;
      for (let i = 0; i < answer.length; i++) {
        if (isEmpty(answer[i].value)) {
          kosong += 1;
        }
        nilai += answer[i].nilai;
      }
      this.setState({ nilai, kosong });
    }
  }

  componentDidMount() {
    this.looping();
  }

  //mengganti nilai yang benar atau salah ke nilai yang ada didalam data
  looping() {
    const { answer } = this.props.content;
    if (answer.length > 0) {
      return answer.map(item => {
        const penilaian = item.jawaban === item.value ? 1 : 0;
        this.props.totalNilai({
          ...item,
          nilai: penilaian
        });
      });
    }
  }

  render() {
    const { answer, time } = this.props.content;
    const { nilai, kosong } = this.state;
    const nilaiPersentase = (nilai / answer.length) * 100;
    const salah = answer.length - nilai - kosong;
    // console.log("kosong", this.state.kosong);
    return (
      <Result
        nilai={nilaiPersentase}
        benar={nilai}
        salah={salah}
        kosong={kosong}
        startTime={time.start}
        endTime={time.end}
      />
    );
  }
}

const mapStateToProps = state => ({
  content: state.content
});

export default connect(
  mapStateToProps,
  { totalNilai }
)(ResultContainer);
