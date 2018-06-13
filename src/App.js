import React, { Component } from "react";
import DoctorCard from "./components/DoctorCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import doctors from "./doctors.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    doctors
  };

  rotateDoctors = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const doctors = this.state.doctors.filter(doctor => doctor.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ doctors });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Doctor Who</Title>
        {this.state.doctors.map(doctor => (
          <DoctorCard
          rotateDoctors={this.rotateDoctors}
            id={doctor.id}
            key={doctor.id}
            name={doctor.name}
            image={doctor.image}
            occupation={doctor.occupation}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;