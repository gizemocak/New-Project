import React from "react";
import { Link } from "react-router-dom";

class RandomImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      alt: "",
      src: null
    };
  }

  validateResponse = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  blobToFile = (theBlob, fileName) => {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  };

  componentDidMount() {
    this.handleComponentMount();
  }

  handleComponentMount = () => {
    fetch("https://picsum.photos/200/300/?random")
      .then(this.validateResponse)
      .then(response => response.blob())
      .then(response => {
        this.setState({ data: response });
      });
  };

  handleGetImage = () => {
    this.handleComponentMount();
    this.setState({ src: URL.createObjectURL(this.state.data) });
  };

  render() {
    return (
      <div>
        <h1>Random Image</h1>
        <button onClick={this.handleGetImage}>Get a Random Image</button>
        <img alt={this.state.alt} src={this.state.src} />
        <Link className="link" to="/">
          Back to the Home Page
        </Link>
      </div>
    );
  }
}

export default RandomImage;
