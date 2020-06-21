import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="container">
            {posts.map((post) => {
              const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };
              var formattedDate = (new Date(post.datePublished)).toLocaleDateString('en-US', DATE_OPTIONS);

          return (
            <Card className="my-2" key={post.id} variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Author : {post.authorId}</Typography>
                <Typography variant="h5" component="h2">
                {post.title}
                </Typography>
                <Typography color="textSecondary">posted on : {formattedDate}</Typography>
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
        </div>
    )
}

export default Posts;