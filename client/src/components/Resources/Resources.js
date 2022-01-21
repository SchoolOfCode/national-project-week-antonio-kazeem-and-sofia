import React, { Component } from "react";
import ResourceItem from "./ResourceItem";

class Resources extends Component {
  state = {
    resources: [
      {
        id: "1",
        title: "Array.prototype.filter()",
        description:
          "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
      },
      {
        id: "2",
        title: "Array.prototype.map()",
        description:
          "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
      },
      {
        id: "3",
        title: "Array.prototype.reduce()",
        description:
          "The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
      },
      {
        id: "4",
        title: "Array.prototype.slice()",
        description:
          "The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. ",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
      },
      {
        id: "5",
        title: "Array.prototype.indexOf()",
        description:
          "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
      },
      {
        id: "6",
        title: "Array.prototype.push()",
        description:
          "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
      }
    ]
  };

  render() {
    return (
      <div style={resourceStyle}>
        {this.state.resources.map((resource) => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </div>
    );
  }
}

const resourceStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem"
};

export default Resources;
