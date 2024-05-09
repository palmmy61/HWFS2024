function checkAnswer(answer, questionNumber) {
   const result = document.getElementById(`result${questionNumber}`);
   const summary = document.getElementById("summary");
   if (answer === 'a') {
       result.textContent = "ถูกต้อง!";
       result.style.color = 'green';
   } else {
       result.textContent = "ไม่ถูกต้อง! ลองอีกครั้ง";
       result.style.color = 'red';
   }

   // Calculate and display summary
   const totalQuestions = 2; // Total number of questions
   let correctAnswers = 0;
   for (let i = 1; i <= totalQuestions; i++) {
       const resultText = document.getElementById(`result${i}`).textContent;
       if (resultText === "ถูกต้อง!") {
           correctAnswers++;
       }
   }
   summary.textContent = `คุณได้ ${correctAnswers} จาก ${totalQuestions} คำถามถูกต้อง`;
}
