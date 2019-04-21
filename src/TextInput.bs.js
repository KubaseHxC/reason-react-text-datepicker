// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

function TextInput(Props) {
  var props = Props.props;
  return React.createElement("input", {
              className: "rtdp-input" + props[/* className */0],
              maxLength: props[/* maxLength */3],
              name: props[/* name */4],
              pattern: "[0-9]",
              placeholder: props[/* hintText */1],
              type: "text",
              value: props[/* value */2],
              onChange: props[/* onInputChange */5]
            });
}

var make = TextInput;

exports.make = make;
/* react Not a pure module */
