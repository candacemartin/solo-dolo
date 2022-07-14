import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewKinoko extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      start_date: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit() {
    const defaults = {
      name: 'Noname',
      start_date: 'Nodate',
    };
    const kinokoInfo = {};
    Object.keys(this.state).forEach((prop) => {
      if (this.state[prop] === '') kinokoInfo[prop] = defaults[prop];
      else kinokoInfo[prop] = this.state[prop];
    });

    fetch('./', {
      method: 'POST',
      body: JSON.stringify(kinokoInfo),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length <= 1) throw 'Incorrect shape of response';
        return this.props.addKinoko([data]);
      })
      .catch((err) => console.log('newKinoko: ERROR: ', err));
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className='mainSection newKinokoContainer'>
        <Link to='/' className='backLink'>
          <button type='button' className='btnSecondary'>
            Back to all characters
          </button>
        </Link>
        <article className='card newKinoko'>
          <h2>New Kinoko Info</h2>
          <div className='nicknameFields'>
            <label htmlFor='name'>Name:</label>
            <input
              name='name'
              placeholder='Give your kinoko a name'
              value={this.state.name}
              onChange={this.handleInput}
            />
          </div>
          <div className='nicknameFields'>
            <label htmlFor='start_date'>Start Date:</label>
            <input
              name='start_date'
              placeholder='date'
              value={this.state.start_date}
              onChange={this.handleInput}
            />
          </div>
          <button
            type='button'
            className='btnMain customCharNickname'
            onClick={this.handleSubmit}
          >
            Add Kinoko
          </button>
        </article>
      </section>
    );
  }
}

export default withRouter(CustomCharacter);
