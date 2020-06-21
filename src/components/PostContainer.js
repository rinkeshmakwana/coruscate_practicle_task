import React, { Component, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Pagination from '@material-ui/lab/Pagination';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      placeholder: "Loading...",
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/"); // fetching the data from api, before the page loaded
      // const posts = await res.json();
      this.setState({
        posts: res.data.results,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
    console.log(this.state.posts);
  }

  render() {
    return (
      <div className="container">
        {this.state.posts.map((post) => {
          return (
            <Card className="my-2" key={post.id} variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                {post.authorId}
                </Typography>
                <Typography variant="h5" component="h2">
                {post.title}
                </Typography>
                <Typography color="textSecondary">date time</Typography>
                <Typography variant="body2" component="p">{post.description}</Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                className = "mb-2 ml-4"
                startIcon={<ThumbUpAltIcon />}
            >
                {post.numLikes}
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className = "mb-2 ml-4"
                startIcon={<CommentIcon />}
            >
                {post.numComments}
            </Button>
            </Card>
          );
        })}
        <Pagination className="row justify-content-center align-items-center" count={10} color="primary" />
      </div>
    );
  }
}

export default PostContainer;
