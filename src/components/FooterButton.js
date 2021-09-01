import React from "react";
import { connect } from "react-redux";
import { setFilterTodo, todoFilterEnum } from "../store/actions";

function FooterButton(props) {
  const OnClick = (e, action) => {
    e.preventDefault();
    props.setFilterTodo(action);
  }
  return (
    <li>
      <a
        href={"#"+props.filter}
        className={ props.show===props.filter ? "selected" : ""  }
        onClick={ (e) => { OnClick(e, props.filter) } }
      >
        { props.filter }
      </a>
    </li>
  );
}

export default connect(
  (state) => ({
    show: state.show
  }),
  { setFilterTodo }
)(FooterButton);
