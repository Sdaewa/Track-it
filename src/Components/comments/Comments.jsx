import React from "react";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { jobId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(jobId);
  }, [jobId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(jobId);
  }, [sendRequest, jobId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments</p>;
  }

  return (
    <Card>
      <section className={classes.comments}>
        <h2>Comments</h2>
        {!isAddingComment && (
          <button className="btn" onClick={startAddCommentHandler}>
            Add Comment
          </button>
        )}
        {isAddingComment && (
          <NewCommentForm jobId={jobId} onAddedComment={addedCommentHandler} />
        )}
        {comments}
      </section>
    </Card>
  );
};

export default Comments;
