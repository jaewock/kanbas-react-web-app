function Project() {
  const apiKey = process.env.REACT_APP_API_KEY;
  // const NAPSTER_API = "https://api.napster.com/v2.2";

  return (
    <div className="container-fluid">
      <h1>Project</h1>
      apiKey: {apiKey}
    </div>
  );
}
export default Project;
