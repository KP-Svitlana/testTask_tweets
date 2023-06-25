import { updateUserById } from 'API';

export async function subFolower(prevFollowers, id) {
  const newFollowers = prevFollowers - 1;
  const response = await updateUserById(id, {
    followers: newFollowers,
    isFollowing: false,
  }).then(result => result.data);
  return response;
}
