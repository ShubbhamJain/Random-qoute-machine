import React from 'react';
import {connect} from 'react-redux';
import {fetchQuote} from '../actions/quoteAction';
import { FaTwitter } from 'react-icons/fa';

class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);

    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote(e) {
    e.preventDefault();
    this.props.fetchQuote();
  }

  render() {
    return (
      <div id='contain'>
        <h1 id='head'>Inspirational Quotes</h1>
        <form onSubmit={this.nextQuote} id='quote-box'>
          <section id='data'>
            <p id='text'>{this.props.quote}</p>
            <p id='author'>-{this.props.author}</p>
          </section>
          <section id='action'>
            <a id='tweet-quote' href='http://twitter.com/intent/tweet' target='_blank' rel="noopener noreferrer">
              <FaTwitter id='icon' size={28} />
            </a>
            <button type='submit' id='new-quote'>Next Quote</button>
          </section>
        </form>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchQuote();
  }
}

const mapStateToProps = state => ({
  quote: state.qRed.quoteData.content,
  author: state.qRed.quoteData.author
});

export default connect(mapStateToProps, {fetchQuote})(DisplayQuote);
