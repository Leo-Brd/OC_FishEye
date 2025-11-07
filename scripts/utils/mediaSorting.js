// Media sorting utility function

function sortMedias(medias, criterion) {
  const sorted = [...medias];
  if (criterion === 'popularity') {
    sorted.sort((a, b) => b.likes - a.likes);
  } else if (criterion === 'date') {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (criterion === 'title') {
    sorted.sort((a, b) => a.title.localeCompare(b.title, 'fr', {sensitivity: 'base'}));
  }
  return sorted;
}
