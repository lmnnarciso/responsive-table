import React from "react";

import { Container, Icon, Grid, Image } from "semantic-ui-react";

import "./App.css";

import DATA from "./data/TABLE_DATA.json";

const TABLE_HEADER = [
  {
    Header: "Product Information"
  },
  {
    Header: "KPI"
  },
  {
    Header: "Avg Price"
  },
  {
    Header: "Avg Profit"
  },
  {
    Header: "Avg Margin"
  },
  {
    Header: "Avg Daily Unit Sold"
  },
  {
    Header: "Avg Daily Revenue"
  },
  {
    Header: "Avg ROI"
  },
  {
    Header: "Avg Daily Rank"
  },
  {
    Header: "Reviews"
  },
  {
    Header: "Rating"
  },
  {
    Header: "Dimensions"
  },
  {
    Header: "More"
  }
];

// const TABLE_DATA;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  iconToggle = (e, color = "red") => {
    console.log(e.target.getAttribute("aria-label"));

    let ariaLabel = e.target.getAttribute("aria-label");
    let element = document.querySelector(`[aria-label="${ariaLabel}"]`);

    console.log(element);
    console.log(color);
    console.log(e);
    if (element.classList.contains("grey")) {
      element.classList.toggle("grey");
      element.classList.toggle(color);
    } else {
      element.classList.toggle(color);
      element.classList.toggle("grey");
    }
  };
  render() {
    return (
      <div className="App">
        <Container>
          <table>
            <thead className="table-head table-row--border-radius">
              <tr>
                <th className="first-cell">
                  <input type="checkbox" />
                </th>
                {TABLE_HEADER.map((header, index) => {
                  if (index === TABLE_HEADER.length - 1) {
                    return <th className="last-cell">{header.Header}</th>;
                  }
                  return <th>{header.Header}</th>;
                })}
              </tr>
            </thead>
            {/* <Button primary>Primary</Button>
            <Button secondary>Secondary</Button> */}
            <tbody>
              {DATA.Data.map((row, index) => (
                <>
                  <tr className="table-row">
                    <td className="first-cell">
                      <input type="checkbox" />
                    </td>
                    <td className="product-information">
                      <Grid stackable centered>
                        <Grid.Column width={4}>
                          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </Grid.Column>
                        <Grid.Column width={12}>
                          <Grid.Row>
                            <Container text>
                              <a>{row.ProductInformation.Name}</a>
                            </Container>
                          </Grid.Row>
                          <Grid.Row className="product-information__group-data--row">
                            <Grid className="product-information__group-data--grid">
                              <Grid.Column
                                width={3}
                                className="grid--no-padding-left"
                                id="product-information-flag"
                              >
                                <Image
                                  // circular={true}
                                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                                />
                              </Grid.Column>
                              <Grid.Column
                                id="product-information-id"
                                className=""
                                width={4}
                              >
                                <div className="product-id">
                                  {row.ProductInformation.ID}
                                </div>
                              </Grid.Column>
                              <Grid.Column width={9}>
                                <Grid>
                                  <Grid.Row>
                                    <Grid.Column width>
                                      <Icon
                                        size="large"
                                        aria-label={`icon-11${index}`}
                                        name="bug"
                                        className="clickable-icon"
                                        color={"grey"}
                                        onClick={e => this.iconToggle(e)}
                                      />
                                      <Icon
                                        size="large"
                                        aria-label={`icon-12${index}`}
                                        name="lock"
                                        className="clickable-icon"
                                        color={"grey"}
                                        onClick={e => this.iconToggle(e)}
                                      />
                                      <Icon
                                        size="large"
                                        aria-label={`icon-13${index}`}
                                        name="list"
                                        className="clickable-icon"
                                        color={"grey"}
                                        onClick={e => this.iconToggle(e)}
                                      />
                                      <Icon
                                        size="large"
                                        aria-label={`icon-14${index}`}
                                        name="boxes"
                                        className="clickable-icon"
                                        color={"grey"}
                                        onClick={e => this.iconToggle(e)}
                                      />
                                      <Icon
                                        size="large"
                                        aria-label={`icon-15${index}`}
                                        name="chat"
                                        className="clickable-icon"
                                        color={"grey"}
                                        onClick={e => this.iconToggle(e)}
                                      />
                                    </Grid.Column>
                                  </Grid.Row>
                                </Grid>
                              </Grid.Column>
                            </Grid>
                          </Grid.Row>
                        </Grid.Column>
                      </Grid>
                    </td>
                    {/* <Grid> */}
                    {/* <Grid.Column> */}
                    {/* <td>{row.KPI}</td> */}
                    {/* </Grid.Column> */}
                    {/* </Grid> */}
                    <td>{row.KPI}</td>
                    <td>{row.AveragePrice}</td>
                    <td>{row.AverageProfit}</td>
                    <td>{row.AverageMargin}</td>
                    <td>{row.AverageDailyUnitSold}</td>
                    <td>{row.AverageDailyRevenue}</td>
                    <td>{row.AverageROI}</td>
                    <td>{row.AverageDailyRank}</td>
                    <td>{row.Reviews}</td>
                    <td>{row.Rating}</td>
                    <td>{row.Dimensions}</td>
                    <td className="last-cell">
                      <Grid stackable>
                        <Grid.Column>
                          <Grid.Row>
                            <Icon
                              size="large"
                              name="folder"
                              className="clickable-icon"
                              color={"grey"}
                              aria-label={`icon-folder${index}`}
                              onClick={e => this.iconToggle(e, "blue")}
                            />
                          </Grid.Row>
                          <Grid.Row>
                            <Icon
                              size="large"
                              name="bell slash outline"
                              className="clickable-icon"
                              aria-label={`icon-bell${index}`}
                              color={"grey"}
                              onClick={e => this.iconToggle(e, "blue")}
                            />
                          </Grid.Row>
                          <Grid.Row>
                            <Icon
                              size="large"
                              name="ellipsis vertical"
                              className="clickable-icon"
                              aria-label={`icon-ellipses${index}`}
                              color={"grey"}
                              onClick={e => this.iconToggle(e, "blue")}
                            />
                          </Grid.Row>
                        </Grid.Column>
                      </Grid>
                    </td>
                  </tr>
                  <div className="row-gap"></div>
                </>
              ))}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}

export default App;
