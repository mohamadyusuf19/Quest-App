import React, { Component } from "react";
import { connect } from "react-redux";
import { totalNilai } from "../../redux/actions/contentActions";
import Result from "../../components/result/Result";

class ResultContainer extends Component {
  constructor() {
    super();
    this.state = {
      nilai: 0
    };
    this.looping = this.looping.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.content.answer !== prevProps.content.answer) {
      const { answer } = this.props.content;
      let nilai = 0;
      for (let i = 0; i < answer.length; i++) {
        nilai += answer[i].nilai;
      }
      this.setState({ nilai: nilai });
    }
  }

  componentDidMount() {
    this.looping();
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps);
  // }

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
    const { answer } = this.props.content;
    const { nilai } = this.state;
    const nilaiPersentase = (nilai / answer.length) * 100;
    const salah = answer.length - nilai;
    return <Result nilai={nilaiPersentase} benar={nilai} salah={salah} />;
  }
}

const mapStateToProps = state => ({
  content: state.content
});

export default connect(
  mapStateToProps,
  { totalNilai }
)(ResultContainer);
