import React, { Component } from "react";
import "./styles.css";
import { Table } from "reactstrap";

import { withServer } from "./Api/context";
import dotenv from "dotenv";
import { Link } from "react-router-dom";
dotenv.config();

class List extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    this.fetchingData();
  }

  fetchingData = () => {
    this.props.server
      .getAll()
      .then((response) => {
        this.setState({ my_res: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  render() {
    const { my_res } = this.state;
    console.log(my_res);
    return (
      <Table responsive striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Size</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          {my_res &&
            my_res.map((x) => {
              return (
                <tr>
                  <td>
                    <Link className="text-center" to={"/" + x._id}>
                      {x._id}
                    </Link>
                  </td>
                  <td>{x.title}</td>
                  <td>{x.size}</td>
                  <td>{x.format}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }
}

export default withServer(List);
