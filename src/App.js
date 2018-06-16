import React, {
  Component
} from "react";
import DoctorCard from "./components/DoctorCard";
import Wrapper from "./components/Wrapper";
import Navs from './components/Navs'
import Title from "./components/Title";
import doctors from "./doctors.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
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
  
    rotateDoctors = id => {
      this.state.doctors.forEach((image) => {
        if (image.id === id) {
          if (image.clicked) {
            alert("You lost. You already selected this version of the Doctor");
            this.setState({})
            this.resetGame();
            return false;
          }
          else {
            this.updateScore();
            image.clicked = true;
          }
          if (this.state.currentScore >= this.state.topScore) {
            this.newTopScore();
          }
        }
      });
    }
    randomOrganize = (doctors) => {
      let copy = [], n = doctors.length, i;
      while (n) {
        i = Math.floor(Math.random() * doctors.length);
        if (i in doctors) {
          copy.push(doctors[i]);
          delete doctors[i];
          n--;
        }
      }
      this.setState({ doctors: copy });
    }

    updateScore = () => {
      this.setState((newState) => ({
        score: newState.score + 1
      }), () => this.winning())
    }
  
    newTopScore = () => {
      this.setState((newState) => ({
        topScore: newState.currentScore
      }))
    }
  
    winning = () => {
      if (this.state.currentScore === this.state.doctors.length) {
        alert('YOU WIN!! congratulations!')
        this.setState({});
        this.resetGame();
      }
      else {
        setTimeout(() => {
          this.randomOrganize(this.state.doctors)
        }, 500);
      }
    }
  
    resetGame = () => {
      this.state.doctors.forEach((image) => {
        image.cliked = false;
      })
      this.setState({ currentScore: 0 })
    }
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return ( <Wrapper>
          <Navs
    
                    currentScore={this.state.currentScore}
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