import { checkError, client } from './client';

export async function getTVShows() {
  const response = await client
    .from('tv shows')
    .select();

  return checkError(response);
}