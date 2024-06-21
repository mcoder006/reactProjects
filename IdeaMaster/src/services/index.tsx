
export const upvote = (id: string): boolean => {
  // Retrieve the 'votes' object from localStorage or initialize it
  const votesString = localStorage.getItem("votes");
  let vote: { upvotes: string[]; downvotes: string[] };

  if (votesString) {
    // Safe to parse the JSON since votesString is not null
    vote = JSON.parse(votesString) as {
      upvotes: string[];
      downvotes: string[];
    };
  } else {
    // Initialize the votes object if it doesn't exist in localStorage
    vote = { upvotes: [], downvotes: [] };
  }

  // Check if the 'id' is already in the 'upvotes' array
  if (vote.upvotes.includes(id)) {
    return false; // 'id' already upvoted, return false
  }

  // Remove 'id' from 'downvotes' if it exists
  const downvoteIndex = vote.downvotes.indexOf(id);
  if (downvoteIndex !== -1) {
    vote.downvotes.splice(downvoteIndex, 1);
  }

  // Add 'id' to 'upvotes'
  vote.upvotes.push(id);

  // Downvotes
  const downVotes = vote.downvotes?.filter(item => item != id);
  vote.downvotes = downVotes;

  // Save the updated 'votes' object back to localStorage
  localStorage.setItem("votes", JSON.stringify(vote));

  return true; // 'id' successfully upvoted
};

export const downvote = (id: string): boolean => {
    const votesString = localStorage.getItem('votes');
    let vote: { upvotes: string[]; downvotes: string[] };

    if (votesString) {
        vote = JSON.parse(votesString) as { upvotes: string[]; downvotes: string[] };
    } else {
        vote = { upvotes: [], downvotes: [] };
    }

    if (vote.downvotes.includes(id)) {
        return false;
    }

    const upvoteIndex = vote.upvotes.indexOf(id);
    if (upvoteIndex !== -1) {
        vote.upvotes.splice(upvoteIndex, 1);
    }

    vote.downvotes.push(id);

    localStorage.setItem('votes', JSON.stringify(vote));

    return true;
};

export const alreadyUpvoted = (id: string): boolean => {
  const votesString = localStorage.getItem("votes");
  if (!votesString) {
    return false; // If there's no 'votes' data in localStorage, return false
  }

  const vote = JSON.parse(votesString) as {
    upvotes: string[];
    downvotes: string[];
  };
  return vote.upvotes.includes(id); // Return true if 'id' is in the 'upvotes' array
};

export const alreadyDownvoted = (id: string): boolean => {
  const votesString = localStorage.getItem("votes");
  if (!votesString) {
    return false; // If there's no 'votes' data in localStorage, return false
  }

  const vote = JSON.parse(votesString) as {
    upvotes: string[];
    downvotes: string[];
  };
  return vote.downvotes.includes(id); // Return true if 'id' is in the 'downvotes' array
};



