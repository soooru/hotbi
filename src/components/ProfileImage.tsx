import { resolve } from 'path'

interface Props {
  mbti?: string
}

function ProfileImage({ mbti }: Props) {
  const isImage = () => {
    try {
      if (!mbti) return false
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = `https://www.magic-teddy.net/images/${mbti}.png`

        img.onload = function () {
          resolve(true)
        }
        img.onerror = function () {
          resolve(false)
        }
      })
    } catch (error) {
      return false
    }
  }

  console.log('isImage', isImage())
  return isImage() ? (
    <img
      src={`https://www.magic-teddy.net/images/${mbti}.png`}
      alt="mbti charactor profile"
      onError={(event) =>
        ((event.target as HTMLInputElement).style.display = 'none')
      }
    />
  ) : null
}

export default ProfileImage
