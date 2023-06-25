import { updateUserById } from 'API';

export async function addFolower(prevFollowers, id) {
  const newFollowers = prevFollowers + 1;
  const response = await updateUserById(id, {
    followers: newFollowers,
    isFollowing: true,
  }).then(result => result.data);

  return response;
}
