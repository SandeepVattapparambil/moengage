import React, { Component } from "react";
import "./App.css";

import Row from "../Row/Row";

class App extends Component {
  render() {
    return (
      <Row>
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content  light-blue lighten-5 black-text">
              <span className="card-title">
                <i className="material-icons left blue-text"> mail </i> All
                Campaigns
              </span>
            </div>
            <div className="card-content grey-text header">
              <span className="card-title">
                <i className="material-icons left grey-text"> subject </i>
                Campaign List
                <a href="!#" className="waves-effect waves-light blue btn create-new-campaign">
                  <i className="material-icons left"> add </i>Create New
                </a>
              </span>
            </div>
            <div className="card-content grey-text list">
              <div className="row">
                <div className="col s8 campaign-list-container">
                  <div className="col s12 main">
                    <div className="col s1 center-align"><span className="number-badge">1</span></div>
                    <div className="col s5">
                      <strong>Campaign 1</strong><br /> created at 2:30pm
                    </div>
                    <div className="col s6">
                      <div className="col s3 center-align">
                        <i className="material-icons center-icon yellow-text left">
                          pause_circle_filled
                        </i><br/><span className="sub-text">Pause</span>
                      </div>
                      <div className="col s3 center-align">
                        <i className="material-icons center-icon left blue-text"> comment </i><br/>
                        <span className="sub-text">Comment</span>
                      </div>
                      <div className="col s3 center-align">
                        <i className="material-icons center-icon left blue-text"> create </i><br/><span className="sub-text">Rename</span>
                      </div>
                      <div className="col s3 center-align">
                        <i className="material-icons center-icon left red-text"> delete </i><br/><span className="sub-text">Delete</span>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col s4 campaign-comment-container">
                  6 - columns(one - half)
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default App;
