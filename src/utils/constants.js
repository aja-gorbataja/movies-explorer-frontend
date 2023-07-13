export const MOBILE = 500;
export const TABLET = 800;
export const SHORT_MOVIE = 40;

export function fixDuration(duration) {
  const hours = Math.floor(duration/60);
  const minutes = Math.floor(duration % 60);
  return `${hours > 0 ? hours + 'ч ' : ''}${minutes}м`;
}