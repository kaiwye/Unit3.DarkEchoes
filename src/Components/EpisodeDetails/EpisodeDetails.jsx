import "./EpisodeDetails.css";

export default function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <div className="details">
        <h2>Episode Guide</h2>
        <p>Please select an episode to learn more!</p>
      </div>
    );
  }
  return (
    <div className="details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=Aq5WXmQQooo", "_blank")
        }
      >
        Watch Now! Press Me :)
      </button>
    </div>
  );
}
