import React from 'react';
import questions from './data';
import SingleQuestion from './Question'
function App() {
  return (
    <main>
      <div className = "container">
        <h3>
          Question and answer about login
        </h3>
        <section className="info">
          {questions.map((question)=>{
            return <SingleQuestion {...question} key = {question.id}></SingleQuestion>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
