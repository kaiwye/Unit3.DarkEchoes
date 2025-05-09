import "./Episodes.css";

export default function Episodes({ episodeList, setSelectedEpisode }) {
  return (
    <div className="episodes">
      <h2>Episodes</h2>
      <ul className="episodes">
        {episodeList.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
