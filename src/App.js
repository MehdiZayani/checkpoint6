import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Mehdi Zayani",
      bio: "am a teenager",
      imgSrc: "https://media.licdn.com/dms/image/C4D03AQE6sJQXiLb-nw/profile-displayphoto-shrink_800_800/0/1627900271700?e=2147483647&v=beta&t=Y1FykIn9DPSKFnfijqMYO7bEYY322jdsf2KU8BM69rc",
      profession: "Web Developer",
    },
    shows: false,
    mountedTime: null,
  };
  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    this.interval = setInterval(() => {
      const elapsedTime = Math.floor((new Date() - this.state.mountedTime) / 1000);
      this.setState({ elapsedTime });
    }, 1000);
  }
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  
  render() {
    const { mountedTime } = this.state;
    const elapsedTime = mountedTime ? Math.floor((new Date() - mountedTime) / 1000) : 0;
    const { person, shows} = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} width={300} />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>The component was mounted {elapsedTime} seconds ago.</p>
      </div>
    );
  }
}
export default App;