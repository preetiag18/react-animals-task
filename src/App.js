import React, { Component } from "react";
import "./App.css";
import { animals } from "./animals";
import Card from "./Card";

class App extends Component {
  state = {
    animals: animals,
    search: "",
    dislike: 0,
  };

  removeCardHandler = (clickedName) => {
    const updatedArray = this.state.animals.filter(
      (filterElement) => filterElement.name !== clickedName
    );
    this.setState({ animals: updatedArray });
  };

  addLikesHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  addDislikeHandler = (name) => {
    this.setState((state) => {
      const updatedDislikeArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes - 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedDislikeArray,
      };
    });
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          removeCard={() => this.removeCardHandler(animal.name)}
          addLikes={() => this.addLikesHandler(animal.name)}
          addDislikes={() => this.addDislikeHandler(animal.name)}
        />
      );
    });

    return (
      <div className="wrapper">
        <h1>{this.state.animals.length} Animals</h1>
        <input type="text" onChange={this.searchHandler}></input>
        <div className="container">{animalsList}</div>
      </div>
    );
  }
}

export default App;
