import { eq } from "drizzle-orm";
import { db } from "../../../../utils";
import { TopIdeas } from "../../../../utils/Schema";
import { downvote, upvote, alreadyDownvoted, alreadyUpvoted } from "../../../services";

const Ideas = ({ ideas, index, refreshData } : { ideas: any, index: Number, refreshData: () => void}) => {
  const upVoteHandler = async () => {
    if(upvote(ideas.id)) {
    const result = await db
      .update(TopIdeas)
      .set({
        vote: ideas.vote + 1,
      })
      .where(eq(TopIdeas.id, ideas.id))
      .returning({ id: TopIdeas.id });
    if (result) {
      refreshData();
    }
    }
  }

  const downVotes = async () => {
    if(downvote(ideas.id)) {
      const result = await db
        .update(TopIdeas)
        .set({
          vote: ideas.vote - 1,
        })
        .where(eq(TopIdeas.id, ideas.id))
        .returning({ id: TopIdeas.id });
      if (result) {
        refreshData();
      }
    }
  }
  return (
    <div className="w-full h-auto p-4 mt-2 text-justify rounded shadow shadow-slate-500 first-letter:capitalize">
      <div className="flex justify-between gap-4">
        <h2>
          <span>{index + 1}. </span>
          {ideas?.content}
        </h2>
        <div className="flex flex-col space-y-2 text-center">
          <h2
            className={`p-1 px-2 text-lg rounded-md cursor-pointer hover:bg-slate-200 ${alreadyUpvoted(ideas.id) ? "bg-slate-200" : ""}`}
            onClick={upVoteHandler}
          >
            🔥
          </h2>
          <h2>{ideas.vote}</h2>
          <h2
            onClick={downVotes}
            className={`p-1 px-2 text-lg rounded-md cursor-pointer hover:bg-slate-200 ${alreadyDownvoted(ideas.id) ? "bg-slate-200" : ""}`}
          >
            👎
          </h2>
        </div>
      </div>
      <div className="mt-2 font-bold text-right opacity-70">
        By @{ideas.username} at {ideas.createdAt.toLocaleDateString()}
        {
          //   ideas.createdAt.toLocaleTimeString()
        }
      </div>
    </div>
  );
}

export default Ideas