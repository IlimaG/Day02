import Action from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet({ props }) {

  return (
    <div className="tweet">

      <ProfileImage image={props} />

      <div className="body">
        <div className="top">
          <User user={props} />
          <Timestamp time={props} />
        </div>

        <Message message={props}/>

        <Action/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
