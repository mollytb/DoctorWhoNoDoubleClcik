import React, {
  Component
} from "react";
import DoctorCard from "./components/DoctorCard";
import Wrapper from "./components/Wrapper";
import Navpills from './components/Navpills'
import Title from "./components/Title";
import doctors from "./doctors.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: " " 
    + "Click an image to begin!",
    topScore: 0,
    currentScore: 0,
    doctors: doctors,
    unselectedDoctors: doctors

  };
  componentDidMount() {}
  clickDoctorCard = id => {
    const findDoctor = this.state.unselectedDoctors.find(item => item.id === id);

    if (findDoctor === undefined) {
      // failure to select a new doctor
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        doctors: doctors,
        unselectedDoctors: doctors

      });
    }
      else {
        // success to select a new doctor
        const newDoctors = this.state.unselectedDoctors.filter(item => item.id !== id);

        this.setState({
          message: "You guessed correctly!",
          currentScore: this.state.currentScore + 1,
          doctors: doctors,
          unselectedDoctors: doctors
        });
      }
      this.rotateDoctors(doctors);
    };
  
    rotateDoctors = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }


    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return ( <Wrapper>
          <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
        <Title> Doctor Who </Title> {
          this.state.doctors.map(doctor => ( <
            DoctorCard
            rotateDoctors = {this.rotateDoctors}
            id = {doctor.id}
            key = {doctor.id}
            name = {doctor.name}
            image = {doctor.image}
            occupation = {doctor.occupation}
            />
          ))
        } 
        </Wrapper>
      );
    }
  }

  export default App;