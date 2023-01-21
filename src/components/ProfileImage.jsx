const ProfileImage = ({image}) => {

return (
    <img
        src={image.user.image}
        className="profile"
        alt="profile"
      />
)
}

export default ProfileImage