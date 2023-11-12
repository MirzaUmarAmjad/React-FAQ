import Question from "./QuestionComponent";

const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "When can I get it?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];


function App() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Project 2: FAQ/Accordion</h1>
        <div style={{background:"darkblue", margin:"auto", width: "50%", borderRadius: 5, paddingBottom:10}}>
            <h1 style={{color:"white", textAlign:"center"}}>Frequently Asked Questions</h1>
            <div>
                {questions.map((question) => <Question title={question.title} info={question.info} /> )}


            </div>


        </div>
    </div>
  );
}

export default App;
