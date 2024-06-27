import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey there</h1>
        <h3>Let's get started. You can always change your answers later.</h3>
      </header>
      <form action={savePrefs}>
          <label>
            Including registration, hotels, and transportation, I think a competition should cost no more than <input name="myBudget" type="number" min="100" step="50" defaultValue="100" /> dollars in total.
          </label>
          <br />
          <label>
            I would like to travel no more than <input name="myTravelTime" type="number" min="0.5" step="0.5" defaultValue="0.5" /> hours one-way to a competition.
          </label>
          <br />
          <button type="submit">Save</button>
      </form>
    </div>
  );
}

function savePrefs(formData) {
  const budget = formData.get("myBudget");
  const travelTime = formData.get("myTravelTime");
}

export default App;
