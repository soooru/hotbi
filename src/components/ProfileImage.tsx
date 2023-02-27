interface Props {
  mbti?: string
}

function ProfileImage({ mbti }: Props) {
  const isImage = () => {
    try {
      const profile = require(`../assets/images/${mbti}.png`)
      if (profile) {
        return true
      }
      throw new Error('0')
    } catch (error) {
      return false
    }
  }

  return isImage() ? (
    <img
      src={require(`../assets/images/${mbti}.png`)}
      alt="mbti charactor profile"
      onError={(event) =>
        ((event.target as HTMLInputElement).style.display = 'none')
      }
    />
  ) : null
}

export default ProfileImage
