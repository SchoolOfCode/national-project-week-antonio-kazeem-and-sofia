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
        title: "Array.prototype.flat()",
        description:
          "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
      },
      {
        id: "6",
        title: "Array.prototype.push()",
        description:
          "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
      },
      {
        id: "7",
        title: "Array.prototype.every()",
        description:
          "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
      },
      {
        id: "8",
        title: "Array.prototype.some()",
        description:
          "The some() method tests whether at least one element in the array passes the test implemented by the provided function.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
      },
      {
        id: "9",
        title: "Array.prototype.pop()",
        description:
          "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
      },
      {
        id: "10",
        title: "Array.prototype.join()",
        description:
          "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
      },
      {
        id: "11",
        title: "Array.prototype.shift()",
        description:
          "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
      },
      {
        id: "12",
        title: "Array.prototype.sort()",
        description:
          "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.",
        html_url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
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
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr)",
  gridGap: "1rem",
  alignItems: "center"
};

export default Resources;
